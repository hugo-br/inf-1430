<template>
  <div class="products-container" :class="{ 'is-generic': isLoading }">
    <div class="product-card">
      <!-- Visible Face -->
      <div class="face front">
        <div class="face-content card-header">
          <span class="product-exclusivity">New!</span>
          <span class="product-price">{{ product.price }}$</span>
        </div>
        <div class="face-content card-body">
          <img
            class="product-image"
            :class="{ 'is-loading': isLoading || imageNotAvailable }"
            :src="image"
          />
        </div>

        <div class="face-content card-footer">
          <span class="product-name" :class="{ 'is-loading': isLoading }">
            {{ product.name }}
          </span>
        </div>
      </div>

      <!-- Hidden Face -->
      <div class="face back">
        <font-awesome-icon :icon="['far', 'heart']" class="like-icon" />
      </div>
    </div>
    <div class="text-center flow-root w-full bottom-0">
      <button class="btn-buy">
        {{ $t("general.buy") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getProductByID, Product } from "../../services/ProductsService";

@Component({
  components: {},
})
export default class ProductCard extends Vue {
  @Prop()
  public productId: string;

  @Prop()
  public product: Partial<Product>;

  public isLoading = true;
  public imageNotAvailable = false;
  public source: string = "default";

  public mounted(): void {
    this.isLoading = false;
  }

  get image(): string {
    var images = require.context(
      "../../../public/images/",
      false,
      /\.(png|jpg|jpeg|gif)$/i
    );
    let img = this.product.images;

    try {
      this.imageNotAvailable = false;
      return images("./" + img);
    } catch (err: any) {
      let img = "default";
      this.imageNotAvailable = true;
      return images("./" + img + ".png");
    }
  }
}
</script>

<style scoped lang="less">
@background: #111a21;
@border: #306261;
@color: #21aed9;

.products-container {
  display: flex;
  margin: 10px 20px 60px 20px;
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

  /* State when is loading or not available, use skeleton */
  &.is-generic {
    .product-card {
      margin: 10px 20px 40px 20px;

      &:hover {
        .face.front {
          transform: translateX(0);
        }

        .face.back {
          transform: translateX(0);
          box-shadow: 0 0 0 0 rgba(164, 182, 243, 0);
        }
      }
      .face-content {
        background: #999999;
        border-color: #bdbdbd;
        overflow: hidden;

        .product-price,
        .product-exclusivity {
          display: none;
        }
      }

      .card-header,
      .card-footer {
        &::after {
          position: absolute;
          z-index: 0;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 50%;
          transform: translateX(-100%);
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: linear-gradient(
            90deg,
            rgba(#fff, 0) 0,
            rgba(#fff, 0.2) 20%,
            rgba(#fff, 0.45) 50%,
            rgba(#fff, 0)
          );
          animation: shimmer 2s infinite;
          content: "";
          display: block;
        }
      }
    }
    .btn-buy {
      display: none;
    }
  }

  /* Product Card */
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
      position: relative;

      span {
        display: inline-block;
        padding: 10px 0;
      }
      .product-price {
        float: right;
        padding: 10px;
        margin-left: 15px;
        background: #89791f;
        color: white;
        font-weight: bold;
        font-size: 16px;
        border-radius: 5px;
        transition: all 0.4s ease;
        border: white solid thin;
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
      position: relative;

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

        &.is-loading {
          animation: loadingImg 4s infinite;
        }
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
      position: relative;

      .product-name {
        color: @color;
        font-family: "Courgette", cursive;
        font-size: 30px;
        line-height: 28px;
        cursor: pointer;
        transition: color 0.4s ease;

        &:hover {
          color: lighten(@color, 20%);
        }

        &.is-loading {
          line-height: 42px;
          font-size: 12px;
          color: #d0ffff;
          height: 50px;
          display: block;

          &:after {
            content: " ...";
            margin-left: -5px;
          }
        }
      }
    }
  }

  /* Hidden face */
  .face.back {
    background: @border;
    z-index: 0;

    /* Heart Icon */
    .like-icon {
      opacity: 0;
      position: absolute;
      right: 20px;
      top: 15px;
      transition: opacity 0.4s ease-in;
      cursor: pointer;
      z-index: 3;
    }
  }

  /* On Hover */
  .product-card {
    &:hover {
      .face.front {
        transform: translateX(-30px);

        .product-price {
          background-color: black;
          border-color: #c8af21;
          color: #c8af21;
          font-size: 24px;
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
        .like-icon {
          opacity: 1;
        }
      }
    }
  }

  /* Buy button */
  .btn-buy {
    background-color: #d1e5e4;
    margin-top: 20px;
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

/* Animations */
@keyframes loadingImg {
  0%,
  100% {
    filter: invert(0);
  }
  50% {
    filter: invert(1);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
