<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.products')" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <ProductsLists class="mt-10" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductsLists from "./ProductsLists.vue";
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
  //  #region Links
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
    {
      title: "Rafraichir la page",
      klass: "info ml-auto",
      action: "refresh",
    },
  ];

  // Add action
  public handleClick(params: string): void {
    switch (params) {
      case "addProduct":
        this.$router.push({ path: "add-products" });
        break;
      case "refresh":
        this.$emit("refresh");
        break;
      default:
      // code block
    }
  }

  //  #endregion
}
</script>

<style scoped lang="less"></style>
