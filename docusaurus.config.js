module.exports = {
  title: 'Leapfrog Coding Guidelines',
  tagline: 'Coding guidelines for projects at Leapfrog Technology',
  url: 'https://coding-guidelines.lftechnology.com',
  baseUrl: '/',
  favicon: 'img/icon.png',
  organizationName: 'lftechnology', // Usually your GitHub org/user name.
  projectName: 'coding-guidelines', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Leapfrog Coding Guidelines',
      logo: {
        alt: 'Leapfrog Technology Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          href: 'https://github.com/leapfrogtechnology/coding-guidelines',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/lftechnology',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lftechnology',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/lftechnology',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/lftechnology',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.lftechnology.com/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leapfrogtechnology',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leapfrog Technology, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/leapfrogtechnology/coding-guidelines/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/icon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/icon.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/icon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
