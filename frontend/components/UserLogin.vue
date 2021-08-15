<template>
  <div>
    <button @click="login()">LOGIN</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Api from "../services/Api";
import LocalStorageService from "../services/LocalStoreService";

@Component
export default class Login extends Vue {
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
}
</script>

<style scoped lang="less"></style>
