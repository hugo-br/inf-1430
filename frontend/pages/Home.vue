<template>
  <div class="home">
    <h1>H1</h1>
    <Register /><br />
    <Login />
    <br /><br /><br />
    <AdminLogin /><br />
    <AdminRegister /><br />
    <FormProducts />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "../components/UserRegister.vue";
import Login from "../components/UserLogin.vue";
import AdminLogin from "../components/AdminLogin.vue";
import AdminRegister from "../components/AdminRegister.vue";
import FormProducts from "../components/FormProducts.vue";


@Component({
  components: { Register, Login, AdminLogin, AdminRegister, FormProducts },
})
export default class Home extends Vue {}
</script>
