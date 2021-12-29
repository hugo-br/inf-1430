<template>
  <div class="flex flex-wrap flex-row flex-grow-0">
    <div class="mr-4" v-for="category in categories" :key="category.categoryId">
      <input
        v-model="checkedCategories"
        @change="onChange($event)"
        type="checkbox"
        :id="category.categoryId"
        :name="category.name"
        :value="category._id"
        :checked="category.selected"
      />
      <label class="ml-2" :for="category.categoryId">{{ category.name }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Console } from "console";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { getAllCategories, Category } from "../../services/CategoryService";

interface CategoryChoice extends Category {
  _id?: string;
  selected?: boolean;
}

@Component({
  components: {},
})
export default class CategoryChoices extends Vue {
  // region Props and Data
  @Prop({ default: [] })
  public selectedCategories: string[];

  public categories: Partial<CategoryChoice>[] = [];
  public checkedCategories: string[] = [];
  // endregion

  // region Functions
  public mounted(): void {
    this.loadItems();
    this.updatedSelectedCategories();
  }

  public loadItems(): void {
    getAllCategories()
      .then((result: Array<Category>) => {
        this.$nextTick(function () {
          result.forEach((cat: Category) => {
            const c = { ...cat, selected: false };
            this.categories.push(c);
          });

          this.updatedSelectedCategories();
        });
      })
      .catch((error: any) => console.error("Errors : ", error));
  }

  public onChange(event: any): void {
    this.$emit("onCheckedCategories", this.checkedCategories);
  }

  @Watch("selectedCategories", { immediate: true, deep: true })
  public onProductCategoriesLoaded(categories: string[]) {
    this.selectedCategories = categories;
  }

  public updatedSelectedCategories(): void {
    this.checkedCategories = this.selectedCategories;
  }
  // endregion
}
</script>

<style scoped lang="less">
[v-cloak] {
  display: none;
}
</style>
