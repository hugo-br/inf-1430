<template>
  <div>
    <button @click="register()">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ApiAdmin from "../services/ApiAdmin";

@Component
export default class RegisterAdmin extends Vue {
  @Prop() private msg!: string;

  public async register() {
    const credentials = {
      email: "test22@admin.com",
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
