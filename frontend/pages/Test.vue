<template>
  <div class="home">
    <router-link to="/cms-login">CMS</router-link>
    <User /><br />
    <Admin /><br />
    <Products /><br />
    <Categories />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "../components/User.vue";
import Admin from "../components/Admin.vue";
import Products from "../components/Product.vue";
import Categories from "../components/Categories.vue";

@Component({
  components: {
    User,
    Admin,
    Products,
    Categories,
  },
})
export default class PageTest extends Vue {}
</script>
