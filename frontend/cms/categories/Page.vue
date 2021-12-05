<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.categories')" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <CategoriesList class="mt-10" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoriesList from "./List.vue";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";

@Component({
  components: {
    CategoriesList,
    Actions,
    PageTitles,
  },
})
export default class CategoriesPage extends Vue {
  //  #region Links
  public links = [
    {
      title: "Consulter le tableau",
      klass: "disabled",
      action: "test",
    },
    {
      title: this.$t("cms.cta.add_category"),
      klass: "success",
      action: "addProduct",
    },
    {
      title: this.$t("cms.cta.refresh_page"),
      klass: "info ml-auto",
      action: "refresh",
    },
  ];

  // Add action
  public handleClick(params: string): void {
    switch (params) {
      case "addProduct":
        this.$router.push({ path: "add-products" });
        break;
      case "refresh":
        this.$emit("refresh");
        break;
      default:
      // code block
    }
  }
  //  #endregion
}
</script>

<style scoped lang="less"></style>
