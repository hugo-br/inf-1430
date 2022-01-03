<template>
  <div>
    <!-- No items -->
    <div v-if="itemsNumber === 0">
      <span>No item in the cart</span>
    </div>
    <!-- With items -->
    <div v-else>
      <div class="items-row" v-for="product in cart" :key="product.productId">
        {{ product.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { cartStore } from "../../store/store-accessor";
import { Product } from "../../services/ProductsService";

@Component({
  components: {},
})
export default class ShoppingCart extends Vue {
  public hasLoaded = false;
  public itemsNumber = 0;
  public cart: Array<Partial<Product>> = [];

  public mounted() {
    this.$nextTick(function () {
      this.updatedCart();
    });
  }

  public updatedCart(): void {
    this.$nextTick(function () {
      this.itemsNumber = cartStore.numberCartItems;
      this.cart = cartStore.cartItems;
      console.log("here", cartStore.cartItems);
    });
  }
}
</script>

<style scoped lang="less">
.cart {
}
</style>
