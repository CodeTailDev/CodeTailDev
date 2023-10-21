import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Views/HomePage/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/info', component: () => import('@/components/Views/InfoPage/Info.vue') },
    { path: '/about', component: () => import('@/components/Views/AboutPage/About.vue') },
    { path: '', component: Home },
    { path: '/*', component: () => import('@/components/Views/CrashPage/404.vue') },
  ],
})

export default router