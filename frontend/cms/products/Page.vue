<template>
  <div>
      <ProductsLists/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductsLists from "./Lists.vue";

@Component({
  components: {
    ProductsLists
}
})
export default class ProductsPage extends Vue {}
</script>

<style scoped lang="less"></style>
