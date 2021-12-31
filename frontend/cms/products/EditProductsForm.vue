<template>
  <main>
    <!-- Loading -->
    <div v-if="!isLoaded && !notFound">Loading ...</div>
    <!-- Not found -->
    <div v-if="isLoaded && notFound">Not found</div>

    <!-- Form -->
    <div class="cms-form-container" v-if="isLoaded && !notFound">
      <!-- Row: START -->
      <div class="row-with-info">
        <!-- Left Section -->
        <div class="left-info">
          <span class="info-title">Générales</span>
          <span class="info-explication">
            Mettre à jour les information générales sur le produit :
            <strong class="text-green-900">{{ product.name }}</strong>
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
            <div class="info-form-row">
              <div class="info-form-items">
                <label for="image">Nom de l'image</label>
                <input
                  type="text"
                  id="image"
                  placeholder="Nom de l'image..."
                  v-model="product.images"
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
          <span class="info-title">Catégories</span>
          <span class="info-explication">
            Choissisez les catégories pour ce produit
          </span>
        </div>

        <!-- Right Section -->
        <div class="right-info">
          <div>
            <div class="info-form-row">
              <CategoryChoices
                @onCheckedCategories="updateSelected($event)"
                :selectedCategories="selected"
              />
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
          <button class="btn-submit mt-4" @click="editProd()">
            Mettre à jour le produit
          </button>
        </div>
      </div>
      <!-- Row: END -->
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CategoryChoices from "../components/CategoryChoices.vue";
import {
  getProduct,
  editProduct,
  Product,
} from "../../services/ProductsService";

@Component({
  components: {
    CategoryChoices,
  },
})
export default class EditProductsForm extends Vue {
  // #region Props and Data
  @Prop()
  public productId: string;

  public product: Product;

  public isLoaded = false;
  public notFound = false;
  public selected: string[] = [];
  //  #endregion

  public async fetchProd() {
    getProduct(this.productId)
      .then((result: Product) => {
        this.$nextTick(function () {
          this.product = result;
          this.isLoaded = true;
          this.selected = this.product.categories;
          this.$emit("updatePage", result);
        });
      })
      .catch((error: any) => {
        this.isLoaded = true;
        this.notFound = true;
      });
  }

  public mounted(): void {
    this.fetchProd();
    this.$parent.$emit("notifications");
  }

  public async editProd() {
    this.product.categories = this.selected;
    editProduct(this.product)
      .then((result: any) => {
        alert("done");
      })
      .catch((error: any) => console.error("Error:", error));
  }

  public updateSelected(categories: string[]): void {
    this.selected = categories;
  }
  // #endregion
}
</script>

<style scoped lang="less"></style>
