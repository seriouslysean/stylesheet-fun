<script setup>
const route = useRoute();
const theme = route.meta?.theme || 'default';
useHead({
  link: [
    { rel: 'stylesheet', href: `/css/${theme}.css` },
  ],
});
</script>

<template>
  <div class="theme">
    <h1>Theme: {{ theme }}</h1>
  </div>
</template>
