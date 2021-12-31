<template>
  <nav>
    <div id="logo">
    <font-awesome-icon :icon="['fa', 'crown']" class="inline mr-3 logo-icon" />
    <h1 class="inline">Rubydor</h1>
    </div>
    <div id="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">{{ $t("titles.main") }}</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Navigation extends Vue {}
</script>

<style scoped lang="less">
@nav : #1b0923;
nav {
  height: 100%;
  background-color: @nav;

  #logo {
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 36px;
  }

  #nav-links {
     color: white;
     font-size: 24px; 
  }
}
</style>
