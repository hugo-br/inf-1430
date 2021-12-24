<template>
  <div class="product-wrapper">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductCard from "../../components/Products/ProductCard.vue";

@Component({
  components: {
    ProductCard,
  },
})
export default class ShopCategoryPage extends Vue {}
</script>

<style scoped lang="less">
@background: #111a21;
.product-wrapper {
  background-color: darken(#111a21, 5%);
}
</style>
