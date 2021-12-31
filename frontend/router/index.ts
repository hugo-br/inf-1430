import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import About from "../pages/About.vue";
import PageTest from "../pages/Test.vue";

// #region Boutique
import Navigation from "../boutique/navigation/navigation.vue";
import Boutique from "../boutique/Boutique.vue";
import ShopCategoryPage from "../boutique/category/CategoryPage.vue";
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
  // #region Routes Boutiques

  {
    path: "/",
    name: "category",
    components: {
      default: ShopCategoryPage,
      header: Navigation,
    },
  },
  {
    path: "/category/:categoryId?",
    name: "category",
    components: {
      default: ShopCategoryPage,
      header: Navigation,
    },
  },
  // #endregion

  // #region Routes Boutique
  {
    path: "/shop",
    components: {
      default: Boutique,
    },
    children: [
      {
        path: "/",
        name: "all-products",
        component: ShopCategoryPage,
      },
      {
        path: "/category/:categoryId?",
        name: "product-category",
        component: ShopCategoryPage,
      },
    ],
  },
  // #endregion

  // #region Routes CMS
  {
    path: "/cms",
    /* meta: {
      role: User.FdmOperator,
      fail: '403',
    }, */
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
    ],
  },
  {
    path: "/cms/login",
    name: "login",
    alias: "/cms-login",
    component: LoginCMS,
  },

  // #endregion
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
