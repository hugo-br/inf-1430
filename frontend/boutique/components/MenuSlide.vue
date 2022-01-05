<template>
  <transition name="menu-slide">
    <div class="menu-slide">
      <div class="slide-close" @click="close()">
        <font-awesome-icon :icon="['fa', 'times']" />
      </div>
      <div class="menu-slide-header"><slot name="header"></slot></div>
      <div class="menu-slide-content"><slot name="content"></slot></div>
      <div class="menu-slide-footer"><slot name="footer"></slot></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MenuSlide extends Vue {
  public close() {
    this.$emit("close");
  }
}
</script>

<style scoped lang="less">
.menu-slide {
  position: fixed;
  top: 65px;
  height: calc(100vh - 65px);
  max-width: 500px;
  width: 50%;
  overflow: hidden;
  border: solid thin #1c0d22;
  background-color: white;
  right: 0;
  z-index: 1000;
  transform: translateX(0);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: flex-start;

  .slide-close {
    position: absolute;
    color: rgb(75, 12, 12);
    left: 25px;
    top: 15px;
    cursor: pointer;
    z-index: 1001;
    font-size: 22px;
  }

  .menu-slide-header {
    text-align: center;
    font-size: 24px;
    line-height: 20px;
    padding: 10px;
    width: 100%;
  }

  .menu-slide-content {
    padding: 20px;
    height: 70%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .menu-slide-footer {
    padding: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 15%;
  }

  /* Scrollbar */

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
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
.menu-slide-enter,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateX(500px);
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.4s ease-in;
}
</style>
