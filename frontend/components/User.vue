<template>
  <div>
    <h2>USER</h2>
    <button class='btn btn-grey' @click="login()">LOGIN</button>
    <br><br>
    <button class='btn btn-grey' @click="register()">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Api from "../services/Api";
import LocalStorageService from "../services/LocalStoreService";

@Component
export default class User extends Vue {
  @Prop() private msg!: string;

  public async login() {
    const credentials = {
      email: "test@lol.com",
      password: "eloajksjdhd",
    };
    Api()
      .post("sessions", credentials)
      .then((response) => {
        console.log(response);
        LocalStorageService.clearToken();
        LocalStorageService.setToken({
          access_token: String(response.data.accessToken),
          refresh_token: String(response.data.refreshToken),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

    public async register() {
    const credentials = {
      email: "test@lol.com",
      password: "eloajksjdhd",
      passwordConfirmation: "eloajksjdhd",
      name: "test1",
    };
    Api()
      .post("users", credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.code === "409") {
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
