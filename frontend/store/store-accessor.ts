import { store } from "./";
import { getModule } from "vuex-module-decorators";
import UserStore from "./user-store";

// Accessing every store with the variables
const userStore = getModule(UserStore, store);

export { userStore };
