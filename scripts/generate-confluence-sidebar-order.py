#!/usr/bin/env python3
"""Generate Docusaurus sidebar ordering from the Confluence page tree."""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from collections.abc import Iterable
from dataclasses import dataclass


def normalize_segment(value: str) -> str:
    value = re.sub(r"\.mdx?$", "", value)
    value = value.replace("_", " ").lower()
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def normalize_path(parts: Iterable[str]) -> str:
    return "/".join(part for part in (normalize_segment(part) for part in parts) if part)


@dataclass(frozen=True)
class Client:
    base_url: str
    token: str

    def get(self, path: str, params: dict[str, str | int] | None = None) -> dict:
        query = f"?{urllib.parse.urlencode(params)}" if params else ""
        request = urllib.request.Request(
            f"{self.base_url}{path}{query}",
            headers={
                "Accept": "application/json",
                "Authorization": f"Bearer {self.token}",
            },
        )
        with urllib.request.urlopen(request, timeout=30) as response:
            return json.load(response)

    def get_all_results(self, path: str, params: dict[str, str | int] | None = None) -> list[dict]:
        results: list[dict] = []
        current_path = path
        current_params = dict(params or {})

        while True:
            data = self.get(current_path, current_params)
            results.extend(data.get("results", []))
            next_link = data.get("_links", {}).get("next")
            if not next_link:
                return results

            parsed = urllib.parse.urlparse(next_link)
            current_path = parsed.path.removeprefix("/wiki")
            current_params = {
                key: value[-1]
                for key, value in urllib.parse.parse_qs(parsed.query).items()
            }


def discover_cloud_id(site_url: str, token: str) -> str:
    request = urllib.request.Request(
        "https://api.atlassian.com/oauth/token/accessible-resources",
        headers={
            "Accept": "application/json",
            "Authorization": f"Bearer {token}",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        resources = json.load(response)

    normalized_site = site_url.rstrip("/")
    for resource in resources:
        if resource.get("url", "").rstrip("/") == normalized_site:
            return resource["id"]

    known = ", ".join(sorted(resource.get("url", "") for resource in resources))
    raise RuntimeError(f"Could not find cloud id for {site_url}. Accessible resources: {known}")


def get_homepage(client: Client, space_key: str) -> tuple[str, str]:
    spaces = client.get_all_results("/api/v2/spaces", {"keys": space_key, "limit": 1})
    if not spaces:
        raise RuntimeError(f"Space {space_key!r} was not found")

    space = spaces[0]
    homepage_id = space.get("homepageId")
    if not homepage_id:
        data = client.get(f"/rest/api/space/{space_key}", {"expand": "homepage"})
        homepage_id = data.get("homepage", {}).get("id")

    if not homepage_id:
        raise RuntimeError(f"Space {space_key!r} does not expose a homepage id")

    page = client.get(f"/api/v2/pages/{homepage_id}")
    return str(homepage_id), page["title"]


def get_child_pages(client: Client, page_id: str) -> list[dict]:
    children = client.get_all_results(
        f"/api/v2/pages/{page_id}/direct-children",
        {"limit": 250},
    )
    pages = [child for child in children if child.get("type") == "page"]
    return sorted(pages, key=lambda child: (child.get("childPosition", 0), child.get("title", "")))


def add_children(client: Client, page_id: str, path: list[str], order: dict[str, int]) -> None:
    for fallback_index, child in enumerate(get_child_pages(client, page_id)):
        child_path = [*path, child["title"]]
        key = normalize_path(child_path)
        if key:
            order[key] = int(child.get("childPosition", fallback_index))
        add_children(client, str(child["id"]), child_path, order)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default="https://geo2.atlassian.net")
    parser.add_argument("--space-key", default="BALDEVGEO")
    parser.add_argument("--output", default="src/sidebarOrder.json")
    args = parser.parse_args()

    token = os.environ.get("CONFLUENCE_SCOPED_TOKEN")
    if not token:
        raise RuntimeError("CONFLUENCE_SCOPED_TOKEN is required")

    cloud_id = os.environ.get("CONFLUENCE_CLOUD_ID") or discover_cloud_id(args.site, token)
    client = Client(
        base_url=f"https://api.atlassian.com/ex/confluence/{cloud_id}/wiki",
        token=token,
    )

    homepage_id, homepage_title = get_homepage(client, args.space_key)
    order = {normalize_path([homepage_title]): -1}
    add_children(client, homepage_id, [], order)

    output = os.path.abspath(args.output)
    os.makedirs(os.path.dirname(output), exist_ok=True)
    with open(output, "w", encoding="utf-8") as f:
        json.dump(dict(sorted(order.items())), f, indent=2)
        f.write("\n")

    print(f"Wrote {len(order)} sidebar order entries to {args.output}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (RuntimeError, urllib.error.URLError, urllib.error.HTTPError) as error:
        print(f"error: {error}", file=sys.stderr)
        raise SystemExit(1)


