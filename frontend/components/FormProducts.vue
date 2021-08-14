<template>
  <div>
    <button @click="addProduct()">Add Product</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ApiAdmin from "../services/ApiAdmin";

@Component
export default class FormProducts extends Vue {
  @Prop() private msg!: string;
  public userToken:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE2NmU5OTlhOTRhZDEzZDBhMWZiY2MiLCJlbWFpbCI6InRlc3RAbG9sLmNvbSIsIm5hbWUiOiJ0ZXN0MSIsImNyZWF0ZWRBdCI6IjIwMjEtMDgtMTNUMTM6MDc6MzcuOTg3WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDgtMTNUMTM6MDc6MzcuOTg3WiIsIl9fdiI6MCwic2Vzc2lvbiI6IjYxMTdlZWU3NTJjMmIxMGI2NDk3YWM5OSIsImlhdCI6MTYyODk1ODQzOSwiZXhwIjoxNjI4OTYxMTM5fQ.9py3w73LzAmEnZ0RPLVG0VNZmvty49Zmt9R4x2jTqzo";
   public accessToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE3ZDA3MDRlMmI5MTQyZTA2ZTNjZDIiLCJlbWFpbCI6InRlc3RAYWRtaW4uY29tIiwibmFtZSI6InRlc3QtYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIxLTA4LTE0VDE0OjE3OjIxLjAwMloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA4LTE0VDE0OjE3OjIxLjAwMloiLCJfX3YiOjAsInNlc3Npb24iOiI2MTE3ZWI2OTUyYzJiMTBiNjQ5N2FjOTYiLCJpYXQiOjE2Mjg5NTc1NDUsImV4cCI6MTYyODk2MDI0NX0.pmyHQLfXm4PiECaok_UaZfy_4nfeP1WmC4Bk0uJcDBc";
public refreshToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiX2lkIjoiNjExN2ViNjk1MmMyYjEwYjY0OTdhYzk2IiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkyLjAuNDUxNS4xMzEgU2FmYXJpLzUzNy4zNiIsImNyZWF0ZWRBdCI6IjIwMjEtMDgtMTRUMTY6MTI6MjUuNDcyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDgtMTRUMTY6MTI6MjUuNDcyWiIsIl9fdiI6MCwiaWF0IjoxNjI4OTU3NTQ1LCJleHAiOjE2NjA1MTUxNDV9.ANAGg3UWD-lzRCnEzi8icIXNKu2DFL_6PwqvodIn8kE";

  public async addProduct() {

          const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.userToken}`
     }
      
    const product = {
    name: "produit test u",
    description: "Une description assez longue",
    quantity: 21,
    price: 31,
    };
    ApiAdmin()
      .post("/products", product, {
            headers: headers
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
