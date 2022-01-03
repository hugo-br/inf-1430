import { store } from "./";
import { getModule } from "vuex-module-decorators";
import UserStore from "./user-store";
import CartStore from "./cart-store";

// Accessing every store with the variables
export const userStore = getModule(UserStore, store);
export const cartStore = getModule(CartStore, store);
