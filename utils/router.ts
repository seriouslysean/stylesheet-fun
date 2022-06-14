import { resolve } from 'path';

export function generateThemeRoutes(routes) {
  // TODO: make this dynamic based on files that exist in public/css
  // or maybe read the eventual scss files from something like /styles/themes/{themeName}.scss
  const themes = [
    'default',
    'blue',
  ];
  themes.forEach(theme => routes.push({
    name: `theme-${theme}`,
    path: `/theme/${theme}`,
    // TODO: Is there a way to use nuxt aliases here?
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#alias
    file: resolve('./components/theme.vue'),
    children: [],
    meta: {
      theme,
    },
  }));
}
