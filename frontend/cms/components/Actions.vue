<template>
  <div>
    <div class="text-left flow-root">
      <h4 class="actions-title">Mes actions possibles :</h4>
    </div>
    <div
      class="text-left flow-root mt-2 p-2 bg-gray-100 rounded-md flex-row flex-wrap border-2"
    >
      <button class="btn-actions">Consulter le tableau</button>
      <button class="btn-actions">Ajouter un produit</button>
      <button v-for="(btn, index) in buttons" :key="index" class="btn-actions">
        {{ btn.title }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Actions extends Vue {
  @Prop()
  public buttons: Array<any>;
}
</script>

<style scoped lang="less"></style>
