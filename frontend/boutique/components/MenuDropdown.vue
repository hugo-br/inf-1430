<template>
  <transition name="menu-fade">
    <div class="menu-dropdown">
      <slot name="content"></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MenuDropdown extends Vue {
  public close() {
    this.$emit("close");
  }
}
</script>

<style scoped lang="less">
.menu-dropdown {
  position: absolute;
  bottom: -299px;
  height: 300px;
  width: 300px;
  overflow-y: scroll;
  border: solid thin #1c0d22;
  background-color: white;
  right: calc(10px + ((100% - 1500px) / 2));
  z-index: 1000;
  padding: 10px;

  /* Scrollbar */

  /* width */
  &::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #197047;
    border-radius: 9px;
    border: solid 0 #197047;
    background-clip: content-box;
  }
}
/* transition */
.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.35s ease;
}

@media (max-width: 1500px) {
  .menu-dropdown {
    right: 10px;
  }
}
</style>
