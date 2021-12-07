<template>
  <div class="p-2 pr-4">
    <PageTitles :title="title" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <EditCategoryForm
      :categoryId="categoryId"
      @changeName="updatePageName($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import EditCategoryForm from "./EditCategoryForm.vue";

@Component({
  components: {
    Actions,
    PageTitles,
    EditCategoryForm,
  },
})
export default class CategoryEdit extends Vue {
  //  #region Props and Data
  public categoryId = this.$route.params.categoryId;
  public title = "";
  //  #endregion

  //  #region Links
  public links = [
    {
      title: this.$t("cms.cta.edit_category"),
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
      // code block
    }
  }
  //  #endregion

  //  #region Functions
  public mounted(): void {
    this.updatePageName(this.categoryId);
  }

  public updatePageName(name: string): void {
    this.title = `${this.$t("general.category")} : ${name}`;
  }
  //  #endregion
}
</script>

<style scoped lang="less"></style>
