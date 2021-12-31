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
        perPageDropdown: [10, 20, 50, 100],
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
          {{ Number(props.row.categories.length) }}
        </span>
        <span v-else-if="props.column.field == 'isPublished'">
          <button
            v-if="props.row.isPublished"
            class="btn-table-links info border-white"
            @click="publish(props.row.productId, false)"
          >
            {{ $t("cms.buttons.published") }}
          </button>
          <button
            v-if="!props.row.isPublished"
            class="btn-table-links warning border-white"
            @click="publish(props.row.productId, true)"
          >
            {{ $t("cms.buttons.unpublished") }}
          </button>
        </span>
        <span v-else-if="props.column.field == 'action'">
          <router-link
            class="btn-table-links"
            :to="{ path: '/cms/products/edit/' + props.row.productId }"
            :data-id="props.row.productId"
          >
            {{ $t("cms.buttons.manage") }}
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
import { Component, Vue } from "vue-property-decorator";
import {
  getAllProducts,
  publishedProduct,
  Product,
} from "../../services/ProductsService";
import { VueGoodTable } from "vue-good-table";

@Component({
  components: {
    VueGoodTable,
  },
})
export default class ProductsLists extends Vue {
  public isLoading = true;

  //  #region Columns
  public columns = [
    {
      label: this.$t("labels.name"),
      field: "name",
      sortable: true,
      thClass: "table-header-name",
      globalSearchDisabled: true,
      width: "20%",
    },
    {
      label: this.$t("labels.price"),
      field: "price",
      type: "number",
      sortable: true,
      formatFn: this.formatPrice,
    },
    {
      label: this.$t("labels.quantity"),
      field: "quantity",
      type: "number",
      sortable: true,
      firstSortType: "asc",
    },
    {
      label: "Categories",
      field: "categories",
      html: true,
      sortable: true,
      type: "number",
      thClass: "vgt-center-align",
      tdClass: "vgt-center-align",
    },
    {
      label: "Status",
      field: "isPublished",
      type: "boolean",
      sortable: true,
      firstSortType: "desc",
      width: "20%",
      thClass: "vgt-center-align",
      tdClass: "vgt-center-align",
    },
    {
      label: "Action",
      field: "action",
      html: true,
      sortable: false,
      width: "20%",
      thClass: "vgt-center-align",
      tdClass: "vgt-center-align",
    },
  ];

  //  #endregion

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
    this.$parent.$on("refresh", this.refresh);
  }

  public refresh(): void {
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
    /*    this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        }],
      });
      this.loadItems(); */
  }

  public formatPrice(value: string): string {
    return value + " $";
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

  public publish(productId: string, publish: boolean): void {
    const idx = this.rows.findIndex((prod) => prod.productId === productId);
    publishedProduct(productId, publish)
      .then((result: any) => {
        this.rows[idx].isPublished = publish;
      })
      .catch((error: any) => console.error("Error:", error));
  }
}
</script>

<style scoped lang="less">
.text-center {
  text-align: center !important;
}
</style>
