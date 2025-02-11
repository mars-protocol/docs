// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/dracula');
// @ts-ignore

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const theme = require("shiki/themes/dracula.json")
const {
  remarkCodeHike,
} = require("@code-hike/mdx")

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Home',
  // tagline: 'Build the future of Mars',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mars-protocol', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   beforeDefaultRemarkPlugins: [
        //     [remarkCodeHike, { theme }],
        //   ],
        //   routeBasePath: 'docs',
        //   path: 'docs',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   lastVersion: 'current',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { 
            showCopyButton: true,
            // lineNumbers: true,
            theme }],
        ],
        id: 'overview',
        path: 'docs/overview',
        routeBasePath: 'docs/overview',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/mars-protocol/docs/blob/master',
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'docs/learn',
        routeBasePath: 'docs/learn',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { 
            showCopyButton: true,
            // lineNumbers: true,
            theme }]
        ],
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/mars-protocol/docs/blob/master',
        // remarkPlugins: [math],
        // rehypePlugins: [katex],
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { 
            showCopyButton: true,
            // lineNumbers: true,
            theme }],
        ],
        id: 'govern',
        path: 'docs/govern',
        routeBasePath: 'docs/govern',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/mars-protocol/docs/blob/master',
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { 
            showCopyButton: true,
            lineNumbers: true,
            theme }],
        ],
        id: 'develop',
        path: 'docs/develop',
        routeBasePath: 'docs/develop',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/mars-protocol/docs/blob/master',
      }, 
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        beforeDefaultRemarkPlugins: [
          [remarkCodeHike, { 
            showCopyButton: true,
            // lineNumbers: true,
            theme }],
        ],
        id: 'validate',
        path: 'docs/validate',
        routeBasePath: 'docs/validate',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/mars-protocol/docs/blob/master',
      }, 
    ],


    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     beforeDefaultRemarkPlugins: [
    //       [remarkCodeHike, { 
    //         showCopyButton: true,
    //         // lineNumbers: true,
    //         theme }],
    //     ],
    //     id: 'infrastructure',
    //     path: 'docs/infrastructure',
    //     routeBasePath: 'docs/infrastructure',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     editUrl: 'https://github.com/mars-protocol/docs/blob/master',
    //   }, 
    // ],

  ],

  themes: ["mdx-v2"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
      // The application ID provided by Algolia
      appId: 'PKVTT851E2',

      // Public API key: it is safe to commit it
      apiKey: '8390d92a26d41f3069f2a03dc8074d47',

      indexName: 'marsprotocol',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
      },

      navbar: {
        title: 'Home',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        //   width: 30,
        //   height: 24,
        // },
        items: [
          {
            to: '/docs/overview/intro-to-mars-protocol/intro-to-mars-protocol-intro',    // ./docs-api/intro.md
            label: 'Overview',
            position: 'left',
            activeBaseRegex: `/overview/`,
          },
          {
            // to: '/docs/learn/astro-pools/constant-product-pools',   
            to: '/docs/learn/overview',
            // to: '/docs/learn/astro-pools/intro',  
            // to: '/docs/learn/index',   
            label: 'Learn',
            position: 'left',
            activeBaseRegex: `/learn/`,
          },

          {
            // to: '/docs/develop/smart-contracts/astroport-contract-addresses',   
            to: '/docs/develop/overview',   
            label: 'Develop',
            position: 'left',
            activeBaseRegex: `/develop/`,
          },

          // {to: '/blog', label: 'Blog', position: 'left'},

          {
            to: '/docs/govern/overview',    // ./docs-api/intro.md
            label: 'Govern',
            position: 'left',
            activeBaseRegex: `/govern/`,
          },

          // {
          //   to: '/docs/infrastructure/category/node-operators',    // ./docs-api/intro.md
          //   label: 'Infrastructure',
          //   position: 'left',
          //   activeBaseRegex: `/infrastructure/`,
          // },
          {
            to: '/docs/validate/overview',    // ./docs-api/intro.md
            label: 'Validate',
            position: 'left',
            activeBaseRegex: `/validate/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mars-protocol',
            label: 'GitHub',
            position: 'right',
          },
        ],

        // style: 'primary',
        hideOnScroll: false,

      },

      colorMode: {
        disableSwitch: true,
      },

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Terms of Service',
                to: '/docs/overview/legal/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/overview/legal/privacy-policy',
              },
              {
                label: 'Cookie Policy',
                to: '/docs/overview/legal/cookie-policy',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/mars_protocol',
              },
              {
                label: 'Discord',
                href: 'https://discord.marsprotocol.io',
              },
              {
                label: 'Forum',
                href: 'https://forum.marsprotocol.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.marsprotocol.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mars-protocol',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },

      metadata: [
        {property: 'og:image', content: 'https://docs.marsprotocol.io/img/home-hero.png'}, 
        {property: 'image', content: 'https://docs.marsprotocol.io/img/home-hero.png'}, 
      ],

      // prism: {
      //   darkTheme: darkCodeTheme,
      // },

    }),
};

module.exports = config;
