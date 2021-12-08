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
            <div class="info-form-items">
              <label for="name"> {{ $t("labels.name") }}<sup>*</sup></label>
              <input
                id="name"
                type="text"
                :placeholder="$t('labels.name') + '...'"
                v-model="category.name"
              />
            </div>

            <div class="info-form-items">
              <label for="description">
                {{ $t("labels.description") }}<sup>*</sup>
              </label>
              <textarea
                id="description"
                :placeholder="$t('labels.description') + '...'"
                v-model="category.description"
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
        <button class="btn-submit mt-4" @click="add()">
          {{ $t("cms.cta.add_category") }}
        </button>
      </div>
    </div>
    <!-- Row: END -->
  </div>
</template>

<script lang="ts">
import { addCategory } from "../../services/CategoryService";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AddAdminForm extends Vue {
  //  #region Props & Data
  public category = {
    name: "",
    description: "",
  };
  //  #endregion

  //  #region Functions
  public async add() {
    const category = {
      name: this.category.name,
      description: this.category.description,
    };

    addCategory(category)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => console.error("(1) Outside error:", error));
  }
  //  #endregion
}
</script>

<style scoped lang="less"></style>
