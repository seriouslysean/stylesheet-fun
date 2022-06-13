<script setup>
useHead({
  title: 'Stylesheet Fun',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content: `Aren't stylesheets fun?`,
    },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
});
</script>

<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>
