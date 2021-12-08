<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.products')" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <AddProductsForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import AddProductsForm from "./AddProductsForm.vue";

@Component({
  components: {
    Actions,
    PageTitles,
    AddProductsForm,
  },
})
export default class ProductsAdd extends Vue {
  public links = [
    {
      title: "Ajouter un produit",
      klass: "disabled",
      action: "",
    },
    {
      title: "Voir tous les produit",
      klass: "success",
      action: "products",
    },
  ];

  public handleClick(params: string): void {
    switch (params) {
      case "products":
        this.$router.push({ name: "list-products" });
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
