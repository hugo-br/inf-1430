<template>
  <div class="p-2 pr-4">
    <PageTitles :title="$t('general.admins')" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <AddAdminForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import AddAdminForm from "./AddAdminForm.vue";

@Component({
  components: {
    Actions,
    PageTitles,
    AddAdminForm,
  },
})
export default class AdminAdd extends Vue {
  //  #region Links

  public links = [
    {
      title: this.$t("cms.cta.add_admin"),
      klass: "disabled",
      action: "",
    },
    {
      title: this.$t("cms.cta.consult_admins"),
      klass: "success",
      action: "link",
    },
  ];

  public handleClick(params: string): void {
    switch (params) {
      case "link":
        this.$router.push({ name: "list-admin" });
        break;
      default:
        return;
    }
  }

  //  #endregion
}
</script>

<style scoped lang="less"></style>
