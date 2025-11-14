import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";

import tailwindcss from "@tailwindcss/vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      // 'accessToken' is the 'Preview' token from Storyblok
      // This will safely load your token from the .env file
      accessToken: env.STORYBLOK_TOKEN,

      // This tells the SDK where to find your Astro components
      // 'blok_name_in_storyblok': 'path/to/YourComponent.astro'
      // IMPORTANT: The path does *not* include 'src/'
      components: {
        hero_section: "components/HeroSection",
        nav: "components/Nav",
        nav_link: "components/NavLink",
        introduction_card: "components/IntroductionCard",
        introduction_section: "components/IntroductionSection",
      },

      // This helps Storyblok's Visual Editor find your site
      apiOptions: {
        region: env.STORYBLOK_REGION ?? "eu", // Important: Change this to 'eu' if your Storyblok space is in Europe
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
