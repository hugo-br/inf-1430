<template>
  <main class="product-page">
    <div class="flex product-wrap">
      <div class="product-info-wrap">
        <div class="product-info-wrap">
          <!--Product Section -->
          <div class="info-product">
            <div class="product-image">
              <img :src="image" :alt="product.name" />
            </div>
            <div class="product-basic">
              <span class="product-availability">New!</span>
              <h1 class="product-name font">{{ product.name }}</h1>
              <p class="product-description">{{ product.description }}</p>
            </div>
          </div>

          <!-- Add to Cart Section -->
          <div class="info-buy"></div>
        </div>

        <!-- Caracteristic Section -->
        <div class="flex product-caracteristics-wrap"></div>
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

.product-page {
  min-height: 100vh;
  height: auto;
  display: block;
  width: 100%;
  position: relative;
  background-color: @background;
  z-index: 0;

  .product-wrap {
    width: 100%;
    max-width: 1500px;
    padding: 40px;
    margin: auto;

    .product-info-wrap {
      width: 100%;
      display: block;
      margin-bottom: 60px;
      height: 450px;

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
            margin: 10px 0 20px;
          }

          /* Product Description */
          .product-description {
            display: block;
            line-height: 22px;
            font-size: 16px;
            width: 100%;
            clear: both;
            text-align: left;
          }
        }
      }

      /* Section for adding to cart */
      .info-buy {
        display: inline-flex;
        width: calc(30% - 2px);
        height: 100%;
        float: right;
        border: @border solid 1px;
        height: 100%;
        border-radius: 15px;
        background: lighten(@background, 5%);
      }
    }

    /* Bottom Section for caracteristics */
    .product-caracteristics-wrap {
      width: 100%;
      height: 50px;
      background-color: grey;
    }
  }

  /* Buy Button */
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

/* Mobile */
@media screen {
}
</style>
