<template>
  <main class="product-page">
    <div class="flex product-wrap">
      <div class="product-info-wrap">
        <!--Product Section -->
        <div class="product-info-wrap">
          <div class="info-product">
            <!-- Image -->
            <div class="product-image">
              <img :src="image" :alt="product.name" />
            </div>
            <!-- Text -->
            <div class="product-basic">
              <span class="product-availability">{{ $t("general.new") }}</span>
              <h1 class="product-name font">{{ product.name }}</h1>
              <span class="product-price">Prix : {{ product.price }} $</span>
              <p class="product-description">{{ product.description }}</p>
            </div>
          </div>

          <!-- Add to Cart Section -->
          <div class="info-buy">
            <h3 class="buy-title">Acheter maintenant</h3>
            <ul class="catchphrase">
              <li>Livraison gratuite avec achats de 250$ et plus</li>
              <li>Aucun remboursement</li>
            </ul>

            <span class="quantity-availability">En Stock</span>

            <!-- Add/Remove Section -->
            <div class="quantity-section">
              <button class="plus">+</button>
              <span>{{ quantity }}</span>
              <button class="minus"><strong>-</strong></button>
            </div>
            <button class="btn-buy btn-cart">Ajouter au panier</button>
            <button class="btn-buy btn-checkout">Acheter maintenant</button>
          </div>
        </div>

        <!-- Caracteristic Section 
        <div class="flex product-caracteristics-wrap"></div> -->
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getProduct, Product } from "../../services/ProductsService";

@Component({
  components: {},
})
export default class ShopProductPage extends Vue {
  public productId = this.$route.params.productId; // 7b4353
  public imageNotAvailable = true;
  public isLoading = true;
  public quantity = 0;
  public product: Partial<Product> = {
    name: String(this.$t("general.loading")),
    images: "",
  };

  public mounted(): void {
    this.isLoading = false;
    this.fetchProd();
  }

  /**
   * @desc    Get Product for the database
   **/
  public async fetchProd() {
    getProduct(this.productId)
      .then((result: Partial<Product>) => {
        this.$nextTick(function () {
          this.product = result;
          this.isLoading = false;
          console.log(result);
        });
      })
      .catch((error: any) => {
        this.isLoading = true;
      });
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
@background: #080d10;
@border: #306261;
@color: #21aed9;

body {
  background-color: @background;
}

.product-page {
  min-height: calc(100vh - (65px + 50px));
  height: auto;
  display: block;
  width: 100%;
  position: relative;
  background-color: @background;
  z-index: 0;

  .product-wrap {
    width: 100%;
    max-width: 1500px;
    padding: 90px 40px 40px;
    margin: auto;

    .product-info-wrap {
      width: 100%;
      display: block;
      margin-bottom: 60px;
      height: 440px;

      .info-product {
        display: inline-block;
        width: calc(70% - 50px);
        margin-right: 40px;
        height: 100%;
        float: left;
        color: white;

        .product-basic,
        .product-image {
          width: calc(50% - 10px);
          display: inline-flex;
          vertical-align: top;
          text-align: left;
        }

        .product-image {
          vertical-align: middle;
          img {
            width: 80%;
            height: auto;
            margin: auto;
            max-width: 300px;
            max-height: 300px;
            transition: transform 0.4 ease-in;

            &:hover {
            }
          }
        }

        .product-basic {
          padding-left: 30px;
          text-align: left;
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: flex-start;

          /* Product Availability */
          .product-availability {
            width: 100%;
            clear: both;
            font-size: 18px;
            color: @color;
            letter-spacing: 1px;
            font-weight: bold;
          }

          /* Product Name */
          .product-name {
            display: block;
            font-size: 52px;
            width: 100%;
            clear: both;
            text-align: left;
          }

          /* Product Price */
          .product-price {
            width: 100%;
            clear: both;
            font-size: 24px;
            color: @color;
            letter-spacing: 1px;
            font-weight: bold;
          }

          /* Product Description */
          .product-description {
            display: block;
            line-height: 22px;
            font-size: 16px;
            width: 100%;
            clear: both;
            text-align: left;
            margin-top: 20px;
          }
        }
      }

      /* Section for adding to cart */
      .info-buy {
        display: inline-flex;
        width: calc(30% - 2px);
        max-width: 350px;
        padding: 0 20px;
        height: 100%;
        float: right;
        border: @border solid 1px;
        border-radius: 15px;
        background: lighten(@background, 5%);
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        color: white;
        position: relative;

/* Buy Now */
        .buy-title {
          padding: 20px 0;
          margin-top: 20px;
          font-size: 22px;
          color: @color;
          letter-spacing: 1px;
        }

        .catchphrase {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 10px;
        }

        /* In stock */
        .quantity-availability {
          color: @color;
          font-size: 16px;
          color: @color;
        }
        .quantity-section {
          margin: 20px 0 20px;
          position: relative;

          * {
            display: inline-block;
            vertical-align: middle;
          }

          span {
            text-align: center;
            margin: 0 20px;
            height: 30px;
            width: 50px;
            line-height: 30px;
            font-size: 30px;
          }

          button {
            background-color: white;
            color: #21aed9;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 24px;
            line-height: 30px;
            padding: 0px;
            border: thin solid @color;
            transition: all 0.4s ease;
            position: relative;

            &:hover {
              background-color: #c3c7ca;
            }

            &.plus {
              color: @color;

              &:hover {
                color: rgb(27, 139, 27);
                border-color: rgb(7, 83, 7);
              }
            }

            &.minus {
              color: darken(@color, 10%);

              &:hover {
                color: rgb(139, 27, 27);
                border-color: rgb(83, 7, 7);
              }

              strong {
                position: absolute;
                left: 9px;
                top: -2px;
              }
            }
          }
        }

        /* Buy Button */
        .btn-buy {
          background-color: #d1e5e4;
          margin-top: 20px;
          font-size: 14px;
          padding: 5px 20px;
          z-index: 4;
          width: 100%;
          max-width: 220px;
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

          &.btn-cart {
            background-color: #0f3e34;
            border-color: darken(white, 20%);
            color: white;
            &:hover {
              background-color: lighten(#0f3e34, 20%);
            }
          }

          &.btn-checkout {
            background-color: #d1e5e4;
            color: @border;

            &:hover {
              border-color: @color;
              color: @color;
              background-color: lighten(#d1e5e4, 20%);
            }
          }
        }
      }
    }

    /* Bottom Section for caracteristics */
    .product-caracteristics-wrap {
      width: 100%;
      height: 50px;
      background-color: grey;
    }
  }
}

/* Mobile */
@media screen {
}
</style>
