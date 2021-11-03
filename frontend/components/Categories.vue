<template>
  <div>
    <h2>Category</h2>
    GET
    <button class="btn btn-blue" @click="fetchCat()">Get All Categories</button>
    <br><br>
    POST
    <button class="btn btn-blue" @click="addCat()">Add Category</button>
  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getCategories, addCategory, Category } from "../services/CategoryService";

@Component
export default class Categories extends Vue {
  public isLoaded = false;
  public categories: any = null;

  /*
  public mounted() {
    this.$nextTick(() => {
      getCategories()
        .then((result) => {
          console.log(result);
          this.$nextTick(function () {
            this.categories = result;
            this.isLoaded = true;
          });
        })
        .catch((error) => console.error("(1) Outside error:", error));
    });
  }
*/

  public async fetchCat() {
    getCategories()
      .then((result) => {
        console.log(result);
        this.$nextTick(function () {
          this.categories = result;
          this.isLoaded = true;
        });
      })
      .catch((error) => console.error("(1) Outside error:", error));
  }

    public async addCat() {
    const category = {
      name: "category test 321",
      description: "Une description assez longue eeeeeeeeeeeeeeee",
    };

    addCategory(category)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }

}
</script>

<style scoped lang="less"></style>
