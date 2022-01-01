<template>
  <div>
    <div class="products-wrapper" v-if="products.length > 0">
      <ProductCard
        v-for="prod in listProducts"
        :key="prod._id"
        :product="prod"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Many, orderBy } from "lodash";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ProductCard from "../../components/Products/ProductCard.vue";
import { productsArray, FilterOptions } from "../../services/ProductsService";

@Component({
  components: {
    ProductCard,
  },
})
export default class ProductsGrid extends Vue {
  @Prop({ default: [] })
  public products: productsArray[];

  // Options by default, price up
  @Prop({ default: { element: "price", order: "desc" } })
  public filters: FilterOptions;

  // Return the ordered list of products
  get listProducts(): productsArray[] {
    return orderBy(this.products, this.filters.element, this.filters.order);
  }

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
