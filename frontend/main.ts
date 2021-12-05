import "reflect-metadata";
import Vue from "vue";
import Acl from "vue-browser-acl";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueI18n from "vue-i18n";
import { messages, defaultLocale } from "./locale/index";
import "./assets/styles/tailwind.css";

const user = "";

Vue.config.productionTip = false;

Vue.use(VueI18n);
// Translation
const i18n = new VueI18n({
  messages,
  locale: defaultLocale(),
  fallbackLocale: "fr",
});

Vue.use(Acl);

/**
 * @desc    Set the app. Check if the user has a role or token, then grant specifics action based on it.
 **/
Promise.resolve()
  .then(async () => {
    //   setUser();
  })
  .then(async () => {
    //   setAcl();
  })
  .then(async () =>
    new Vue({
      i18n,
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app")
  )
  .catch((error: any) => {
    console.error(error.toString());
  });
