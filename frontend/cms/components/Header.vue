<template>
  <div class="flex flex-row flex-wrap flex-space-between pt-3">
    <!-- User Info -->
    <div class="text-right flex flex-row flex-wrap flex-space-between">
      <div class="ml-auto pr-5 user" @click="displayMenu()">
        <font-awesome-icon icon="fa-solid fa-user" class="mr-3" />
        <span class="text-white">{{ name }}</span>
      </div>
    </div>
    <CMSMenuDropdown v-show="showDropdownMenu" @close="displayMenu()">
      <template v-slot:content>
        <div>
          <button class="btn-actions gray" @click="disconnect()">
            Se déconnecter
          </button>
        </div>
      </template>
    </CMSMenuDropdown>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { userStore } from "../../store/store-accessor";
import CMSMenuDropdown from "../components/CMSMenuDropdown.vue";
import LocalStorageService from "../../services/LocalStoreService";

@Component({
  components: { CMSMenuDropdown },
})
export default class Header extends Vue {
  public name: string = "";
  public showDropdownMenu = false;

  get userName(): string {
    return userStore.name;
  }

  public mounted() {
    this.$nextTick(function () {
      this.name = userStore.name;
    });
  }

  public displayMenu(): void {
    this.showDropdownMenu = !this.showDropdownMenu;
  }

  // Disconnect the user
  public disconnect(): void {
    console.log("allo");
    userStore.clearUser();
    LocalStorageService.clearToken();
    this.name = "";
    const path = "/cms/login"; //  process.env.REDIRECT_DASHBOARD;
    window.location.href = path;
  }
}
</script>

<style scoped lang="less">
.user {
  cursor: pointer;

  * {
    color: white;
    transition: color 0.4s ease;
  }

  &:hover {
    * {
      color: rgb(161, 161, 161);
    }
  }
}
</style>
