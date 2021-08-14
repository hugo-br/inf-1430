<template>
  <div>
    <button @click="login()">LOGIN - ADMIN</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ApiAdmin from "../services/ApiAdmin";

@Component
export default class AdminLogin extends Vue {
  @Prop() private msg!: string;

  public async login() {
    const credentials = {
      email: "test@admin.com",
      password: "hsjhjkah",
    };
    ApiAdmin()
      .post("/sessions", credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.status);
      });
  }
}
</script>

<style scoped lang="less"></style>
