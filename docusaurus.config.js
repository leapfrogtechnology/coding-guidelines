module.exports = {
  title: 'Leapfrog Coding Guidelines',
  tagline: 'Coding guidelines for projects at Leapfrog Technology',
  url: 'https://coding-guidelines.lftechnology.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'lftechnology', // Usually your GitHub org/user name.
  projectName: 'coding-guidelines', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Leapfrog Coding Guidelines',
      logo: {
        alt: 'Leapfrog Technology Logo',
        src: 'img/favicon.png',
      },
      links: [
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
            }
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/leapfrogtechnology/coding-guidelines/tree/develop/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
