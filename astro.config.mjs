import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://evilweasel-blog.netlify.app/",
  integrations: [
    tailwind(),
    mdx(),
    preact(),
    starlight({
      title: "Evil Docs",
      sidebar: [
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
      ],
      defaultLocale: "en",
      social: {
        mastodon: "https://mastodon.online/@EvilWeasel",
        github: "https://github.com/EvilWeasel",
        linkedin: "https://www.linkedin.com/in/tobias-wehrle-690509222/",
      },
    }),
  ],
});
