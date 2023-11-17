import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.enum(["EvilWeasel", "Du"]),
      cover: image().refine((img) => img.width >= 480, {
        message: "Cover image must be at least 480px wide!",
      }),
      coverAlt: z.string(),
    }),
});

const docsCollection = defineCollection({
  schema: docsSchema(),
});

export const collections = {
  blog: postsCollection,
  docs: docsCollection,
};
