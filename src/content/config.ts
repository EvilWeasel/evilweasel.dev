import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.enum(["EvilWeasel"]),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080px wide!"
    }),
    coverAlt: z.string(),
  }),
});

export const collections = {
  blog: postsCollection
};