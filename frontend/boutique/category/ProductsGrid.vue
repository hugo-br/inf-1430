<template>
  <div>
    <div class="products-wrapper" v-if="products.length > 0">
      <ProductCard
        v-for="prod in products"
        :key="prod._id"
        :productId="prod._id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ProductCard from "../../components/Products/ProductCard.vue";

interface productsArray {
  _id: string;
}

@Component({
  components: {
    ProductCard,
  },
})
export default class ProductsGrid extends Vue {
  @Prop({ default: [] })
  public products: productsArray[];

  @Watch("products")
  public productChange(): void {}
}
</script>

<style scoped lang="less">
.products-wrapper {
  display: flex;
  padding: 20px;
  background: transparent;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
