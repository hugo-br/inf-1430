<template>
  <div>
    GET ALL Categories
    <button @click="fetchCategories()">Get All Categories</button>
    <!--  <div v-if="isLoaded === true">
      <span>{{ product.name }}</span>
    </div>
    -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getCategories } from "../services/CategoryService";

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

  public async fetchCategories() {
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
}
</script>

<style scoped lang="less"></style>
