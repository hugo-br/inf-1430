<template>
  <nav>
    <div class="navigation">
      <!-- Clickable Logo -->
      <div id="logo" class="font">
        <router-link :to="{ name: 'all-products' }">
          <font-awesome-icon
            :icon="['fa', 'crown']"
            class="inline mr-3 logo-icon"
          />
          <h1 class="inline">Rubydor</h1>
        </router-link>
      </div>
      <div id="search-bar">
        <input type="text" class="inline" placeholder="Trouvez votre diamant" />
        <font-awesome-icon
          :icon="['fa', 'search']"
          class="inline mr-3 logo-icon"
        />
      </div>
      <div id="action-icons" class="ml-auto">
        <font-awesome-icon
          :icon="['fa', 'shopping-cart']"
          class="inline mr-5 logo-icon"
          @click="showShoppingCart()"
        />
        <font-awesome-icon
          :icon="['fa', 'user']"
          class="inline mr-3 logo-icon"
        />
      </div>
    </div>

    <!-- Shopping Cart -->
    <MenuSlide v-show="showCart" @close="showShoppingCart()">
      <template v-slot:header>
        <div class="cart-header">
          <h4 class="font">Mon Panier</h4>
          <span class="cart-remove-all" @click="clearCart()" v-if="total > 0"
            >Vider le panier</span
          >
        </div>
      </template>
      <template v-slot:content>
        <ShoppingCart
          @update-price="updateTotal($event)"
          :update="showCart"
          :removeClicked="remove"
        />
      </template>
      <template v-slot:footer>
        <div class="cart-footer" v-if="total > 0">
          <div class="cart-total">Total : {{ total }}$</div>
          <button class="btn-checkout">Passer à la caisse</button>
        </div>
      </template>
    </MenuSlide>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuDropdown from "../components/MenuDropdown.vue";
import MenuSlide from "../components/MenuSlide.vue";
import ShoppingCart from "../cart/ShoppingCart.vue";

@Component({
  components: { MenuDropdown, ShoppingCart, MenuSlide },
})
export default class Navigation extends Vue {
  public showCart = false;
  public total = 0;
  public remove = true;

  public showShoppingCart(): void {
    this.showCart = !this.showCart;
  }

  public updateTotal(price: number): void {
    this.total = price;
  }

  public clearCart(): void {
    this.remove = !this.remove;
    console.log("navigation");
    this.$emit("removeAll");
  }
}
</script>

<style scoped lang="less">
@nav: #1b0923;
@color: darken(gold, 10%);

nav {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgb(4, 8, 10);
  background: linear-gradient(138deg, rgba(4, 8, 10, 1) 0%, #1c0d22 68%);

  .navigation {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    line-height: 32px;
    max-width: 1500px;
    margin: 5px auto 0;

    align-items: flex-start;

    #logo {
      color: white;
      text-align: center;
      font-size: 28px;
      color: @color;
      width: 250px;
      margin-right: 30px;
      flex-grow: 0;
    }

    /* Search */
    #search-bar {
      flex-grow: 1;
      position: relative;

      input[type="text"] {
        border-radius: 15px;
        color: @color;
        background-color: black;
        border: 1px solid @color;
        width: 100%;
        height: 36px;
        padding: 4px 15px 4px 20px;
      }

      svg {
        position: absolute;
        right: 10px;
        top: 9px;
        color: @color;
      }
    }

    #action-icons {
      color: rgb(175, 174, 174);
      width: 300px;
      cursor: pointer;

      svg {
        &:hover {
          color: lighten(rgb(175, 174, 174), 20%);
        }
      }
    }
  }
}

/* Shopping Cart Overwrite */

/deep/ .menu-slide {
  border-left: solid thin #cfa34d69;
  background-color: #0c0c0c;
  padding: 10px;
  color: white;
  box-shadow: inset 8px 1px 17px 6px #58585829;

  .menu-slide-footer {
    background-color: #ffffff05;
    border-top: white thin solid;
  }

  .slide-close {
    color: @color;
    transition: color 0.4s ease-in;

    &:hover {
      color: white;
    }
  }
}

.cart-header {
  color: @color;
  margin-top: 10px;
  position: relative;

  .cart-remove-all {
    font-size: 12px;
    position: absolute;
    bottom: -23px;
    right: 10px;
    color: #838383;
    cursor: pointer;
    transition: color 0.4s ease;

    &:hover {
      color: #d16161;
    }
  }
}
.cart-footer {
  color: @color;
  margin-top: 10px;

  .cart-total {
    font-size: 24px;
    letter-spacing: 1px;
    color: white;
    font-weight: bolder;
    text-align: center;
    width: 100%;
    height: 30px;
  }

  /* Buy Button */
  .btn-checkout {
    background-color: darken(@color, 20%);
    border: 2px solid darken(@color, 15%);
    margin-top: 20px;
    font-size: 14px;
    padding: 5px 20px;
    z-index: 4;
    width: 100%;
    max-width: 220px;
    border-radius: 85px;
    color: white;
    font-weight: bolder;
    box-shadow: 0px 0px 0px rgba(246, 246, 246, 0);
    transition: background-color 0.4s ease-in, color 0.4s ease, border 0.4s ease,
      box-shadow 0.4s ease-out;

    &:hover {
      background-color: darken(@color, 20%);
      box-shadow: 0px 0px 11px rgba(182, 172, 32, 0.35);
      border: 2px solid lighten(@color, 35%);
      color: lighten(@color, 35%);
    }
  }
}
</style>
