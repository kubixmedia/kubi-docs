const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kubi Docs',
  tagline: 'How we do the things that we do.',
  url: 'https://hopeful-leakey-692933.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://res.cloudinary.com/kubix-media-ltd/image/upload/v1549548103/assets/icons/ms-icon-310x310.png',
  organizationName: 'KubixMedia', // Usually your GitHub org/user name.
  projectName: 'Kubi', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['liquid'],
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    image: 'img/Kubi_Banner.png',
    navbar: {
      title: 'Kubi Docs',
      logo: {
        alt: 'Kubi Logo',
        src: 'https://res.cloudinary.com/kubix-media-ltd/image/upload/v1549548103/assets/icons/ms-icon-310x310.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'wiki',
          position: 'left',
          label: 'Wiki',
        },
        {
          to: '/changelog',
          position: 'right',
          label: 'Changelog',
        },
        {
          href: 'https://github.com/kubixmedia/kubi',
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
              label: 'Wiki',
              to: '/docs/wiki',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kubixmedia/kubi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kubix Media Ltd.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kubixmedia/kubi-docs/edit/master/',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    cloud_name: 'kubix-media-ltd',
    upload_preset: 'YOUR_UPLOAD_PRESET' //Create an unsigned upload preset and update this
  },
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/KubiIcon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#dd3e7d',
          },
        ],
      },
    ],
  ],
};
