<template>
  <div>
    <div class="footer">
      <div class="footer-col logo">
        <router-link :to="{ name: 'all-products' }">
          <font-awesome-icon
            :icon="['fa', 'crown']"
            class="inline mr-3 logo-icon"
          />
          <h1 class="inline font">Rubydor inc.</h1>
        </router-link>
      </div>
      <div class="footer-col">
        <h3>Catégories</h3>
        <CategoriesLinks />
      </div>

      <div class="footer-col">
        <h3>À Propos</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoriesLinks from "../components/CategoriesLinks.vue";

@Component({
  components: { CategoriesLinks },
})
export default class Footer extends Vue {}
</script>

<style scoped lang="less">
.footer {
  display: flex;
  max-width: 1500px;
  margin: auto;
  min-height: 100px;
  padding: 20px;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  color: whitesmoke;

  .footer-col {
    padding-left: 20px;
    width: calc(33% - 20px);
    text-align: left;

    &.logo {
      font-size: 18px;
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
      letter-spacing: 1px;
    }
  }
}
</style>
