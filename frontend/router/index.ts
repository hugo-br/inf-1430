import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Navigation from "../boutique/navigation/navigation.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      header: Navigation
    }
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
  {
    path: '/settings',
    // You could also have named views at the top
    component: Home,
    children: [{
      path: 'emails',
      component: Home
    }, {
      path: 'profile',
      components: {
        default: Home,
        helper: Home
      }
    }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
