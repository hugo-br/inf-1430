<template>
  <div id="cms">
    <NavigationMenu class="cms-navigation" />
    <section class="cms-container">
      <Header class="cms-header" />
      <router-view class="cms-content" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavigationMenu from "./components/NavigationMenu.vue";
import Header from "./components/Header.vue";

@Component({
  components: {
    NavigationMenu,
    Header,
  },
})
export default class Dashboard extends Vue {}
</script>

<style lang="less">
@nav: 40px;

#cms {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .cms-navigation {
    flex: 0 0 auto;
  }

  .cms-container {
    position: relative;
    flex: 1 1 auto;
    overflow: auto;
    background-color: #fff;
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
  }

  .cms-header {
    position: sticky;
    top: 0;
    width: 100%;
    height: @nav;
    background-color: rgb(3, 8, 34);
    clear: both;
    display: block;
  }

  .cms-content {
    padding: 30px 10px 10px 30px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100% - @nav);
    background: white;
    flex: 1 1 auto;
  }
}
</style>
