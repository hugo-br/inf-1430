<template>
  <div class="cms-form-container">
    <!-- Row: START -->
    <div class="row-with-info">
      <!-- Left Section -->
      <div class="left-info">
        <span class="info-title">
          {{ $t("general.generals") }}
        </span>
        <span class="info-explication">
          {{ $t("cms.labels.category_info") }}
        </span>
      </div>

      <!-- Right Section -->
      <div class="right-info">
        <div>
          <div class="info-form-row">
            <div class="info-form-items half">
              <label for="first_name"> {{ $t("labels.first_name") }}</label>
              <input
                id="first_name"
                type="text"
                placeholder="Nom de la catégories"
                v-model="admin.firstName"
              />
            </div>

            <div class="info-form-items half">
              <label for="last_name"> {{ $t("labels.last_name") }}</label>
              <input
                id="last_name"
                type="text"
                placeholder="Nom de la catégories"
                v-model="admin.firstName"
              />
            </div>

            <div class="info-form-items">
              <label for="email"> {{ $t("labels.email") }}</label>
              <input
                id="email"
                type="text"
                :placeholder="$t('labels.email')"
                v-model="admin.email"
              />
            </div>

            <div class="info-form-items">
              <label for="updatePassword"> {{ $t("labels.update_password") }}</label>
              <input
                id="updatePassword"
                type="password"
                :placeholder="$t('labels.password')"
                v-model="updatedPassword"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Row: END -->

    <!-- Row: START -->
    <div class="row-with-info">
      <!-- Left Section -->
      <div class="left-info">
        <span class="info-title">
          {{ $t("general.revision") }}
        </span>
        <span class="info-explication">
          {{ $t("cms.labels.review_category") }}
        </span>
      </div>

      <!-- Right Section -->
      <div class="right-info">
        <button class="btn-submit mt-4" @click="edit()">
          {{ $t("cms.cta.edit_admin") }}
        </button>
      </div>
    </div>
    <!-- Row: END -->
  </div>
</template>

<script lang="ts">
import { ApiResult } from "@root/frontend/services/ApiAdmin";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Admin, getOneAdmin } from "../../services/AdminService";

@Component({
  components: {},
})
export default class EditAdminForm extends Vue {
  @Prop()
  public adminId: string;

  public admin: Partial<Admin> = {
    firstName: "",
    lastName: "",
    email: "",
  };

  public updatedPassword = "";
  public isLoaded = false;
  public notFound = false;

  public async fetchAdmin() {
    console.log("here");
    getOneAdmin(this.adminId)
      .then((result: Partial<ApiResult>) => {
        this.$nextTick(function () {
          this.admin = result.admin;
          this.updatedPassword = "";
          this.isLoaded = true;
        });
      })
      .catch((error: any) => {
        console.error("Error:", error);
        this.isLoaded = true;
        this.notFound = true;
      });
  }

  public mounted(): void {
    this.fetchAdmin();
  }

  /*
  public async edit() {
    editCategory(this.category)
      .then((result: any) => {
        console.log("here then", result);
        alert("done");
      })
      .catch((error: any) => console.error("Error:", error));
  }
  */
}
</script>

<style scoped lang="less"></style>
