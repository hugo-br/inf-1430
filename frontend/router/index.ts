import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import About from "../pages/About.vue";
import PageTest from "../pages/Test.vue";

// #region Boutique
import Navigation from "../boutique/navigation/navigation.vue";
import Homepage from "../boutique/Homepage.vue";
// #endregion

// #region CMS
import Dashboard from "../cms/Dashboard.vue";
import LoginCMS from "../cms/Login.vue";

// Products
import ProductsPage from "../cms/products/ProductsPage.vue";
import ProductsAdd from "../cms/products/ProductsAddPage.vue";
import ProductsEdit from "../cms/products/ProductsEditPage.vue";

// Categories
import CategoryPage from "../cms/categories/CategoryPage.vue";
import CategoryAdd from "../cms/categories/CategoryAdd.vue";
import CategoryEdit from "../cms/categories/CategoryEditPage.vue";

// Admin
import AdminPage from "../cms/admins/AdminPage.vue";
import AdminAddPage from "../cms/admins/AdminAddPage.vue";
import AdminEditPage from "../cms/admins/AdminEditPage.vue";

// #endregion

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
      {
        path: "products/edit/:productId",
        name: "edit-product",
        component: ProductsEdit,
      },
      {
        path: "categories",
        name: "list-categories",
        component: CategoryPage,
      },
      {
        path: "add-categories",
        name: "add-categories",
        component: CategoryAdd,
      },
      {
        path: "categories/edit/:categoryId",
        name: "edit-categories",
        component: CategoryEdit,
      },
      {
        path: "admin",
        name: "list-admin",
        component: AdminPage,
      },
      {
        path: "add-admin",
        name: "add-admin",
        component: AdminAddPage,
      },
      {
        path: "admin/edit/:adminId",
        name: "edit-admin",
        component: AdminEditPage,
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
