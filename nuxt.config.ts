// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

// Set before markuxt's nuxt.config is evaluated
process.env.MARKUXT_ROOT_DIR = process.env.MARKUXT_ROOT_DIR || 'src/'

export default defineNuxtConfig({
  extends: ['@markuxt/markuxt'],

  // Load styles — edit styles/main.css or individual partials to customize
  css: ['~~/styles/main.css'],

  // Register global icon components (outside src/ to avoid Content scanning)
  plugins: [
    '~~/plugins/icons.ts'
  ],

  // i18n — locales are auto-detected and registered by the markuxt layer
  // (from src/i18n/*.json); the consumer only needs defaultLocale here.
  i18n: {
    defaultLocale: 'en',
  },

  // Site-specific head (favicon)
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      ]
    }
  },

  // Content directory — content lives directly in src/ (not src/content/).
  // Binary assets (images/videos/PDFs) are excluded from the content database
  // by the @markuxt/markuxt layer (content.ignores) so their base64 bytes don't
  // bloat api/_content/cache.*.json past GitHub Pages' 25MiB single-file limit.
  content: {
    sources: {
      content: {
        driver: 'fs',
        base: resolve(process.cwd(), 'src')
      }
    },
  },

  // Runtime app config (markuxt theme options)
  appConfig: {
    markuxt: {
      openalex: {
        rorId: 'https://ror.org/03y4dt428',
      },
      logo: {
        src: '/images/uon-logo.png',
      },
      navigation: [
        { to: '/', labelKey: 'nav.home' },
        { to: '/members', labelKey: 'nav.members' },
        { to: '/publications', labelKey: 'nav.publications' },
        { to: '/projects', labelKey: 'nav.projects' },
        { to: '/positions', labelKey: 'nav.positions' },
        { to: '/news', labelKey: 'nav.news' },
      ],
      contact: {
        email: 'salman.ijaz@nottingham.edu.cn',
        externalUrl: 'https://www.nottingham.edu.cn',
        externalLabelKey: 'footer.universityLink',
      },
      carousel: {
        fallbackImage: '/images/default.jpg',
        images: [
          {
            src: '/images/default.jpg',
            alt: 'Characteristic image',
            caption: 'Control Systems Lab at UNNC'
          },
          {
            src: '/images/team.jpg',
            alt: 'Team photo',
            caption: 'Meet us!'
          },
        ],
      },
      // Member categories — `key` matches the `category:` field in each
      // member's frontmatter; `labelKey` is an i18n key resolved in every
      // locale. Array order is the canonical display / filter / sort order.
      members: {
        categories: [
          { key: 'staff', labelKey: 'members.staff' },
          { key: 'research-students', labelKey: 'members.researchStudents' },
          { key: 'research-assistants', labelKey: 'members.researchAssistants' },
          { key: 'alumni', labelKey: 'members.alumni' },
        ],
      },
      // See ./plugins/icons.ts
      researchAreas: [
        { icon: 'IconSearch', titleKey: 'research.aerospace', descKey: 'research.aerospaceDesc' },
        { icon: 'IconRobot', titleKey: 'research.robotics', descKey: 'research.roboticsDesc' },
        { icon: 'IconNeural', titleKey: 'research.intelligent', descKey: 'research.intelligentDesc' },
        { icon: 'IconAssemblyLine', titleKey: 'research.manufacturing', descKey: 'research.manufacturingDesc' },
      ],
    },
  },
})
