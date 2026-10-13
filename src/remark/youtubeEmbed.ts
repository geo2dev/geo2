import { visit } from 'unist-util-visit';

// Pages CMS's rich-text editor drops raw <iframe> HTML, so videos are written
// as the video's YouTube thumbnail alone in its own paragraph (the CMS editor
// shows the thumbnail):
//   ![Registration and signing in | Geo2 Hub](https://img.youtube.com/vi/CNwErNAGN5E/hqdefault.jpg)
// or as a plain YouTube link, and turned into an embedded player here.
// The alt / link text becomes the title.

const YOUTUBE_ID =
  /^https?:\/\/(?:(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)|(?:img|i\d?)\.ytimg\.com\/vi\/|img\.youtube\.com\/vi\/)([\w-]{11})/;

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export default function remarkYoutubeEmbed() {
  return (tree: any) => {
    visit(tree, 'paragraph', (node: any) => {
      if (node.children?.length !== 1) return;
      const child = node.children[0];
      if (child.type !== 'link' && child.type !== 'image') return;
      const id = child.url.match(YOUTUBE_ID)?.[1];
      if (!id) return;
      const title = child.type === 'image' ? child.alt ?? '' : child.children.map((c: any) => c.value ?? '').join('');
      node.type = 'html';
      node.value =
        `<iframe src="https://www.youtube.com/embed/${id}" title="${escape(title)}" ` +
        'style="width:100%;max-width:640px;aspect-ratio:16/9;border:0" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
        'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
      delete node.children;
    });
  };
}
