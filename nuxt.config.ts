// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "vue3-carousel-nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/tailwind.css"],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: "BioViva",
    },
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.js", name: "English" },
      { code: "tr", iso: "tr-TR", file: "tr.js", name: "Türkçe" },
    ],
    defaultLocale: "en",

    langDir: "locales/",
    strategy: "prefix", // her dil için prefix olacak (/en, /tr)
  },
});
