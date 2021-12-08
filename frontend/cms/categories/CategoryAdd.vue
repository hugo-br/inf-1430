<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.categories')" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <AddCategoryForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import AddCategoryForm from "./AddCategoryForm.vue";

@Component({
  components: {
    Actions,
    PageTitles,
    AddCategoryForm,
  },
})
export default class CategoryAdd extends Vue {
  //  #region Links

  public links = [
    {
      title: this.$t("cms.cta.add_category"),
      klass: "disabled",
      action: "",
    },
    {
      title: this.$t("cms.cta.all_category"),
      klass: "success",
      action: "link",
    },
  ];

  public handleClick(params: string): void {
    switch (params) {
      case "link":
        this.$router.push({ name: "list-categories" });
        break;
      default:
        return;
    }
  }

  //  #endregion
}
</script>

<style scoped lang="less"></style>
