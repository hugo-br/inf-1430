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
              <div class="product-rating mt-2">
                <span
                  v-for="(star, index) in ratings"
                  :key="index"
                  class="inline mr-1"
                >
                  <font-awesome-icon :icon="['fa', 'star']" />
                </span>
              </div>
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
              <button
                class="plus"
                @click="increase()"
                :disabled="
                  this.product.quantity === 0 ||
                  this.quantity >= this.product.quantity
                "
              >
                <font-awesome-icon :icon="['fa', 'plus']" />
              </button>
              <span>{{ quantity }}</span>
              <button
                class="minus"
                @click="decrease()"
                :disabled="this.product.quantity === 0 || this.quantity === 0"
              >
                <font-awesome-icon :icon="['fa', 'minus']" />
              </button>
            </div>
            <button
              class="btn-buy btn-cart"
              @click="add()"
              :disabled="this.quantity === 0"
            >
              Ajouter au panier
            </button>
            <button
              class="btn-buy btn-checkout"
              :disabled="this.quantity === 0"
            >
              Acheter maintenant
            </button>
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
import { cartStore } from "../../store/store-accessor";

@Component({
  components: {},
})
export default class ShopProductPage extends Vue {
  public productId = this.$route.params.productId; // 7b4353
  public imageNotAvailable = true;
  public isLoading = true;
  public quantity = 0;
  public minimum = 0;
  public ratings = 5;

  public product: Partial<Product> = {
    name: String(this.$t("general.loading")),
    images: "",
    price: 0,
    quantity: 0,
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

  /* Change the quantity */
  public decrease(): void {
    if (this.quantity === 0) return;

    this.quantity = this.quantity - 1;
  }

  public increase(): void {
    if (this.quantity >= this.product.quantity) return;
    this.quantity = this.quantity + 1;
  }

  public add(): void {
    if (this.quantity === 0) return;

    const payload = {
      productId: this.product.productId,
      name: this.product.name,
      images: this.product.images,
      quantity: Number(this.quantity),
      price: Number(this.product.price),
    };
    cartStore.addToCart(payload);
    this.product.quantity = Number(this.product.quantity) - this.quantity;
    this.quantity = 0;
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

<style>
body {
  background-color: #080d10;
}
</style>

<style scoped lang="less">
@background: #080d10;
@border: #306261;
@color: #21aed9;

.product-page {
  min-height: calc(100vh - (66px + 50px));
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
            text-align: justify;
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
        border: @color solid 1px;
        border-radius: 15px;
        background: lighten(@background, 5%);
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        color: white;
        position: relative;
        box-shadow: 6px 5px 15px 0px rgba(165, 217, 233, 0.15);

        /* Buy Now */
        .buy-title {
          padding: 20px 0;
          margin-top: 20px;
          font-size: 24px;
          color: white;
          letter-spacing: 1px;
          font-weight: bolder;
        }

        /* Marketing phrase */
        .catchphrase {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 10px;
        }

        /* In stock */
        .quantity-availability {
          color: @color;
          font-size: 16px;
          font-weight: bold;
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
            background-color: #03030375;
            color: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 24px;
            line-height: 40px;
            padding: 0px;
            border: thin solid @color;
            transition: all 0.4s ease;
            position: relative;

            svg {
              position: absolute;
              top: 8px;
              left: 9px;
            }

            &:hover:not(:disabled) {
              background-color: #c3c7ca;
              box-shadow: 1px 0px 10px 6px rgba(165, 217, 233, 0.15);
            }

            &:disabled {
              cursor: not-allowed;
              background-color: transparent;
              border-color: rgb(80, 79, 79);
              color: rgb(80, 79, 79);
            }

            &.plus {
              &:hover {
                color: rgb(27, 139, 27);
                border-color: rgb(7, 83, 7);
              }
            }

            &.minus {
              &:hover {
                color: rgb(139, 27, 27);
                border-color: rgb(83, 7, 7);
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

          /* Disabled State */
          &.btn-cart,
          &.btn-checkout {
            &:disabled {
              cursor: not-allowed;
              background-color: transparent;
              border-color: #504f4f;
              color: #504f4f;
            }
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
            background-color: transparent;
            color: @color;
            border-color: @color;

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
