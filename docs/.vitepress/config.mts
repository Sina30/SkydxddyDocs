import { defineConfig } from 'vitepress'
import tabsPlugin from "@red-asuka/vitepress-plugin-tabs";
import MarkdownIt from 'markdown-it';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/SkydxddyDocs/",
  title: "Skydxddy Stuff",
  description:
    "Official documentation for Skydxddy RedM/Fivem resources, including installation guides, configuration references, and API documentation.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.svg",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/getting-started" },
      { text: "Scripts", link: "/scripts" },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search documentation...",
          },
        },
      },
    },
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Einführung", link: "/getting-started" },
          { text: "Versionshinweise", link: "/changelog" },
        ],
      },

      {
        text: "Basic",
        collapsed: true,

        items: [
          {
            text: "Apache2, PHP 8.3, MariaDB und phpMyAdmin",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/apache2-php-mariadb",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
          {
            text: "FiveM Server unter Debian installieren inkl. txAdmin",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/apache2-php-mariadb",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
          {
            text: "txAdmin: Server Artifacts aktualisieren",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/txadmin-artifacts",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
          {
            text: "esx:getSharedObject Deprecation",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/esx-getsharedobject",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
          {
            text: "TeamSpeak 3 Server unter Linux installieren",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/teamspeak-linux",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
          {
            text: "HeidiSQL – Tool für die Datenbank",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/heidisql",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
          {
            text: "DebugPrint",
            collapsed: true,
            items: [
              // { text: "Overview", link: "/scripts/interaction/" },
              {
                text: "Installation",
                link: "/scripts/debugprint",
              },
              // {
              //   text: "Configuration",
              //   link: "/scripts/interaction/configuration",
              // },
              // { text: "API", link: "/scripts/interaction/api" },
              // { text: "Changelog", link: "/scripts/interaction/changelog" },
            ],
          },
        ],
      },
      // {
      //   text: "Scripts",
      //   collapsed: true,

      //   items: [
      //     {
      //       text: "Interaction System",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/interaction/" },
      //         {
      //           text: "Installation",
      //           link: "/scripts/interaction/installation",
      //         },
      //         {
      //           text: "Configuration",
      //           link: "/scripts/interaction/configuration",
      //         },
      //         { text: "API", link: "/scripts/interaction/api" },
      //         { text: "Changelog", link: "/scripts/interaction/changelog" },
      //       ],
      //     },
      //     {
      //       text: "Case System",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/cases/" },
      //         { text: "Installation", link: "/scripts/cases/installation" },
      //         { text: "Configuration", link: "/scripts/cases/configuration" },
      //         { text: "API", link: "/scripts/cases/api" },
      //       ],
      //     },
      //     {
      //       text: "Gambling: Blackjack",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/blackjack/" },
      //         { text: "Installation", link: "/scripts/blackjack/installation" },
      //         {
      //           text: "Configuration",
      //           link: "/scripts/blackjack/configuration",
      //         },
      //       ],
      //     },
      //     {
      //       text: "Gambling: Roulette",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/roulette/" },
      //         { text: "Installation", link: "/scripts/roulette/installation" },
      //         {
      //           text: "Configuration",
      //           link: "/scripts/roulette/configuration",
      //         },
      //       ],
      //     },
      //     {
      //       text: "Racing System",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/racing/" },
      //         { text: "Installation", link: "/scripts/racing/installation" },
      //         { text: "Configuration", link: "/scripts/racing/configuration" },
      //         { text: "API", link: "/scripts/racing/api" },
      //       ],
      //     },
      //     {
      //       text: "Emoji & Minigames",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/emoji/" },
      //         { text: "Installation", link: "/scripts/emoji/installation" },
      //         { text: "Configuration", link: "/scripts/emoji/configuration" },
      //       ],
      //     },
      //     {
      //       text: "Grave Robbery",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/graverobbery/" },
      //         {
      //           text: "Installation",
      //           link: "/scripts/graverobbery/installation",
      //         },
      //         {
      //           text: "Configuration",
      //           link: "/scripts/graverobbery/configuration",
      //         },
      //       ],
      //     },
      //     {
      //       text: "Character Details",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/details/" },
      //         { text: "Installation", link: "/scripts/details/installation" },
      //         { text: "Configuration", link: "/scripts/details/configuration" },
      //       ],
      //     },
      //     {
      //       text: "Phonograph System",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/phonograph/" },
      //         {
      //           text: "Installation",
      //           link: "/scripts/phonograph/installation",
      //         },
      //         {
      //           text: "Configuration",
      //           link: "/scripts/phonograph/configuration",
      //         },
      //       ],
      //     },
      //     {
      //       text: "Telephone System",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/telephone/" },
      //         { text: "Installation", link: "/scripts/telephone/installation" },
      //         {
      //           text: "Configuration",
      //           link: "/scripts/telephone/configuration",
      //         },
      //       ],
      //     },
      //     {
      //       text: "Skydxddy UI (Core)",
      //       collapsed: true,
      //       items: [
      //         { text: "Overview", link: "/scripts/ui/" },
      //         { text: "Installation", link: "/scripts/ui/installation" },
      //         { text: "API Reference", link: "/scripts/ui/api" },
      //       ],
      //     },
      //   ],
      // },
    ],
    // editLink: {
    //   pattern: "https://github.com/Sina30/SkydxddyDocs/tree/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },

    socialLinks: [
      // { icon: "discord", link: "https://discord.gg/BPB42dufXE" },
      // {
      //   icon: {
      //     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
      //       <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
      //     </svg>`,
      //   },
      //   link: "https://www.Skydxddy.com",
      //   ariaLabel: "Store",
      // },
      { icon: "github", link: "https://github.com/Sina30" },
    ],
    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    footer: {
      copyright: "Copyright © 2026 Skydxddy Stuff",
    },
  },
  markdown: {
    config: (md) => {
      tabsPlugin(md as unknown as MarkdownIt);
    },
  },
});
