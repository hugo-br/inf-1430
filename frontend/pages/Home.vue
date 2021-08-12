<template>
  <div class="home">
    <h1>H1</h1>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Home extends Vue {
   mounted() {
  //  const res = await axios.post("http://localhost:8000/register", {
  //    email: "test",
  //  });
 //   console.log(res.data);
  }
}
</script>
