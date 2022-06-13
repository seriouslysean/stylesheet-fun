<script setup>
const route = useRoute();
const theme = route.params?.name || 'default';
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

<script>
export default {
  name: "ThemePage",
  async asyncData(res) {
    console.log('!!!', res);
    return {
      theme: res.params?.name?.toLowerCase() || 'default',
    };
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: `/css/${this.theme}.css`,
        },
      ],
    };
  },
};
</script>
