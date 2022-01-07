<template>
  <div class="category-filters">
    <!-- Sort By -->
    <div class="w-1/2 flex items-center pr-4">
      <font-awesome-icon class="filter-icon" :icon="['fa', 'sort']" />
      <select
        v-model="selectedOrder"
        name="sorting"
        class="order-by"
        @change="orderCategory($event)"
      >
        <option value="null">Trier par :</option>
        <option value="price-desc">Prix ordre décroissant</option>
        <option value="price-asc">Prix ordre croissant</option>
        <option value="name-asc">Nom</option>
        <option value="quantity-desc">Quantité disponible</option>
      </select>
    </div>

    <!-- Catgeories -->
    <div class="w-1/2 flex items-center">
      <font-awesome-icon class="filter-icon" :icon="['fa', 'filter']" />
      <select
        v-model="selectedCategory"
        name="categories"
        class="order-by"
        @change="changeCategory($event)"
      >
        <option value="null">Trier par catégorie...</option>
        <option
          v-for="cat in categories"
          :key="cat.categoryId"
          :value="cat.categoryId"
        >
          {{ cat.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { getAllCategories, Category } from "../../services/CategoryService";

@Component({
  components: {},
})
export default class CategoryFilter extends Vue {
  public categories: Category[] = [];
  public selectedCategory = "null";
  public selectedOrder = "null";
  public all: Category = {
    name: "Tous les produits",
    description: "toute",
    categoryId: "all",
  };

  public mounted(): void {
    this.loadCategories();
  }

  public loadCategories(): void {
    getAllCategories()
      .then((result: Array<Category>) => {
        this.$nextTick(function () {
          this.categories = [this.all, ...result];
        });
      })
      .catch((error: any) => console.error("Errors : ", error));
  }

  // Change category on selected
  public changeCategory(event: any): void {
    if (event.target.value === "null") return;
    this.$router.push({
      name: "product-category",
      params: { categoryId: event.target.value },
    });
  }

  // Change category on selected
  public orderCategory(event: any): void {
    if (event.target.value === "null") return;
    this.$emit("filters", event.target.value);
  }

  @Watch("$route")
  public refreshFilters() {
    this.selectedCategory = "null";
    this.selectedOrder = "null";
  }
}
</script>

<style scoped lang="less">
@border: #172f2e;
@background: #0f171d;
@color: #21aed9;

.category-filters {
  max-width: 900px;
  margin: auto;
  display: flex;
  padding: 10px 15px;
  border-radius: 10px;
  border: solid thin @border;
  position: relative;
  top: -20px;
  background-color: darken(@background, 2%);
  color: darken(@color, 15%);
  z-index: 2;

  .filter-icon {
    font-size: 10px;
    padding-right: 10px;
  }

  .order-by {
    height: 24px;
    width: 95%;
    font-size: 12px;
    font-weight: bold;
    background-color: #080d10;
    padding: 3px 10px 5px 3px;
    border-radius: 4px;
    border: solid thin @border;
  }
}
</style>
