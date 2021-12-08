<template>
  <div class="p-2 pr-4">
    <PageTitles :title="title" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <EditProductsForm :productId="productId" @updatePage="updatePage($event)" />

    <CMSModal v-show="isModalVisible" @close="closeModal()">
      <template v-slot:header> Supprimer cette catégorie </template>

      <template v-slot:body>
        <p>
          Êtes-vous certain de vouloir supprimer la catégorie :
          {{ categoryId }} ?
        </p>
      </template>

      <template v-slot:footer>
        <div class="flex flex-row flex-wrap justify-center">
          <button
            @click="confirmDelete()"
            class="btn-actions danger w-40 align-center"
          >
            Supprimer
          </button>
          <button
            @click="closeModal()"
            class="btn-actions gray w-40 align-center"
          >
            Cancel
          </button>
        </div>
      </template>
    </CMSModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import EditProductsForm from "./EditProductsForm.vue";
import {
  deleteProduct,
  Product,
  publishedProduct,
} from "../../services/ProductsService";

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
  public isModalVisible = false;
  public isPublish = false;

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
      action: "list",
    },
    {
      title: "Publier",
      klass: "success",
      action: "list",
    },
    {
      title: this.$t("cms.cta.delete_category"),
      klass: "danger ml-auto",
      action: "delete",
    },
  ];

  public handleClick(params: string): void {
    switch (params) {
      case "list":
        this.$router.push({ name: "list-products" });
        // router.push({ name: 'user', params: { userId } })
        break;
      case "delete":
        this.isModalVisible = !this.isModalVisible;
        break;
      default:
      // code block
    }
  }
  //  #endregion

  //  #region Functions
  public mounted(): void {
    // alert(this.productId);
    console.log(this.$route.params.productId);
  }

  public updatePage(product: Product): void {
    this.title = `Produit : ${product.name}`;
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }

  public confirmDelete(): void {
    deleteProduct(this.productId)
      .then((result: any) => {
        console.log("here then", result);
        this.isModalVisible = false;
        this.handleClick("list");
      })
      .catch((error: any) => console.error("Error:", error));
  }

  public publish(productId: string, publish: boolean): void {
    publishedProduct(productId, publish)
      .then((result: any) => {})
      .catch((error: any) => console.error("Error:", error));
  }
  //  #endregion
}
</script>

<style scoped lang="less"></style>
