<template>
  <div>
    <div class="text-left flow-root">
      <h4 class="actions-title">{{ $t("labels.my_possible_actions") }}</h4>
    </div>
    <div
      class="text-left flex mt-2 p-2 bg-gray-100 rounded-md flex-row flex-wrap border-2 flex-space-between"
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
    this.$emit("action", action);
  }
}
</script>

<style scoped lang="less"></style>
