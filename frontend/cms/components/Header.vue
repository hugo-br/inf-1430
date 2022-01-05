<template>
  <div class="flex flex-row flex-wrap flex-space-between pt-3">
    <!-- User Info -->
    <div class="text-right flex flex-row flex-wrap flex-space-between">
      <div class="ml-auto pr-5">
        <font-awesome-icon icon="fa-solid fa-user" class="mr-3" />
        <span class="text-white">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { userStore } from "../../store/store-accessor";

@Component
export default class Header extends Vue {
  public name: string = "";

  get userName(): string {
    return userStore.name;
  }

  public mounted() {
    this.$nextTick(function () {
      this.name = userStore.name;
    });
  }

  public clickme(): void {
    userStore.setUser({ firstName: "test", lastName: "Lol" });
    this.$nextTick(function () {
      this.name = userStore.name;
    });
  }
}
</script>

<style scoped lang="less"></style>
