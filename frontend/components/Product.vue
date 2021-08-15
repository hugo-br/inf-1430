<template>
  <div>
    <button @click="getProduct()">Get Product</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Api from "../services/Api";

@Component
export default class Products extends Vue {
  @Prop() private msg!: string;

  public async getProduct() {
    Api()
      .get("/products/LkRzJY")
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
