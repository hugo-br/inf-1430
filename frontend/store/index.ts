import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import UserStore from "./user-store";

Vue.use(Vuex);

// Set up the store
export const store = new Vuex.Store({
  modules: {
    UserStore,
  },
  plugins: [createPersistedState()],
});
