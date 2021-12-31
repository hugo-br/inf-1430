<template>
  <div id="boutique">
    <Navigation id="navigation" :class="{ 'is-scrolled' : isScrolled }" />
    <main id="boutique-container">
      <router-view class="boutique-content" @notifications="showNotifications()" />
    </main>
    <Footer id="footer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import debounce from 'lodash/debounce';
import Navigation from "./navigation/navigation.vue";
import Footer from "./footer/footer.vue";


@Component({
  components: {
    Navigation,
    Footer
  },
})
export default class Boutique extends Vue {
  public isScrolled = false;

mounted () {
  //  const handleDebouncedScroll = debounce(this.handleScroll, 100);
   // window.addEventListener('scroll', this.handleScroll);
  };
  destroyed () {
 //   window.removeEventListener('scroll', this.handleScroll);
  };
    

  public handleScroll() {
      // Any code to be executed when the window is scrolled
   //   this.isScrolled = (window.scrollY > 250);
    //  console.log('calling handleScroll');
  }

}
</script>

<style lang="less" scoped>
  #boutique {
    display: block;
    height: auto;
    position: relative;

    #navigation {
      position: sticky;
      top: 0;
      left: 0;
      height: 80px;
      width: 100%;
      z-index: 999;
      &.is-scrolled {
        height: 50px;
      }
    }
  }
</style>
