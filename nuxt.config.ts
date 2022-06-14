import { defineNuxtConfig } from 'nuxt';

import { generateThemeRoutes } from './utils/router';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  hooks: {
    'pages:extend' (routes) {
      generateThemeRoutes(routes);
    },
  },
});
