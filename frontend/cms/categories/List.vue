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

      <!-- Number of products in the category -->
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'categories'">
          {{ props.row.products.length }}
        </span>
        <!-- Actions Buttons -->
        <span v-else-if="props.column.field == 'action'">
          <router-link
            class="btn-table-links"
            :to="{ path: '/cms/categories/edit/' + props.row.categoryId }"
            :data-id="props.row.productId"
          >
            {{ $t("buttons.manage") }}
          </router-link>
        </span>
        <!-- Attribute Columns -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script scoped lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAllCategories, Category } from "../../services/CategoryService";
import { VueGoodTable } from "vue-good-table";

@Component({
  components: {
    VueGoodTable,
  },
})
export default class CategoriesList extends Vue {
  public isLoading = true;

  //  #region Columns
  public columns = [
    {
      label: this.$t("labels.name"),
      field: "name",
      sortable: true,
      thClass: "table-header-name",
      globalSearchDisabled: true,
    },

    {
      label: this.$t("labels.number_of_products"),
      field: "categories",
      html: true,
      sortable: true,
      thClass: "text-center",
      tdClass: "text-center",
    },
    {
      label: "Action",
      field: "action",
      html: true,
      sortable: false,
      thClass: "text-center",
      tdClass: "text-center",
    },
  ];

  //  #endregion

  public rows: Array<Partial<Category>> = [];

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
    getAllCategories()
      .then((result: Array<Category>) => {
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
