const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zack Brady's Docs",
  tagline: "Documentation for Zack Brady's Project's",
  favicon: 'images/favicon.ico',

  url: 'https://docs.zackbrady.com',
  baseUrl: '/',

  organizationName: 'zackbrady',
  projectName: 'zackbrady-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          versions: {
            current: {
              label: 'latest',
              banner: 'none',
            },
          },
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
        "docusaurus-plugin-remote-content",
        {
          name: "rancher-effortless", // used by CLI, must be path safe
          sourceBaseUrl: "https://raw.githubusercontent.com/zackbradys/rancher-effortless/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
          outDir: "docs/rancher-effortless", // the base directory to output to.
          documents: ["README.md"], // the file names to download
          modifyContent(filename, content) {
            if (filename.includes("README")) {
                return { content: "---" + "\n" + "sidebar_label: Rancher Effortles" + "\n" + "---" + "\n\n" + content }
            }
            return undefined
          },
        },
    ],
    [
        "docusaurus-plugin-remote-content",
        {
          name: "website", // used by CLI, must be path safe
          sourceBaseUrl: "https://raw.githubusercontent.com/zackbradys/rancher-effortless/main/images/", // the base url for the markdown (gets prepended to all of the documents when fetching)
          outDir: "static/images", // the base directory to output to.
          documents: ["rgs-effortless-banner.png", "rancher-harvester-vm-overview.png", "rancher-rke2-cp-01-systemctl.png", "rancher-rke2-cp-01-kubectl.png", "rancher-rke2-cp-01-kubectl-all.png", "rancher-helm-repo-status.png", "rancher-cert-manager-status.png", "rancher-rancher-manager-bootstrap.png", "rancher-rancher-manager-status.png", "rancher-rancher-manager-terms.png", "rancher-rancher-manager-home.png", "rancher-helm-repo-status-longhorn.png", "rancher-longhorn-status.png", "rancher-longhorn-home.png", "rancher-helm-repo-status-neuvector.png", "rancher-neuvector-status.png", "rancher-neuvector-bootstrap.png", "rancher-neuvector-home.png"], // the file names to download
          requestConfig: { responseType: "arraybuffer" } // the request config to use when fetching the markdown files
        },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        title: "Zack Brady's Docs",
        logo: {
          alt: 'zack-bradys-docs-logo',
          src: 'images/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/zackbradys/zackbrady-docs',
            label: 'GitHub',
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
                label: 'Tutorial',
                to: '/docs/intro',
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
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                href: '/blog',
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