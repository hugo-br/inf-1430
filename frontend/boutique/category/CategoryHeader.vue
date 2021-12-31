<template>
  <div class="category-header">
      <h1 class="font">{{title}}</h1>
      <p>{{description}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CategoryHeader extends Vue {
    @Prop({default:""})
    public title: string;

    @Prop({default:""})
    public description: string;
}
</script>

<style scoped lang="less">
@background: #080d10;
@border: #264d4d;

.category-header{
    background-color: @background;
    min-height: 200px;
    max-width: 1000px;
    width: 80%;
    margin:auto;
    display: block;
    border: solid thin @border;
    border-bottom-color: @background;
    position: relative;
    top: 1px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding-top: 20px;
    
    h1 {
      font-size: 44px;  
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }

    p {
        font-size: 16px;  
    }
}
</style>
