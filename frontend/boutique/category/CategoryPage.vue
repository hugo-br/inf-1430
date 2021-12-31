<template>
  <div class="category-page">
    <div class="category-header">
      <h1>HEADER</h1>
    </div>
    <div class="product-grid" v-if="catProducts.length > 0">
      <ProductsGrid :products="catProducts" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductsGrid from "./ProductsGrid.vue";
import { getCategory, Category } from "../../services/CategoryService";
import {
  getAllAvailableProducts,
  Product,
} from "../../services/ProductsService";

interface productsArray {
  _id: string;
}

@Component({
  components: {
    ProductsGrid,
  },
})
export default class ShopCategoryPage extends Vue {
  public categoryId = this.$route.params.categoryId ?? "all";
  public catProducts: productsArray[] = [];

  // #region Functions
  public created() {
    if (this.categoryId === "all") {
      this.getAllProducts();
    } else {
      this.getOneCategory(this.categoryId);
    }
  }

  /**
   * @desc    Get all products
   **/
  public getAllProducts(): void {
    getAllAvailableProducts()
      .then((result: any) => {
        this.$nextTick(function () {
          this.catProducts = [...result.products];
        });
      })
      .catch((error: any) => console.error("Errors : ", error));
  }

  /**
   * @desc    Get Products for a specific category
   **/
  public getOneCategory(categoryId: string): void {
    try {
      getCategory(this.categoryId).then((result: Category) => {
        this.$nextTick(function () {
          this.catProducts = [...result.products];
        });
      });
    } catch (err: any) {
      this.getAllProducts();
    }
  }

  // #endregion
}
</script>

<style scoped lang="less">
@background: #111a21;
.category-page {
  width: 100%;
  height: auto;

  .product-grid {
    width: 100%;
    min-height: 100vh;
    background-color: darken(#111a21, 5%);
  }
  .category-header {
    width: 100%;
    padding: 20px;
    border-bottom: thin gold solid;
  }
}
</style>
