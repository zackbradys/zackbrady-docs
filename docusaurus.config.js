const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zack Brady's Docs",
  tagline: "Documentation for the Randomness of Zack Brady",
  favicon: 'img/favicon.ico',

  url: 'https://docs.zackbrady.com',
  baseUrl: '/',

  organizationName: 'zackbrady',
  projectName: 'zackbrady-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl:
            'https://github.com/zackbradys/zackbrady-docs/docs',
        
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: 'current',
        },
        blog: {
          showReadingTime: true,

          editUrl:
            'https://github.com/zackbradys/zackbrady-docs/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        indexPages: true,
      
        language: "en",
        maxSearchResults: 10,
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        title: "Zack Brady's Docs",
        logo: {
          alt: 'zack-bradys-docs-logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/zackbradys/zackbrady-docs',
            label: 'GitHub Repo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/docs/introduction',
              },
              {
                label: 'Blog',
                href: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Profile',
                href: 'https://github.com/zackbradys',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/zackbradys',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zackbradys',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zack Brady. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;