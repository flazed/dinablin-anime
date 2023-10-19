import path from "path";

import { defineConfig } from "vite"
import checker from "vite-plugin-checker";

import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith("swiper-")
        }
      }
    }),
    VueI18nPlugin({}),
    checker({
      vueTsc: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@composables": path.resolve(__dirname, "./src/composables"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@elements": path.resolve(__dirname, "./src/elements"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    }
  }
})
