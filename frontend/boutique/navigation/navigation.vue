<template>
  <nav>
    <h2>Navigation Boutique</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">{{ $t("titles.main") }}</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Navigation extends Vue {
}
</script>

<style scoped lang="less"></style>
