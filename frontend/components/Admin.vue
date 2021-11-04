<template>
  <div>
    <h2>ADMIN</h2>
    <button class="btn btn-grey" @click="login()">LOGIN - ADMIN</button>
    <br /><br />
    <button class="btn btn-grey" @click="register()">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ApiAdmin from "../services/ApiAdmin";
import LocalStorageService from "../services/LocalStoreService";

@Component
export default class Admin extends Vue {
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
        LocalStorageService.clearToken();
        LocalStorageService.setToken({
          access_token: String(response.data.accessToken),
          refresh_token: String(response.data.refreshToken),
        });
        // TODO: set store user tokens
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.status);
      });
  }

  public async register() {
    const credentials = {
      email: "test222@admin.com",
      password: "hsjhjkah",
      passwordConfirmation: "hsjhjkah",
      name: "test-admin",
    };
    ApiAdmin()
      .post("/", credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.code == 409) {
          console.log("Deja un compte");
        }
        console.log(error.response.data);
        console.log(error.response.status);
        // console.log(error.response.headers);
      });
  }
}
</script>

<style scoped lang="less"></style>
