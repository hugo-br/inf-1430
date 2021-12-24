<template>
  <div class="cms-form-container">
    <!-- Row: START -->
    <div class="row-with-info">
      <!-- Left Section -->
      <div class="left-info">
        <span class="info-title">Générales</span>
        <span class="info-explication">
          Remplissez les information générales sur le produit
        </span>
      </div>

      <!-- Right Section -->
      <div class="right-info">
        <div>
          <div class="info-form-row">
            <div class="info-form-items">
              <label for="name">Nom<sup>*</sup></label>
              <input
                id="name"
                type="text"
                placeholder="Nom produit"
                v-model="product.name"
              />
            </div>

            <div class="info-form-items">
              <label for="description">Description<sup>*</sup></label>
              <textarea
                id="description"
                placeholder="Description..."
                v-model="product.description"
              />
            </div>

            <div class="info-form-items half">
              <label for="quantity">Quantity<sup>*</sup></label>
              <input
                id="quantity"
                type="number"
                placeholder="Entrez une quantité"
                v-model="product.quantity"
              />
            </div>

            <div class="info-form-items half">
              <label for="price">Price<sup>*</sup></label>
              <input
                id="price"
                type="number"
                placeholder="Entrez un prix"
                v-model="product.price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Row: END -->

    <!-- Row: START -->
    <div class="row-with-info">
      <!-- Left Section -->
      <div class="left-info">
        <span class="info-title">Images</span>
        <span class="info-explication">
          Choissisez le chemin pour les images
        </span>
      </div>

      <!-- Right Section -->
      <div class="right-info">
        <div>
          <div class="info-form-row"></div>
        </div>
      </div>
    </div>
    <!-- Row: END -->

    <!-- Row: START -->
    <div class="row-with-info">
      <!-- Left Section -->
      <div class="left-info">
        <span class="info-title">Catégories</span>
        <span class="info-explication">
          Choissisez les catégories pour ce produit
        </span>
      </div>

      <!-- Right Section -->
      <div class="right-info">
        <div>
          <div class="info-form-row">
            <CategoryChoices @onCheckedCategories="updateSelected($event)" />
          </div>
        </div>
      </div>
    </div>
    <!-- Row: END -->

    <!-- Row: START -->
    <div class="row-with-info">
      <!-- Left Section -->
      <div class="left-info">
        <span class="info-title">Révision</span>
        <span class="info-explication">
          Revissez les information et ajouter le produit
        </span>
      </div>

      <!-- Right Section -->
      <div class="right-info">
        <button class="btn-submit mt-4" @click="addProd()">
          Ajouter le produit
        </button>
      </div>
    </div>
    <!-- Row: END -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { addProduct } from "../../services/ProductsService";
import CategoryChoices from "../components/CategoryChoices.vue";

@Component({
  components: {
    CategoryChoices,
  },
})
export default class AddProductsForm extends Vue {
  public product = {
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    isPublished: false,
    categories: [""],
  };

  public async addProd() {
    addProduct(this.product)
      .then((result: any) => {
        console.log("here then", result);
        alert("done");
      })
      .catch((error: any) => console.error("Error:", error));
  }

  // Update selected categories
  public updateSelected(categories: string[]): void {
    this.product.categories = categories;
  }
}
</script>

<style scoped lang="less">
@background: #f3f4f6;
.cms-form-container {
  background-color: @background;
}
</style>
