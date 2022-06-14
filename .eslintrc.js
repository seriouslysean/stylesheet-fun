module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': [2, 2],
    'semi-style': ['error', 'last'],
    // allow use of script setup notation
    'vue/script-setup-no-uses-vars': 'off',
  },
}
