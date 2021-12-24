<template>
  <div class="products-container">
    <div class="product-card">
      <div class="face front">HERE</div>
      <div class="face back">HERE</div>
    </div>
    <div class="text-center flow-root w-full bottom-0">
      <button class="btn-buy">BUY</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ProductCard extends Vue {}
</script>

<style scoped lang="less">
@background: #111a21;
@border: #306261;

.products-container {
  display: flex;
  margin: 10px 20px 40px 20px;
  padding: 20px;
  width: 350px;
  height: 450px;
  background: transparent;
  justify-content: center;
  align-items: left;
  font-family: arial;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.4s ease;

  .product-card {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 7px;
    border: 2px solid transparent;
  }

  .face {
    position: absolute;
    top: 0;
    left: 0;
    background: @background;
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 7px;
    transition: transform 0.6s, box-shadow 0.4s ease 0.2s;
    box-shadow: 0px 0px 0px rgba(248, 248, 248, 0);
  }

  /* Visible face */
  .face.front {
    z-index: 1;
    border: 2px solid @border;
  }

  /* Hidden face */
  .face.back {
    background: @border;
    z-index: 0;
    /* box-shadow: 0 10px 50px rgba(245, 245, 245, 0.8); */
  }

  /* Hover */
  .product-card {
    &:hover {
      .face {
        box-shadow: 0px 0px 15px rgba(254, 255, 255, 0.35);
      }
      .face.front {
        transform: translateX(-30px);
      }
      .face.back {
        transform: translateX(20px);
      }
    }
  }

  /* Buy button */
  .btn-buy {
    background-color: #d1e5e4;
    margin-top: 25px;
    padding: 5px 20px;
    z-index: 4;
    width: 60%;
    border-radius: 85px;
    border: 2px solid @border;
    color: @border;
    font-weight: 700;
    box-shadow: 0px 0px 0px rgba(56, 115, 114, 0);
    transition: background-color 0.4s ease-in, color 0.4s ease,
      box-shadow 0.4s ease-out;

    &:hover {
      background-color: @background;
      box-shadow: 0px 0px 11px rgba(56, 115, 114, 0.35);
      border: 2px solid lighten(@border, 25%);
      color: lighten(@border, 25%);
    }
  }
}
</style>
