import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Home,
  },
  {
    path: "/about",
    name: "register",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
