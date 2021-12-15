<template>
  <transition name="notification-appears">
    <div class="notifications-container"></div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Notifications extends Vue {}
</script>

<style scoped lang="less">
/* transition */
.notification-appears-enter,
.notification-appears-leave-to {
  opacity: 0;
}

.notification-appears-enter-active,
.notification-appears-leave-active {
  transition: opacity 0.5s ease;
}

.notifications-container {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  background-color: transparent;
  z-index: 999;

  .notifications {
    width: 200px;
  }
}
</style>
