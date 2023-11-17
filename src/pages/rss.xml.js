import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    stylesheet: "/styles/pretty-feed-v3.xsl",
    title: "Evil Blog",
    description: "All the latest news from the evil blog.",
    site: context.site,
    items: blog.map((post) => ({
      link: `/blog/${post.slug}/`,
      // Note: this will not process components or JSX expressions in MDX files.
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
  });
}
