<template>
  <div class="category-page">
    <!-- Category Header -->
    <div
      class="category-header-wrap"
      :style="{ 'background-image': 'url(' + image + ')' }"
    >
      <CategoryHeader :title="headerTitle" :description="headerDesc" />
    </div>
    <!-- Filters -->
    <div class="product-filter"></div>
    <!-- Products Display -->
    <div class="product-grid">
      <div v-if="catProducts.length > 0">
        <ProductsGrid :products="catProducts" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductsGrid from "./ProductsGrid.vue";
import CategoryHeader from "./CategoryHeader.vue";
import { getCategory, Category } from "../../services/CategoryService";
import {
  getAllAvailableProducts,
  productsArray,
} from "../../services/ProductsService";

@Component({
  components: {
    ProductsGrid,
    CategoryHeader,
  },
})
export default class ShopCategoryPage extends Vue {
  public categoryId = this.$route.params.categoryId ?? "all";
  public catProducts: productsArray[] = [];
  public defaultBackground = "background.jpg";
  public headerTitle = "";
  public headerDesc = "";

  // #region Functions
  public created() {
    if (this.categoryId === "all") {
      this.getAllProducts();
      this.headerTitle = "Tous les produits";
      this.headerDesc = "Magasinez notre collection complète";
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
          this.headerTitle = result.name;
          this.headerDesc = result.description;
        });
      });
    } catch (err: any) {
      this.getAllProducts();
    }
  }

  get image(): string {
    var images = require.context(
      "../../../public/images/",
      false,
      /\.(png|jpg|jpeg|gif)$/i
    );
    let img = this.defaultBackground;

    try {
      return images("./" + img);
    } catch (err: any) {
      let img = "background";
      return images("./" + img + ".jpg");
    }
  }

  // #endregion
}
</script>

<style scoped lang="less">
@background: #111a21;

body {
  background-color: @background;
}

.category-page {
  width: 100%;
  height: auto;

  /* Category Header */
  .category-header-wrap {
    width: 100%;
    padding: 40px 30px 0 30px;
    height: auto;
    border-bottom: 1px #264d4d solid;
    color: white;
    background: black;
    position: relative;
    background-repeat: repeat-x;
    background-size: contain;
    background-position-x: 0;
    background-position-y: 14px;
  }

  .product-filter {
    width: 100%;
    padding: 20px 60px 40px;
    display: block;
    background-color: darken(#111a21, 5%);
  }

  .product-grid {
    width: 100%;
    min-height: 100vh;
    background-color: darken(#111a21, 5%);
  }
}
</style>
