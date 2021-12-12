<template>
  <div class="p-2 pr-4">
    <PageTitles :title="title" />
    <Actions :buttons="links" @action="handleClick($event)" />
    <EditAdminForm :adminId="adminId" @changeName="updatePageName($event)" />

    <CMSModal v-show="isModalVisible" @close="closeModal()">
      <template v-slot:header> Supprimer cette catégorie </template>

      <template v-slot:body>
        <p>
          Êtes-vous certain de vouloir supprimer la catégorie :
          {{ adminId }} ?
        </p>
      </template>

      <template v-slot:footer>
        <div class="flex flex-row flex-wrap justify-center">
          <button
            @click="confirmDelete()"
            class="btn-actions danger w-40 align-center"
          >
            Supprimer
          </button>
          <button
            @click="closeModal()"
            class="btn-actions gray w-40 align-center"
          >
            Cancel
          </button>
        </div>
      </template>
    </CMSModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Actions from "../components/Actions.vue";
import PageTitles from "../components/PageTitles.vue";
import CMSModal from "../components/Modal.vue";
import { deleteAdmin } from "../../services/AdminService";
import EditAdminForm from "./AdminEditForm.vue";

@Component({
  components: {
    Actions,
    PageTitles,
    EditAdminForm,
    CMSModal,
  },
})
export default class CategoryEdit extends Vue {
  //  #region Props and Data
  public adminId = this.$route.params.adminId;
  public title = "";
  public isModalVisible = false;
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
      action: "list",
    },
    {
      title: this.$t("cms.cta.delete_category"),
      klass: "danger ml-auto",
      action: "delete",
    },
  ];

  public handleClick(params: string): void {
    switch (params) {
      case "list":
        this.$router.push({ name: "list-admin" });
        break;
      case "delete":
        this.isModalVisible = !this.isModalVisible;
        break;
      default:
      // code block
    }
  }
  //  #endregion

  //  #region Functions
  public mounted(): void {
    this.updatePageName(this.adminId);
  }

  public updatePageName(name: string): void {
    this.title = `${this.$t("general.admins")} : ${name}`;
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }

  public confirmDelete(): void {
    deleteAdmin(this.adminId)
      .then((result: any) => {
        console.log("here then", result);
        this.isModalVisible = false;
       // this.handleClick("list");
      })
      .catch((error: any) => console.error("Error:", error));
  }
  //  #endregion
}
</script>

<style scoped lang="less"></style>
