<template>
  <div class="text-left flow-root">
    <h2 class="page-title">{{ page }}</h2>
    <h2 class="page-title font-normal mr-3 ml-3 hidden sm:inline-block">
      &nbsp;|&nbsp;
    </h2>
    <h3 class="page-title font-normal">{{ $t("company.name") }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageTitles extends Vue {
  @Prop()
  title: string;

  get page(): string {
    return this.title || "";
  }
}
</script>

<style scoped lang="less"></style>
