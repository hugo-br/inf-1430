<template>
  <div>
    <div class="text-left flow-root">
      <h4 class="actions-title">Mes actions possibles :</h4>
    </div>
    <div
      class="text-left flow-root mt-2 p-2 bg-gray-100 rounded-md flex-row flex-wrap border-2"
    >
      <button
        v-for="(btn, index) in buttons"
        :key="index"
        class="btn-actions"
        :class="btn.klass"
        @click="emitAction(btn.action)"
      >
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

  public emitAction(action: string): void {
    console.log("clikc");
    this.$emit("action", action);
  }
}
</script>

<style scoped lang="less"></style>
