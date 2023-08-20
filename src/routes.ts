import { RouteRecordRaw } from "vue-router";

import AnimePage from "@pages/anime.vue";
import HomePage from "@pages/home.vue";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage },
  { path: "/anime/:id", component: AnimePage },
]
