import { defineConfig } from "vitepress";
import { tasklist } from "@mdit/plugin-tasklist";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Aplóe",
  description:
    "Lightweight and Minimalistic Vue.js Components and Styles for Informational Websites",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // Main Theme Config
    minimal: true,
    author: "Gabriel Cozma", // Change this to Gabriel Cozma
    nav: {
      show: false,

      git: "https://github.com/GabsEdits/aploe",
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: true,
        name: "Gabs",
        link: "https://gxbs.me/",
      },

      sourcecode: {
        show: true,
        link: "https://github.com/GabsEdits/aploe",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },

    config: (md) => {
      md.use(tasklist);
    },
  },
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma" }], // Change this to Gabriel Cozma
    ["link", { rel: "icon", type: "png", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#ff3e00" }], // Your theme color
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Aplóe" }], // Change this to your site name
    ["meta", { name: "twitter:title", content: "Aplóe" }], // Change this to your title
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Lightweight and Minimalistic Vue.js Components and Styles for Informational Websites", // Change this to your description
      },
    ],
    ["meta", { name: "twitter:url", content: "https://aploe.gxbs.me" }], // Change this to your domain
  ],
  sitemap: {
    // Change this to your domain
    hostname: "https://aploe.gxbs.me",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          $color-accent: #A35262; // 8377D1
          `,
        },
      },
    },
  },
});
