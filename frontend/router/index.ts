import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import About from "../pages/About.vue";
import PageTest from "../pages/Test.vue";

// Boutique
import Navigation from "../boutique/navigation/navigation.vue";
import Homepage from "../boutique/Homepage.vue";

// CMS

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Homepage",
    components: {
      default: Homepage,
      header: Navigation,
    },
  },
  {
    path: "/",
    name: "TestPage",
    components: {
      default: PageTest,
      header: Navigation,
    },
  },
  {
    path: "/register",
    name: "register",
    component: About,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/settings",
    // You could also have named views at the top
    component: About,
    children: [
      {
        path: "emails",
        component: About,
      },
      {
        path: "profile",
        components: {
          default: About,
          helper: About,
        },
        meta: {
          can: "approuver",
          fail: "/",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
