<template>
  <div class="category-filters">
    <!-- Sort By -->
    <div class="w-1/2 flex items-center pr-4">
      <font-awesome-icon class="filter-icon" :icon="['fa', 'sort']" />
      <select name="cars" class="order-by">
        <option value="volvo">Trier par :</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>

    <!-- Catgeories -->
    <div class="w-1/2 flex items-center">
      <font-awesome-icon class="filter-icon" :icon="['fa', 'filter']" />
      <select name="cars" class="order-by">
        <option value="volvo">Trier par catégorie...</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CategoryFilter extends Vue {}
</script>

<style scoped lang="less">
@border: #172f2e;
@background: #0f171d;
@color: #21aed9;

.category-filters {
  max-width: 900px;
  margin: auto;
  display: flex;
  padding: 10px 15px;
  border-radius: 10px;
  border: solid thin @border;
  position: relative;
  top: -20px;
  background-color: darken(@background, 2%);
  color: darken(@color, 15%);
  z-index: 2;

  .filter-icon {
    font-size: 10px;
    padding-right: 10px;
  }

  .order-by {
    height: 24px;
    width: 95%;
    font-size: 12px;
    font-weight: bold;
    background-color: #080d10;
    padding: 3px 10px 5px 3px;
    border-radius: 4px;
    border: solid thin @border;
  }
}
</style>
