module.exports = {
  title: 'Coding Guidelines',
  tagline: 'Leapfrog Coding Guidelines',
  url: 'https://coding-guidelines.lftechnology.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'lftechnology', // Usually your GitHub org/user name.
  projectName: 'coding-guidelines', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Coding Guidelines',
      logo: {
        alt: 'Leapfrog Technology Logo',
        src: 'img/favicon.png',
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
              href: 'https://www.facebook.com/lftechnology/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/lftechnology/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.lftechnology.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/leapfrogtechnology/coding-guidelines',
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          //routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/leapfrogtechnology/coding-guidelines/tree/develop/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
