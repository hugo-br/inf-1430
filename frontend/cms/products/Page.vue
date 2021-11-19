<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.products')" />
    <Actions :buttons="actions" />
    <ProductsLists class="mt-10" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductsLists from "./Lists.vue";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";

@Component({
  components: {
    ProductsLists,
    Actions,
    PageTitles,
  },
})
export default class ProductsPage extends Vue {
  public actions = [
    {
      title: "test",
    },
  ];
}
</script>

<style scoped lang="less"></style>
