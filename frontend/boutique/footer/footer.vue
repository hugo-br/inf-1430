<template>
  <div>
    <h2>Footer</h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">{{ $t("titles.main") }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="less"></style>
