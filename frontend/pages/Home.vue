<template>
  <div class="home">
    <h1>H1</h1>
    <example /><br />
    <signin />
  </div>
</template>

<script lang="ts">
import Example from "../components/example.vue";
import signin from "../components/login.vue";
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Example, signin },
})
export default class Home extends Vue {}
</script>
