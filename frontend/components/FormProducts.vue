<template>
  <div>
    <button @click="addProduct()">Add Product</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
//import ProductsService from "../services/ProductsService";
import ApiAdmin from "../services/ApiAdmin";

@Component
export default class FormProducts extends Vue {
  @Prop() private msg!: string;

  public async addProduct() {
    const product = {
      name: "produit test 55",
      description: "Une description assez longue",
      quantity: 21,
      price: 31,
    };
    ApiAdmin()
      .post("/products", product)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  }
}
</script>

<style scoped lang="less"></style>
