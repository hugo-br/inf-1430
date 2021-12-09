<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.admins')" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <AdminList class="mt-10" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminList from "./AdminList.vue";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";

@Component({
  components: {
    AdminList,
    Actions,
    PageTitles,
  },
})
export default class AdminPage extends Vue {
  //  #region Links
  public links = [
    {
      title: this.$t("cms.cta.consult_admins"),
      klass: "disabled",
      action: "",
    },
    {
      title: this.$t("cms.cta.add_admin"),
      klass: "success",
      action: "add",
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
      case "add":
        this.$router.push({ path: "add-admin" });
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
