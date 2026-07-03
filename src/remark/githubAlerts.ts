import { visit } from 'unist-util-visit';

// Confluence exporter emits GitHub-style alerts (`> [!NOTE]`), which
// Docusaurus doesn't understand. Convert them to admonition directives.
// It also drops `[!NOTE]` literals inside table cells, where a blockquote
// can't exist anyway.

const ALERT_TO_ADMONITION: Record<string, string> = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'info',
  WARNING: 'warning',
  CAUTION: 'danger',
};

export default function remarkGithubAlerts() {
  return (tree: any) => {
    visit(tree, 'blockquote', (node: any) => {
      const paragraph = node.children?.[0];
      const text = paragraph?.children?.[0];
      if (text?.type !== 'text') return;
      const match = text.value.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/);
      if (!match) return;
      text.value = text.value.slice(match[0].length);
      if (!text.value) {
        paragraph.children.shift();
        if (!paragraph.children.length) node.children.shift();
      }
      node.type = 'containerDirective';
      node.name = ALERT_TO_ADMONITION[match[1]];
    });

    visit(tree, 'tableCell', (cell: any) => {
      visit(cell, 'text', (textNode: any) => {
        textNode.value = textNode.value.replace(/^>?\s*\[!\w+\]\s*/, '');
      });
    });
  };
}
