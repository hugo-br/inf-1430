<template>
  <div id="boutique">
    <Navigation id="navigation" :class="{ 'is-scrolled': isScrolled }" />
    <main id="boutique-container">
      <router-view
        class="boutique-content"
        @notifications="showNotifications()"
      />
    </main>
    <Footer id="footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Navigation from "./navigation/navigation.vue";
import Footer from "./footer/footer.vue";

@Component({
  components: {
    Navigation,
    Footer,
  },
})
export default class Boutique extends Vue {
  public isScrolled = false;

  mounted() {
    document.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public handleScroll() {
    const height =
      document.querySelector("#navigation") === null
        ? 0
        : document.querySelector("#navigation").clientHeight;
    this.isScrolled = window.pageYOffset > height + 20;
  }
}
</script>

<style lang="less" scoped>
@footer: #0f3e34;

#boutique {
  display: block;
  height: auto;
  position: relative;

  #navigation {
    position: sticky;
    top: 0;
    left: 0;
    height: 65px;
    padding: 10px;
    width: 100%;
    z-index: 999;
    border-bottom: thin #1b0923 solid;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.15), 0 0 0 rgba(255, 255, 255, 0.15);

    &.is-scrolled {
      border-bottom: thin black solid;
      box-shadow: 0 2px 4px rgba(255, 255, 255, 0.15),
        0 4px 12px rgba(255, 255, 255, 0.15);
    }
  }

  #footer {
    background-color: @footer;
  }
}
</style>
