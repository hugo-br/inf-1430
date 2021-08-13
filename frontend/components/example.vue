<template>
  <div>
    <button @click="sendEmail()">Click ME</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Api from "../services/Api";

@Component
export default class Example extends Vue {
  @Prop() private msg!: string;

  public async sendEmail() {
    const credentials = {
      email: "testlol.com",
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
        console.log(error);
      });
  }
}
</script>

<style scoped lang="less"></style>
