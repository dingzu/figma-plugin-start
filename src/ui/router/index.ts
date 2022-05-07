import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const home = () => import('../views/Home.vue')
const login = () => import('../views/Home.vue')

const routes = [
  { path: "/", name: "mian", redirect: "/home" } as RouteRecordRaw,
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router