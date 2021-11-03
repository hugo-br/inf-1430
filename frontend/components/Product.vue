<template>
  <div>
    <h2>Products</h2>
    GET
    <button class='btn btn-blue' @click="fetchProduct()">Get Product</button>
    <!--  <div v-if="isLoaded === true">
      <span>{{ product.name }}</span>
    </div>
    -->
    <br /><br />
    POST
    <button class='btn btn-blue' @click="addProd()">Add Product</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { addProduct, getProduct, Product } from "../services/ProductsService";

@Component
export default class Products extends Vue {
  public isLoaded = false;
  public product: Product = null;

  public async addProd() {
    const product = {
      name: "produit test 43",
      description: "Une description assez longue",
      quantity: 0,
      price: 31,
      categories: ["6182c28508d9310640ee7591","6182c630d20d59537c40216"]
    };

    addProduct(product)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }

  /*
  // get product on load 
  public mounted() {
    this.$nextTick(() => {
      getProduct("y0DXal")
        .then((result: Product) => {
          console.log(result);
          this.$nextTick(function () {
            this.product = result;
            this.isLoaded = true;
          });
        })
        .catch((error: any) => console.error("(1) Outside error:", error));
    });
  }
  */

  public async fetchProduct() {
    getProduct("y0DXal")
      .then((result: Product) => {
        console.log(result);
        this.$nextTick(function () {
          this.product = result;
          this.isLoaded = true;
        });
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }
}
</script>

<style scoped lang="less"></style>
