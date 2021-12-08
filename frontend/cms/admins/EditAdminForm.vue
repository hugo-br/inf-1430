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
                placeholder="Nom de la catégories"
                v-model="category.name"
              />
            </div>

            <div class="info-form-items">
              <label for="description"
                >{{ $t("labels.description") }}<sup>*</sup></label
              >
              <textarea
                id="description"
                placeholder="Description..."
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
        <button class="btn-submit mt-4" @click="edit()">
          {{ $t("cms.cta.edit_category") }}
        </button>
      </div>
    </div>
    <!-- Row: END -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  getCategory,
  editCategory,
  Category,
} from "../../services/CategoryService";

@Component({
  components: {},
})
export default class EditAdminForm extends Vue {
  @Prop()
  public categoryId: string;

  public category: Category = {
    name: "",
    description: "",
  };

  public isLoaded = false;
  public notFound = false;

  public async fetchProd() {
    getCategory(this.categoryId)
      .then((result: Category) => {
        console.log(result);
        this.$nextTick(function () {
          this.category = result;
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
    this.fetchProd();
  }

  public async edit() {
    editCategory(this.category)
      .then((result: any) => {
        console.log("here then", result);
        alert("done");
      })
      .catch((error: any) => console.error("Error:", error));
  }
}
</script>

<style scoped lang="less"></style>
