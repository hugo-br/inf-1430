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
              <label for="firstName">
                {{ $t("labels.first_name") }}<sup>*</sup></label
              >
              <input
                id="firstName"
                type="text"
                :placeholder="$t('labels.first_name') + '...'"
                v-model="admin.firstName"
              />
            </div>

            <div class="info-form-items half">
              <label for="lastName">
                {{ $t("labels.last_name") }}<sup>*</sup></label
              >
              <input
                id="lastName"
                type="text"
                :placeholder="$t('labels.last_name') + '...'"
                v-model="admin.lastName"
              />
            </div>

            <div class="info-form-items">
              <label for="email"> {{ $t("labels.email") }}<sup>*</sup> </label>
              <input
                id="email"
                type="text"
                :placeholder="$t('labels.email') + '...'"
                v-model="admin.email"
              />
            </div>

            <div class="info-form-items">
              <label for="password">
                {{ $t("labels.password") }}<sup>*</sup>
              </label>
              <input
                id="password"
                type="password"
                :placeholder="$t('labels.password') + '...'"
                v-model="admin.password"
              />
            </div>

            <div class="info-form-items">
              <label for="passwordConfirmation">
                {{ $t("labels.password_confirmation") }}<sup>*</sup>
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                :placeholder="$t('labels.password_confirmation') + '...'"
                v-model="admin.passwordConfirmation"
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
        <div
          v-if="errors.length > 0"
          class="text-red-800 text-sm border-red-800"
        >
          <h6>{{ $t("errors.errors_found") }} :</h6>
          <ul>
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        <button class="btn-submit mt-4" @click="add()">
          {{ $t("cms.cta.add_admin") }}
        </button>
      </div>
    </div>
    <!-- Row: END -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { registerAdmin } from "../../services/AdminService";

@Component({
  components: {},
})
export default class AddAdminForm extends Vue {
  //  #region Props & Data
  public admin = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  public errors: string[] = [];
  //  #endregion

  //  #region Functions
  public resetForm(): void {
    this.admin = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  public async add(): Promise<void> {
    this.errors = [];
    registerAdmin(this.admin)
      .then((result: any) => {
        console.log(result);
        if (result.confirm) {
          this.resetForm();
        } else {
          // Show the errors code
          result.errorMsg.forEach((errorCode: string) => {
            const err = `errors.${errorCode}`;
            this.errors.push(String(this.$t(err)));
          });
        }
      })
      .catch((error: any) => console.error("Error:", error));
  }
  //  #endregion
}
</script>

<style scoped lang="less"></style>
