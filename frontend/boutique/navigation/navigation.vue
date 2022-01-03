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

    <!-- Menus Dropdown -->
    <MenuDropdown v-show="!showCart" @close="showShoppingCart()">
      <template v-slot:content>
        <ShoppingCart />
      </template>
    </MenuDropdown>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuDropdown from "../components/MenuDropdown.vue";
import ShoppingCart from "../cart/ShoppingCart.vue";

@Component({
  components: { MenuDropdown, ShoppingCart },
})
export default class Navigation extends Vue {
  public showCart = false;

  public showShoppingCart(): void {
    this.showCart = !this.showCart;
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
</style>
