import { RouteRecordRaw } from "vue-router";
import Home from "@pages/home.vue";
import Video from "@pages/video.vue";

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/video/:id', component: Video },
]
