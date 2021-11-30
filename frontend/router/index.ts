import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import About from "../pages/About.vue";
import PageTest from "../pages/Test.vue";

// Boutique
import Navigation from "../boutique/navigation/navigation.vue";
import Homepage from "../boutique/Homepage.vue";

// CMS
import Dashboard from "../cms/Dashboard.vue";
import LoginCMS from "../cms/Login.vue";

// Products
import ProductsPage from "../cms/products/Page.vue";
import ProductsAdd from "../cms/products/Add.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  /* Boutique */
  {
    path: "/",
    name: "TestPage",
    components: {
      default: PageTest,
      header: Navigation,
    },
  },
  {
    path: "/store",
    components: {
      default: Homepage,
      header: Navigation,
    },
    children: [
      {
        path: "/boutique",
        alias: "boutique",
        name: "boutique",
      },
      /*    {
        path: 'extractions',
        name: 'Extractions',
        meta: {
          role: User.FdmOperator,
          fail: '403',
        },
      },
  */
    ],
  },
  /* CMS */
  {
    path: "/cms",
    components: {
      default: Dashboard,
    },
    children: [
      {
        path: "/",
        alias: "/dashboard",
        name: "dashboard",
        component: PageTest,
      },
      {
        path: "products",
        name: "list-products",
        component: ProductsPage,
      },
      {
        path: "add-products",
        name: "add-product",
        component: ProductsAdd,
      },

      /*    {
          path: 'extractions',
          name: 'Extractions',
          meta: {
            role: User.FdmOperator,
            fail: '403',
          },
        },
    */
    ],
  },
  {
    path: "/cms/login",
    name: "login",
    alias: "/cms-login",
    component: LoginCMS,
  },

  {
    path: "/home",
    name: "Homepage",
    components: {
      default: Homepage,
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
