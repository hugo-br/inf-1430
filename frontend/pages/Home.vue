<template>
  <div class="home">
    <h1>H1</h1>
    <example />
  </div>
</template>

<script lang="ts">
import Example from "../components/example.vue";
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Example },
})
export default class Home extends Vue {}
</script>
