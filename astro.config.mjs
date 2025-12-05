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
        partner_logo_section: "components/PartnerLogoSection",
        partner_logo: "components/PartnerLogo",
        benefits_carousel_section: "components/BenefitsCarouselSection",
        benefit_card: "components/BenefitCard",
        tab_section: "components/TabSection",
        tab_item: "components/TabItem",
        candidate_section: "components/CandidateSection",
        checklist_item: "components/ChecklistItem",
        solution_section: "components/SolutionSection",
        solution_item: "components/SolutionItem",
        list_item: "components/ListItem",
        installation_section: "components/InstallationSection",
        dealer_section: "components/DealerSection",
        dealer_item: "components/DealerItem",
        beware_section: "components/BewareSection",
        tactic_item_grid: "components/TacticItemGrid",
        tactic_item_list: "components/TacticItemList",
        loan_section: "components/LoanSection",
        loan_item: "components/LoanItem",
        insurance_section: "components/InsuranceSection",
        maintenance_section: "components/MaintenanceSection",
        maintenance_item: "components/MaintenanceItem",
        footer: "components/Footer",
        footer_link: "components/FooterLink",
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
