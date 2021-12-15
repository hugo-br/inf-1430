<template>
  <div id="cms">
    <NavigationMenu class="cms-navigation" />
    <section class="cms-container">
      <Header class="cms-header" />
      <router-view class="cms-content" @notifications="showNotifications()" />
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
export default class Dashboard extends Vue {
  public showNotifications() {
    console.log("dahsboard");
  }
}
</script>

<style lang="less">
@nav: 49px;
@background: #111a21;

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
    background: linear-gradient(#1c2b36, #384550);
    clear: both;
    display: block;
    color: white;
  }

  .cms-content {
    padding: 30px 10px 10px 30px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100% - @nav);
    background: white;
    flex: 1 1 auto;
    border-top-right-radius: 5px;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>
