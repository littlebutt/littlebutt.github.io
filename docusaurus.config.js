// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyberMuseum',
  tagline: '一个专注于收藏计算机古董的网站',
  favicon: 'img/favicon.ico',

  url: 'https://littlebutt.github.io',

  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'littlebutt',
  projectName: 'littlebutt.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CyberMuseum',
        style: 'dark',
        logo: {
          alt: 'CyberMuseum Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'softwareSidebar',
            position: 'left',
            label: '软件',
          },
          {
            type: 'docSidebar',
            sidebarId: 'documentSidebar',
            position: 'left',
            label: '文档',
          },
          {
            type: 'docSidebar',
            sidebarId: 'imagesSidebar',
            position: 'left',
            label: '图片',
          },
          {
            href: 'https://github.com/littlebutt/littlebutt.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.zhihu.com/column/c_1731312077246033920',
            label: '知乎',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '导航',
            items: [
              {
                label: '软件',
                to: '/docs/intro',
              },
              {
                label: '文档',
                to: 'docs/intro',
              },
              {
                label: '图片',
                to: 'docs/intro',
              }
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/littlebutt',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/luo-gan-5-62',
              },
            ],
          },
          {
            title: '外部链接',
            items: [
              {
                label: 'Unix Playground',
                href: 'http://43.156.106.117:8000/unix-v1'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} littlebutt. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
