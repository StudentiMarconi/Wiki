import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Wiki/",
  title: "Marconi Wiki",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      { text: "Introduzione", link: "/intro" },
      {
        text: "Informatica",
        link: "/INI",
        collapsed: true,
        items: [{ text: "Java", link: "/INI/java" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    math: true,
  },
});
