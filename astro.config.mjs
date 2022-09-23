import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://geauxbrandstrategy.netlify.app',
  integrations: [preact(), tailwind(), sitemap(), mdx(),
    storyblok({
      accessToken: "<your-access-token>",
      components: {
        page: "storyblok/Page",
        baseHead: "storyblok/BaseHead",
        blogHeader: "storyblok/BlogHeader",
        blotPostPriview: "storyblok/BlogPostPreview"
      }
    })
  ],
  legacy: {
    astroFlavoredMarkdown: true
  }
});
