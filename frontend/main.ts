import "reflect-metadata";
import Vue from "vue";
import Acl from 'vue-browser-acl';
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
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

Vue.use(Acl);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
