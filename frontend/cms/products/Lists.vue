<template>
  <div class="w-100 margin-auto">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      max-height="800px"
      styleClass="vgt-table bordered my-class"
      :row-style-class="rowStyleClassFn"
      :isLoading.sync="isLoading"
      :pagination-options="{
        enabled: true,
      }"
    >
      <div slot="table-actions">
        This will show up on the top right of the table.
      </div>
      <div slot="table-actions-bottom">
        This will show up on the bottom of the table.
      </div>
    </vue-good-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getAllProducts } from "../../services/ProductsService";
import ProductUI from "../../models/productsUI";
import { VueGoodTable } from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";

@Component({
  components: {
    VueGoodTable,
  },
})
export default class ProductsLists extends Vue {
  public isLoading = false;
  public columns = [
    {
      label: "Name",
      field: "name",
    },
    {
      label: "Age",
      field: "age",
      type: "number",
    },
    {
      label: "Created On",
      field: "createdAt",
      type: "date",
      dateInputFormat: "yyyy-MM-dd",
      dateOutputFormat: "MMM do yy",
    },
  ];

  public rows = [
    { id: 1, name: "John", age: 20, createdAt: "2011-10-31", score: "lol" },
    { id: 2, name: "Jane", age: 24, createdAt: "2011-10-31" },
    { id: 3, name: "Susan", age: 16, createdAt: "2011-10-30" },
    { id: 4, name: "Chris", age: 55, createdAt: "2011-10-11" },
    { id: 5, name: "Dan", age: 40, createdAt: "2011-10-21" },
    { id: 6, name: "John", age: 20, createdAt: "2011-10-31" },
  ];

  public rowStyleClassFn(row: any): string {
    return row.age > 18 ? "green" : "red";
  }

  /*

  public updateParams(newProps: any): void {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
   public onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        }],
      });
      this.loadItems();
    },
    
    onColumnFilter(params) {
      this.updateParams(params);
      this.loadItems();
    }

    // load items is what brings back the rows from server
    loadItems() {
      getFromServer(this.serverParams).then(response => {
         this.totalRecords = response.totalRecords;
         this.rows = response.rows;
      });
    }
*/
}
</script>

<style scoped lang="less"></style>
