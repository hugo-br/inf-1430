<template>
  <ul>
    <li v-for="cat in categories" :key="cat.categoryId">
      <router-link
        :to="{
          name: 'product-category',
          params: { categoryId: cat.categoryId },
        }"
      >
        {{ cat.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getAllCategories, Category } from "../../services/CategoryService";

@Component({
  components: {},
})
export default class CategoriesLinks extends Vue {
  public categories: Category[] = [];
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
}
</script>

<style scoped lang="less"></style>
