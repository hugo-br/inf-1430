<template>
  <div class="p-2 pr-4">
    <PageTitles :title="title" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <EditProductsForm :productId="productId" @changeName="updatePageName($event)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import EditProductsForm from "./EditProductsForm.vue";

@Component({
  components: {
    Actions,
    PageTitles,
    EditProductsForm,
  },
})
export default class ProductsEdit extends Vue {

  public productId = this.$route.params.productId;
  public title = "";

  //  #region Links 
  public links = [
    {
      title: "Modifier ce produit",
      klass: "disabled",
      action: "",
    },
    {
      title: "Voir tous les produits",
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
//  #endregion


    public mounted(): void {
       // alert(this.productId);
        console.log(this.$route.params.productId);
       
    }

    public updatePageName(name: string): void {
            this.title = `Produit : ${name}`;
    }

}
</script>

<style scoped lang="less"></style>
