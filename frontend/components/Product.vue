<template>
  <div>
    GET
    <button @click="getProduct()">Get Product</button>
  <div v-if='isLoaded === true' >
    <span>{{product.name}}</span>
  </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import getProduct, {Product} from "../services/ProductsService";

@Component
export default class Products extends Vue {
 public isLoaded = false;
 public product:Product = null;

 public mounted() {
   this.$nextTick(() => {
   getProduct("y0DXal")
    .then(result => {
      console.log('(1) Outside result:', result); 
        this.$nextTick(function () {
          this.product= result;
          this.isLoaded = true;
        });
      })
    .catch(error => console.error('(1) Outside error:', error))  
  });
 };

/*
   async onMounted() => {
    getProduct("LkRzJY")
    .then(result => {
      console.log('(1) Outside result:', result); 
        this.$nextTick(function () {
          this.product= result;
          this.isLoaded = true;
        });
      })
    .catch(error => console.error('(1) Outside error:', error))
  }
  */
}
</script>

<style scoped lang="less"></style>
