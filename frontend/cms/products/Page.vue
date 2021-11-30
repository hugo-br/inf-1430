<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.products')" />
    <Actions :buttons="links" @action="handleClick($event)" />
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
  public links = [
    {
      title: "Consulter le tableau",
      klass: "disabled",
      action: "test",
    },
    {
      title: "Ajouter un produit",
      klass: "success",
      action: "addProduct",
    },
  ];

  public handleClick(params: string): void {
    switch (params) {
      case "addProduct":
        this.$router.push({ path: "add-products" });
        // router.push({ name: 'user', params: { userId } })
        break;
      case "test":
        // code block
        break;
      default:
      // code block
    }
  }
}
</script>

<style scoped lang="less"></style>
