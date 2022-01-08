<template>
  <div>
    <!-- No items -->
    <div class="no-cart" v-if="itemsNumber === 0">
      <strong class="italic pt-5">Aucun produit dans le panier</strong>
    </div>
    <!-- With items -->
    <div v-else class="cart">
      <div class="item-row" v-for="product in cart" :key="product.productId">
        <ShoppingCartItem :product="product" @remove="removeItem($event)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { cartStore } from "../../store/store-accessor";
import { Product } from "../../services/ProductsService";
import ShoppingCartItem from "./ShoppingCartItem.vue";

@Component({
  components: { ShoppingCartItem },
})
export default class ShoppingCart extends Vue {
  @Prop()
  public removeClicked: boolean;

  @Prop()
  public update: boolean;

  public hasLoaded = false;
  public itemsNumber = 0;
  public total = 0;
  public cart: Array<Partial<Product>> = [];

  public mounted() {
    this.$nextTick(function () {
      this.updatedCart();
    });
  }

  @Watch("removeClicked")
  public clearCart(): void {
    cartStore.removeAll();
    this.updatedCart();
  }

  @Watch("update")
  public forceUpdate(): void {
    this.updatedCart();
  }

  // Calcul Price on Cart change and emit to the navigation
  public calculTotal(): void {
    this.total = 0;
    this.cart.forEach((prod) => {
      this.total += Number(prod.quantity) * Number(prod.price);
    });
    this.$emit("update-price", this.total);
  }

  public updatedCart(): void {
    this.$nextTick(function () {
      this.itemsNumber = cartStore.numberCartItems;
      this.cart = cartStore.cartItems;
      this.calculTotal();
    });
  }

  public removeItem(productId: string): void {
    cartStore.removeFromCart(productId);
    this.updatedCart();
  }
}
</script>

<style scoped lang="less">
.cart {
  width: 100%;

  .item-row {
    width: 100%;
    min-height: 80px;
    border-bottom: solid 2px rgba(0, 0, 0, 0.2);
    border-top: solid 2px rgba(255, 255, 255, 0.05);
  }
}
</style>
