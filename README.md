# Control System Lab Homepage

The official website for Control System Lab at the University of Nottingham Ningbo China.

Built with [Nuxt 3](https://nuxt.com/) and [@markuxt/markuxt](https://github.com/markuxt/markuxt), a Markdown-first academic portal framework.

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) with TypeScript
- **Theme**: [Markuxt](https://github.com/markuxt/markuxt) — provides layouts, pages, components, and content transformers
- **Content**: [Nuxt Content](https://content.nuxt.com/) v2 for Markdown-based content management
- **i18n**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/) for English and Simplified Chinese
- **Icons**: [@icon-park/vue-next](https://github.com/bytedance/IconPark) for UI icons
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```bash
├── plugins/
│   └── icons.ts             # Global icon component registration
├── src/
│   ├── i18n/
│   │   ├── en.json          # English translations
│   │   └── zh-CN.json       # Simplified Chinese translations
│   ├── members/             # Member profiles (Markdown)
│   ├── news/                # News articles (Markdown)
│   ├── positions/           # Open positions (Markdown)
│   ├── projects/            # Projects (Markdown)
│   ├── publications/        # Publications (Markdown)
│   ├── public/
│   │   └── images/          # Static images (logo, carousel, etc.)
│   └── ...                  # Co-located assets next to Markdown files
├── nuxt.config.ts           # Site configuration (see below)
└── package.json
```

## Site Configuration

All site-specific customization lives in `nuxt.config.ts`:

### Navigation & Pages

The `navigation` array controls which pages appear in the header navigation, footer quick links, and are accessible to visitors. Pages **not** listed here will return 404.

```ts
navigation: [
  { to: '/', labelKey: 'nav.home' },
  { to: '/members', labelKey: 'nav.members' },
  { to: '/publications', labelKey: 'nav.publications' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/positions', labelKey: 'nav.positions' },
  { to: '/news', labelKey: 'nav.news' },
],
```

### Research Areas

Homepage research area cards with icons. Icons must be registered as global Vue components (see `plugins/icons.ts`).

```ts
researchAreas: [
  { icon: 'IconSearch', titleKey: 'research.aerospace', descKey: 'research.aerospaceDesc' },
  { icon: 'IconRobot', titleKey: 'research.robotics', descKey: 'research.roboticsDesc' },
],
```

### Contact & Footer

```ts
contact: {
  email: 'salman.ijaz@nottingham.edu.cn',
  externalUrl: 'https://www.nottingham.edu.cn',
  externalLabelKey: 'footer.universityLink',
},
```

### Carousel

```ts
carousel: {
  fallbackImage: '/images/default.jpg',
  images: [
    { src: '/images/default.jpg', alt: 'Lab', caption: 'Control Systems Lab at UNNC' },
  ],
},
```

## Content Management

> **See [CONTRIBUTING.md](CONTRIBUTING.md) for the full content management guide**, including directory structure, content types, image guidelines, and internationalization.

Content is managed through Markdown files in `src/`. Each content type has its own subdirectory. Co-locate images in `assets/` folders next to the Markdown files.

## Development

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

> If you encounter `connect EINVAL` errors, this is a known Nuxt issue ([nuxt/nuxt#35253](https://github.com/nuxt/nuxt/issues/35253)). The dev script already sets `TMPDIR=/tmp` as a workaround.

### Build

```bash
pnpm generate
```

Static files are output to `.output/public/`.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via the configured GitHub Actions workflow.

To configure subdirectory deployment, set `NUXT_PUBLIC_BASE_URL` in `.github/workflows/deploy.yml`.

## License

© 2024 Control System Lab, University of Nottingham Ningbo China. All rights reserved.
