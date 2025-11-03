// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  components: [
    { path: '~/components', pathPrefix: false }, // 允许直接 <AppNavBar />
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind 自动配置
    '@element-plus/nuxt', // Element Plus
    '@pinia/nuxt', // ✅ 引入 Pinia 模块
  ],
  css: ['element-plus/dist/index.css'], // Element Plus 样式
});
