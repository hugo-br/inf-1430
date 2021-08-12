<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <br />
    <button @click="registerEmail()">Click</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import AuthentificationService from "../services/AuthentificationService";

@Component({
  components: {},
})
export default class Register extends Vue {
  @Prop() private msg!: string;

  public email = "";
  public password = "";
  public error = null;

  public async register() {
    try {
      const response = await AuthentificationService.register({
        email: this.email,
        password: this.password,
      });

      console.log(response.data);
      //   this.$store.dispatch('setToken', response.data.token)
      //    this.$store.dispatch('setUser', response.data.user)
    } catch (error) {
      this.error = error.response.data.error;
    }
  }

  public registerEmail(): void {
    this.register();
  }

  @Watch("email")
  public test(): void {
    console.log("changed");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
