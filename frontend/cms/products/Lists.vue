<template>
  <div class="w-100 margin-auto">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      max-height="80vh"
      styleClass="vgt-table bordered info-table"
      :isLoading.sync="isLoading"
      :pagination-options="{
        enabled: true,
        perPage: 20,
        perPageDropdownEnabled: true,
        perPageDropdown: [20, 50, 100],
        setCurrentPage: 1,
        nextLabel: `${$t('labels.next')}`,
        prevLabel: `${$t('labels.prev')}`,
        rowsPerPageLabel: `${$t('labels.rows_per_page')}`,
        ofLabel: `${$t('labels.of')}`,
        pageLabel: `${$t('labels.pages')}`,
        allLabel: `${$t('labels.all')}`,
        jumpFirstOrLast: false,
      }"
      @on-page-change="onPageChange"
      @on-sort-change="onSortChange"
      @on-column-filter="onColumnFilter"
      @on-per-page-change="onPerPageChange"
    >
      <!-- <div slot="table-actions">
        This will show up on the top right of the table.
      </div>
      -->
      <!--
      <div slot="table-actions-bottom">
        This will show up on the bottom of the table.
      </div> 
      -->

      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'categories'">
          {{ props.row.categories.length }}
        </span>
        <span v-else-if="props.column.field == 'action'">
          <router-link
            class="btn-table-links"
            :to="{ path: '/cms/products/manage/' + props.row.productId }"
            :data-id="props.row.productId"
          >
            {{ $t("buttons.manage") }}
          </router-link>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script scoped lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getAllProducts, Product } from "../../services/ProductsService";
import { VueGoodTable } from "vue-good-table";

@Component({
  components: {
    VueGoodTable,
  },
})
export default class ProductsLists extends Vue {
  public isLoading = true;
  public columns = [
    {
      label: this.$t("labels.name"),
      field: "name",
      sortable: true,
      thClass: "table-header-name",
      globalSearchDisabled: true,
      width: "40%",
    },
    {
      label: this.$t("labels.price"),
      field: "price",
      type: "number",
      sortable: true,
      formatFn: this.formatPrice,
      width: "10%",
    },
    {
      label: this.$t("labels.quantity"),
      field: "quantity",
      type: "number",
      sortable: true,
      firstSortType: "asc",
      width: "10%",
    },
    {
      label: "Categories",
      field: "categories",
      html: true,
      sortable: true,
      thClass: "text-center",
      tdClass: "text-center",
    },
    {
      label: this.$t("labels.isPublished"),
      field: "isPublished",
      type: "boolean",
      sortable: true,
      firstSortType: "desc",
      // tdClass: this.isPublished,
      width: "10%",
      thClass: "text-center",
      tdClass: "text-center",
    },
    {
      label: "Action",
      field: "action",
      html: true,
      sortable: false,
      width: "15%",
      thClass: "text-center",
      tdClass: "text-center",
    },
  ];

  public rows: Array<Partial<Product>> = [];

  public totalRecords: number = 0;

  public serverParams = {
    columnFilters: {},
    sort: [
      {
        field: "",
        type: "",
      },
    ],
    page: 1,
    perPage: 10,
  };

  public mounted(): void {
    this.loadItems();
  }

  public onPageChange(params: any): void {
    this.updateParams({ page: params.currentPage });
    // this.loadItems();
  }

  public updateParams(newProps: any): void {
    this.serverParams = Object.assign({}, this.serverParams, newProps);
  }

  public onPerPageChange(params: any): void {
    //  this.updateParams({perPage: params.currentPerPage});
    //  this.loadItems();
  }

  public onSortChange(params: any): void {
    /*   this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        }],
      });
      this.loadItems();
      */
  }

  public formatPrice(value: string): string {
    return value + " $";
  }

  public isPublished(value: unknown): string {
    return value === true ? "green" : "red";
  }

  public onColumnFilter(params: any): void {
    this.updateParams(params);
    this.loadItems();
  }

  public loadItems(): void {
    getAllProducts()
      .then((result: Array<Product>) => {
        this.$nextTick(function () {
          this.rows = result;
          this.totalRecords = result.length;
          this.isLoading = false;
        });
      })
      .catch((error: any) => console.error("Errors : ", error));
  }
}
</script>

<style scoped lang="less"></style>
