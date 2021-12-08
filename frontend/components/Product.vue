<template>
  <div>
    <h2>Products</h2>
    GET ONE PRODUCT
    <button class="btn btn-blue" @click="fetchProd()">Get Product</button>
    <br /><br />
    GET ALL PRODUCTS
    <button class="btn btn-blue" @click="fetchAllProd()">Get Product</button>
    <br /><br />
    Find a product
    <button class="btn btn-blue" @click="findProd()">Find Product</button>
    <br /><br />
    POST
    <button class="btn btn-blue" @click="addProd()">Add Product</button>
    <br /><br />
    DELETE
    <button class="btn btn-blue" @click="deleteProd()">Delete Product</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  addProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
  findProducts,
  Product,
} from "../services/ProductsService";
import ProductUI from "../models/productsUI";

@Component
export default class Products extends Vue {
  public isLoaded = false;
  public product: any = null;

  public async addProd() {
    const product = {
      name: "",
      description: "Une description assez longue",
      quantity: 12,
      price: 32,
      isPublished: true,
      categories: ["6182c28508d9310640ee7591", "6182c630d20d59537c402169"],
    };

    addProduct(product)
      .then((result: any) => {
        console.log("here then", result);
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }

  public async deleteProd() {
    deleteProduct("762b47")
      .then((result: Product) => {
        this.$nextTick(function () {
          console.log(result);
        });
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }

  public async fetchProd() {
    getProduct("d1cda7")
      .then((result: Product) => {
        console.log(result);
        this.$nextTick(function () {
          const prod = new ProductUI(result);
          console.log(prod.capitalize());
          this.product = prod;
          //  this.isLoaded = true;
        });
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }

  public async fetchAllProd() {
    getAllProducts()
      .then((result: Product) => {
        console.log(result);
        this.$nextTick(function () {
          this.product = result;
          this.isLoaded = true;
        });
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }

  public async findProd() {
    findProducts("price>30&select=name,_id,price")
      .then((result: Product) => {
        console.log(result);
        this.$nextTick(function () {
          //  this.isLoaded = true;
        });
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
}
</script>

<style scoped lang="less"></style>
