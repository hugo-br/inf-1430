<template>
  <div class="category-page">
    <!-- Category Header -->
    <div
      v-if="!isLoading"
      class="category-header-wrap"
      :style="{ 'background-image': 'url(' + image + ')' }"
    >
      <CategoryHeader
        v-if="!isLoading"
        :title="headerTitle"
        :description="headerDesc"
      />
    </div>
    <!-- Filters -->
    <div class="product-filter">
      <CategoryFilter v-if="!isLoading" @filters="sendFilters($event)" />
    </div>
    <!-- Products Display -->
    <div class="product-grid">
      <div v-if="catProducts.length > 0">
        <ProductsGrid
          v-if="!isLoading"
          :products="catProducts"
          :filters="filter"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ProductsGrid from "./ProductsGrid.vue";
import CategoryHeader from "./CategoryHeader.vue";
import CategoryFilter from "./CategoryFilter.vue";
import { getCategory, Category } from "../../services/CategoryService";
import {
  getAllAvailableProducts,
  productsArray,
} from "../../services/ProductsService";

@Component({
  components: {
    ProductsGrid,
    CategoryHeader,
    CategoryFilter,
  },
})
export default class ShopCategoryPage extends Vue {
  public categoryId = this.$route.params.categoryId ?? "all";
  public catProducts: productsArray[] = [];
  public defaultBackground = "background.jpg";
  public headerTitle = "";
  public headerDesc = "";
  public isLoading = true;
  public filter = {};

  // #region Functions
  public mounted() {
    this.loadPage();
  }

  public loadPage() {
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
          this.isLoading = false;
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
          this.isLoading = false;
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

  public sendFilters(filter: string) {
    const res = filter.split("-");
    const obj = {
      element: res[0],
      order: res[1],
    };
    this.filter = obj;
  }

  // Watch for updates
  @Watch("$route")
  public refreshPage() {
    this.categoryId = this.$route.params.categoryId ?? "all";
    this.loadPage();
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
    padding: 20px 60px 20px;
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
