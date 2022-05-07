import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import custom from '../views/Custom.vue'

const routes = [
  { path: "/", name: "mian", redirect: "/custom" } as RouteRecordRaw,
  {
    path: "/custom",
    name: "custom",
    component: custom
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router