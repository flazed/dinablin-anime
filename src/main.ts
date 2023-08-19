import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHashHistory } from "vue-router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from "./App.vue";
import { clickOutside } from "./directives/click-outside.js";
import Icons from './fa.icons.ts';
import { routes } from './routes';
import './index.css'

const pinia = createPinia()

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
})

library.add(Icons)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.directive('click-outside', clickOutside)
app.mount('#app');
