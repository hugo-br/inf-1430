<template>
  <div class="products-container">
    <div class="product-card">
      <!-- Visible Face -->
      <div class="face front" :class="{ 'is-generic': isLoading }">
        <div class="face-content card-header">
          <span class="product-exclusivity">New!</span>
          <span class="product-price">350$</span>
        </div>
        <div class="face-content card-body">
          <img class="product-image" :src="image" />
        </div>

        <div class="face-content card-footer">
          <span class="product-name"> Diamond </span>
        </div>
      </div>

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
export default class ProductCard extends Vue {
  @Prop()
  public productID: string; 

  public isLoading = false;
  public source: string = "default";

  get image(): string {
    var images = require.context(
      "../../../public/images/",
      false,
      /\.(png|jpg|jpeg|gif)$/i
    );
    let img = "default";
    return images("./" + img + ".png");
  }
}
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
  transition: all 0.4s ease, opacity 1s ease-out;

  .product-card {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 7px;
    border: 2px solid transparent;

    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }

  .face {
    position: absolute;
    top: 0;
    left: 0;
    background: @background;
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 7px;
    transition: transform 0.6s, box-shadow 0.4s ease-out;
    box-shadow: 0px 0px 0px rgba(248, 248, 248, 0);
    flex-direction: column;
  }

  /* Visible face */
  .face.front {
    z-index: 1;
    border: 2px solid @border;
    padding: 20px;
    position: relative;

    /* State when is loading or not available */
    &.is-generic {
      .face-content {
        background: #999999;
        border-color: #bdbdbd;
      }
    }

    .face-content {
      width: 100%;
      display: block;
      border: transparent solid thin;
      border-radius: 5px;
    }

    .card-header {
      height: 30px;
      border: transparent solid thin;
      padding: 0;
      text-align: left;
      margin-bottom: 10px;
      line-height: 10px;
      font-size: 16px;
      font-weight: bold;
      color: lighten(@border, 25%);
      letter-spacing: 1px;

      span {
        display: inline-block;
        padding: 10px 0;
      }
      .product-price {
        float: right;
        padding: 10px;
        margin-left: 15px;
        background: white;
        color: @border;
        font-weight: bold;
        font-size: 16px;
        border-radius: 5px;
        transition: color 0.4s ease;
        border: transparent solid thin;
      }
    }

    .card-body {
      height: 240px;
      width: 100%;
      margin-bottom: 30px;
      border: darken(@border, 15%) solid thin;
      text-align: center;
      border-radius: 50%;
      transition: border 0.6s ease 0.1s;

      .product-image {
        max-width: 100%;
        max-height: 100%;
        width: 200px;
        height: 200px;
        padding: 20px;
        display: block;
        margin: auto;
        transform: translateY(20px) scale(0.95);
        transition: transform 0.7s ease-in;
      }
    }
    .card-footer {
      height: 50px;
      line-height: 20px;
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 2px;
      border: transparent solid thin;
      color: lighten(@border, 45%);
      transition: color 0.4s ease;
    }
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
      .face.front {
        transform: translateX(-30px);

        .product-price {
          background-color: transparent;
          border-color: @border;
          color: white;
        }

        /* Name */
        .card-footer {
          color: white;
        }

        .card-body {
          border: @border solid thin;
          box-shadow: 0px 4px 18px -4px rgba(51, 95, 131, 0.56);

          /* Image */
          .product-image {
            transform: translateY(15px) scale(1);
          }
        }
      }

      .face.back {
        transform: translateX(20px);
        box-shadow: -21px -5px 20px 6px rgba(164, 182, 243, 0.205);
      }
    }
  }

  /* Buy button */
  .btn-buy {
    background-color: #d1e5e4;
    margin-top: 15px;
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
