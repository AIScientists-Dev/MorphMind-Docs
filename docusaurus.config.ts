import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MorphMind Docs',
  tagline: 'AI Agents Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://doc.morphmind.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AIScientists-Dev', // Usually your GitHub org/user name.
  projectName: 'MorphMind-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Docs as homepage
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AIScientists-Dev/MorphMind-Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/AIScientists-Dev/MorphMind-Docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'AI agents, AgentLab, MorphMind, documentation'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'MorphMind Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-light.png',
        href: '/', // Links to docs homepage
        target: '_self',
      },
      items: [
        {
          href: 'https://x.com/MorphMind__AI',
          position: 'right',
          className: 'navbar-icon navbar-x-icon',
          'aria-label': 'X (Twitter)',
        },
        {
          href: 'https://www.linkedin.com/company/morphmind/',
          position: 'right',
          className: 'navbar-icon navbar-linkedin-icon',
          'aria-label': 'LinkedIn',
        },
        {
          href: 'https://discord.gg/xxbCVbsd4E',
          position: 'right',
          className: 'navbar-icon navbar-discord-icon',
          'aria-label': 'Discord',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'MorphMind Logo',
        src: 'img/logo-light.png',
        href: '/',
      },
      links: [
        {
          title: 'Contact Us',
          items: [
            {
              html: '245 Main Street, Cambridge, MA, 02142',
            },
            {
              label: 'support@morphmind.ai',
              href: 'mailto:support@morphmind.ai',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/morphmind/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/xxbCVbsd4E',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/MorphMind__AI',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              href: 'https://morphmind.ai/terms-of-service',
            },
            {
              label: 'Privacy Policy',
              href: 'https://morphmind.ai/privacy-policy',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
