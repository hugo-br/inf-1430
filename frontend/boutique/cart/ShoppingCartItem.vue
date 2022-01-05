<template>
  <div class="relative">
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-content">
      <h6 class="font">{{ product.name }}</h6>
      <div class="price">
        {{ product.quantity }} X {{ product.price }}$ = {{ total }}$
      </div>
    </div>

    <div class="remove" @click="removeItem()">Enlever</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ShoppingCartItem extends Vue {
  @Prop({ default: {} })
  public product: any;

  public imageNotAvailable = true;

  // Remove the item from the cart
  public removeItem() {
    this.$emit("remove", this.product.productId);
  }

  get total(): number {
    return this.product.price * this.product.quantity;
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
@gold: #c8af21;

.product-image {
  display: inline-block;
  width: 20%;
  padding: 2%;
  height: 100%;
  text-align: center;

  img {
    width: 60px;
    max-height: 60px;
    vertical-align: middle;
  }
}

.product-content {
  display: inline-block;
  text-align: left;
  width: 75%;
  vertical-align: top;
  position: relative;
  padding: 10px;

  h6 {
    font-size: 20px;
    letter-spacing: 1px;
  }
  .price {
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .total {
    background-color: black;
    border: thin solid @gold;
    border-radius: 5px;
    color: @gold;
    font-size: 16px;
    display: block;
    position: absolute;
    right: 0;
    top: 20px;
    letter-spacing: 1px;
    padding: 5px;
  }
}

/* Remove button */
.remove {
  position: absolute;
  right: 0;
  top: 10px;
  font-size: 12px;
  color: #838383;
  cursor: pointer;
  transition: color 0.4s ease;

  &:hover {
    color: #d16161;
  }
}
</style>
