<template>
  <div>
    <button @click="addProduct()">Add Product</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ApiAdmin from "../services/ApiAdmin";
import LocalStorageService from "../services/LocalStoreService";

@Component
export default class FormProducts extends Vue {
  @Prop() private msg!: string;
  public accessToken: string = "";
  public refreshToken: string = "";

  created() {
    this.accessToken = LocalStorageService.getAccessToken() || "";
    this.refreshToken = LocalStorageService.getRefreshToken() || "";
  }

  public async addProduct() {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.accessToken}`,
      "x-refresh": this.refreshToken,
    };

    const headers2 = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LocalStorageService.getAccessToken()}`,
      "x-refresh": LocalStorageService.getRefreshToken(),
    };

    const product = {
      name: "produit test 56",
      description: "Une description assez longue",
      quantity: 21,
      price: 31,
    };
    ApiAdmin()
      .post("/products", product, {
        headers: headers2,
      })
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
