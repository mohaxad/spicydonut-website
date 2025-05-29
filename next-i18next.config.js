/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeDetection: false,
  },
  fallbackLng: {
    default: ['en'],
    ar: ['ar', 'en'],
  },
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}; 