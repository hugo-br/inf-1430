<template>
  <div>
    <button @click="register()">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Api from "../services/Api";

@Component
export default class Example extends Vue {
  @Prop() private msg!: string;

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
