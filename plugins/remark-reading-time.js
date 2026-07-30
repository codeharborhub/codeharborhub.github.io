/**
 * Remark plugin to calculate and inject reading time into frontmatter
 * Estimates reading time based on word count (average 200 words per minute)
 * Code blocks are weighted at 0.5x since code is read differently than prose
 */

const { visit } = require('unist-util-visit');

module.exports = function readingTimePlugin() {
  return (tree, vfile) => {
    let wordCount = 0;
    let codeWordCount = 0;

    // Count words in text nodes
    visit(tree, 'text', (node) => {
      wordCount += node.value
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    });

    // Count words in code blocks (weighted at 0.5x)
    visit(tree, 'code', (node) => {
      codeWordCount += node.value
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    });

    visit(tree, 'inlineCode', (node) => {
      codeWordCount += node.value
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
    });

    // Calculate total words with code weighted at 0.5x
    const totalWords = wordCount + codeWordCount * 0.5;

    // Estimate reading time (200 words per minute, minimum 1 minute)
    const readingTime = Math.max(1, Math.round(totalWords / 200));

    // Inject into frontmatter
    if (!vfile.data.frontMatter) {
      vfile.data.frontMatter = {};
    }
    vfile.data.frontMatter.readingTime = readingTime;
  };
};
