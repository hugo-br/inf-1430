<template>
  <div class="home">
    <h1>H1</h1>
    <Login /><br />
    <Register /><br />
    <br /><br /><br />
    <AdminLogin /><br />
    <AdminRegister /><br />
    <FormProducts /><br />
    <Products />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "../components/UserRegister.vue";
import Login from "../components/UserLogin.vue";
import AdminLogin from "../components/AdminLogin.vue";
import AdminRegister from "../components/AdminRegister.vue";
import FormProducts from "../components/FormProducts.vue";
import Products from "../components/Product.vue";

@Component({
  components: {
    Register,
    Login,
    AdminLogin,
    AdminRegister,
    FormProducts,
    Products,
  },
})
export default class Home extends Vue {}
</script>
