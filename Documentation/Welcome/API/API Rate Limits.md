
[API](../API.md)

# API Rate Limits

- [Introduction](#introduction)
- [Default Limits](#default-limits)
- [Throttling Behavior](#throttling-behavior)
- [Manual Blocking](#manual-blocking)

# Introduction

To ensure stable performance for all customers, the Public API uses **adaptive rate limiting**. This allows normal traffic and short bursts while protecting the system from sustained overload. Limits are applied **per organization** and scale automatically based on the **subscription level** and **number of users**.

# Default Limits

For a typical organization:

- **Sustained rate:** 60 requests per minute
- **Burst capacity:** up to 120 requests per minute for short periods
- **10-minute limit:** 600 requests

Limits increase proportionally with the number of users in the organization (**+10% per additional user**).

# Throttling Behavior

If the request rate exceeds allowed limits:

- Some requests may be throttled (not executed).
- Throttled requests are still counted toward usage.
- Normal execution resumes automatically when the request rate drops.

Short bursts are allowed, but sustained high traffic may temporarily reduce the allowed throughput until usage returns to normal.

# Manual Blocking

In rare cases, an organization may be **temporarily blocked** from using the API due to abnormal traffic patterns. When this happens, all API requests will be rejected until the block is removed.
