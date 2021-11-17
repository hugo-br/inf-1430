<template>
  <div class="w-100">
     <vue-good-table
      :columns="columns"
      :rows="rows"/>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import  {getAllProducts} from "../../services/ProductsService";
import ProductUI from "../../models/productsUI";
import { VueGoodTable } from  'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'


@Component({
  components: {
      VueGoodTable
}
})
export default class ProductsLists extends Vue {
    public columns = [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ];

    public rows = [
        { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ];

}
</script>

<style scoped lang="less"></style>
