<template>
  <div id="tasks-menu" class="container mx-auto">
    <!-- Branding Logo -->
    <div class="branding sticky top-0">
      <h1 class="font-black tracking-wide text-white-300 text-2xl">
        {{ $t("titles.main") }}
      </h1>
    </div>

    <!-- Navigation Links -->
    <nav class="task-menu-nav top mt-4">
      <router-link
        v-for="(link, index) in nav"
        :key="'nav-' + index"
        :to="{ path: link.href }"
        class="text-gray-200 font-extrabold text-md menu-nav-links"
        @click="selected = index"
        v-show="link.actif"
      >
        <!-- icon -->
        <span
          v-html="selected == index ? link.selectedIcon : link.icon"
          class="w-8 h-8 p-1 mr-2"
          :class="{ 'mr-4': isEnlarge }"
        ></span>

        <span class="font-medium select-none">{{ link.text }}</span>
      </router-link>
    </nav>

    <nav class="task-menu-nav bottom">
      <!-- Settings -->
      <router-link class="text-gray-400 menu-nav-links" to="/cms/settings">
        <span class="w-8 h-8 p-1 mr-2">
          <svg
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="20"
            height="20"
          >
            <path
              d="M82.4 56.494l-3.9-2.4c.1-1.2.2-2.3.2-3.5v-.5l4.1-2c2.6-1.3 3.7-4.4 2.4-7l-6-12.4c-1.2-2.5-4.5-3.7-7-2.4l-4.1 2c-1.9-1.6-4-2.9-6.2-3.9v-4.6c0-2.9-2.4-5.3-5.3-5.3H42.8c-2.9 0-5.3 2.4-5.3 5.3v4.6c-1.3.6-2.6 1.3-3.8 2.1l-3.9-2.4c-2.4-1.5-5.8-.7-7.2 1.7l-7.3 11.8c-.7 1.2-1 2.6-.6 4 .3 1.4 1.2 2.5 2.4 3.3l3.9 2.4c-.1 1.2-.2 2.3-.2 3.5v.5l-4.1 2c-2.6 1.3-3.7 4.4-2.4 7l6 12.4c1.2 2.5 4.5 3.7 7 2.4l4.1-2c1.9 1.6 4 2.9 6.2 3.9v4.6c0 2.9 2.4 5.3 5.3 5.3h13.8c2.9 0 5.3-2.4 5.3-5.3v-4.6c1.3-.6 2.6-1.3 3.8-2.1l3.9 2.4c.8.5 1.8.8 2.8.8 1.8 0 3.5-.9 4.5-2.5l7.3-11.8c.7-1.2 1-2.6.6-4-.5-1.4-1.3-2.5-2.5-3.3zm-10.8-8.1c.1.8.1 1.5.1 2.3 0 1.2-.1 2.4-.3 3.5-.3 2.1.6 4.2 2.4 5.3l3.4 2.1-5.4 8.8-3.4-2.1c-1.8-1.1-4.1-1-5.8.2-1.4 1-2.9 1.8-4.4 2.5-2 .8-3.3 2.7-3.3 4.8v4H44.6v-4c0-2.1-1.3-4-3.3-4.8-2.3-.9-4.4-2.3-6.2-3.9-1.6-1.4-3.9-1.7-5.8-.8l-3.6 1.7-4.5-9.3 6.8-3.3-.3-2.4c-.1-.8-.1-1.5-.1-2.3 0-1.2.1-2.4.3-3.5.3-2.1-.6-4.2-2.4-5.3l-3.4-2.1 5.4-8.8 3.4 2.1c1.8 1.1 4.1 1 5.8-.2 1.4-1 2.9-1.8 4.4-2.5 2-.8 3.3-2.7 3.3-4.8v-4h10.3v4c0 2.1 1.3 4 3.3 4.8 2.3.9 4.4 2.3 6.2 3.9 1.6 1.4 3.9 1.7 5.8.8l3.6-1.7 4.5 9.3-6.8 3.3z"
            />
            <path
              d="M49.7 35.194c-8.5 0-15.5 6.9-15.5 15.5s6.9 15.5 15.5 15.5 15.5-7 15.5-15.6-6.9-15.4-15.5-15.4zm0 23.9c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"
            />
          </svg>
        </span>

        <span class="font-medium select-none">{{
          $t("cms.menu.settings")
        }}</span>
      </router-link>

      <!-- Language -->
      <div class="inline-block relative w-5/6">
        <select
          class="block w-full appearance-none text-gray-500 text-xs bg-white border border-green-400 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          @change="onChangeLanguage($event)"
        >
          <option value="none">Langue...</option>
          <option v-for="lang in languages" :key="lang" :value="lang">
            {{ lang }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LocalStorageService from "../../services/LocalStoreService";

@Component
export default class NavigationMenu extends Vue {
  public selected = 0;
  public isEnlarge = false;
  public nav = [
    {
      icon:
        '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
      selectedIcon:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>',
      text: this.$t("cms.menu.dashboard"),
      actif: true,
      href: "/cms/",
    },
    {
      icon:
        '<svg fill="currentColor" stroke-width="1" viewBox="0 0 92 92" stroke="currentColor"><path d="M91.8 27.3l-10.7 33.7c-.8 2.4-2.9 4-5.4 4h-41.3c-2.4 0-4.7-1.5-5.5-3.7l-15.8-42.3h-9.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7l16.3 43.3h38l8.5-27h-47.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h52.6c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z" /></svg>',
      selectedIcon:
        '<svg fill="currentColor" viewBox="0 0 92 92"><path fill-rule="evenodd" d="M91.8 27.3l-10.7 33.7c-.8 2.4-2.9 4-5.4 4h-41.3c-2.4 0-4.7-1.5-5.5-3.7l-15.8-42.3h-9.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7l16.3 43.3h38l8.5-27h-47.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h52.6c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z" /></svg>',
      text: this.$t("cms.menu.products"),
      actif: true,
      href: "/cms/products",
    },
    {
      icon:
        '<svg fill="currentColor" stroke-width="1" stroke="currentColor" viewBox="0 0 100 100"><g><path d="M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z"/></g><path d="M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z"/><g><path d="M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z"/></g></svg>',
      selectedIcon:
        '<svg  fill="currentColor" stroke-width="1" stroke="currentColor" viewBox="0 0 100 100"><g><path d="M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z"/></g><path d="M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z"/><g><path d="M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z"/></g></svg>',
      text: this.$t("cms.menu.categories"),
      actif: true,
      href: "/cms/categories",
    },
    {
      icon:
        '<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 92 92"><path d="M46 57.1c14.8 0 26.9-12.1 26.9-27 0-15-12.1-27.1-26.9-27.1s-26.9 12.1-26.9 27c0 15 12.1 27.1 26.9 27.1zm0-46.1c10.4 0 18.9 8.5 18.9 19s-8.5 19-18.9 19-18.9-8.5-18.9-19 8.5-19 18.9-19zm12.5 48.7c-1.3-.4-2.8-.1-3.8.8l-8.7 7.4-8.7-7.4c-1.1-.9-2.5-1.2-3.8-.8-5.6 1.8-33.5 11.4-33.5 25.3 0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4 0-13.9-27.9-23.5-33.5-25.3zm-48.4 21.3c4.4-4.7 15-9.9 23.8-12.9l9.5 8.1c1.5 1.3 3.7 1.3 5.2 0l9.5-8.1c8.8 3.1 19.4 8.3 23.8 12.9h-71.8z" /></svg>',
      selectedIcon:
        '<svg fill="currentColor" viewBox="0 0 92 92"><path d="M46 57.1c14.8 0 26.9-12.1 26.9-27 0-15-12.1-27.1-26.9-27.1s-26.9 12.1-26.9 27c0 15 12.1 27.1 26.9 27.1zm0-46.1c10.4 0 18.9 8.5 18.9 19s-8.5 19-18.9 19-18.9-8.5-18.9-19 8.5-19 18.9-19zm12.5 48.7c-1.3-.4-2.8-.1-3.8.8l-8.7 7.4-8.7-7.4c-1.1-.9-2.5-1.2-3.8-.8-5.6 1.8-33.5 11.4-33.5 25.3 0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4 0-13.9-27.9-23.5-33.5-25.3zm-48.4 21.3c4.4-4.7 15-9.9 23.8-12.9l9.5 8.1c1.5 1.3 3.7 1.3 5.2 0l9.5-8.1c8.8 3.1 19.4 8.3 23.8 12.9h-71.8z" /></svg>',
      text: this.$t("cms.menu.admin"),
      actif: true,
      href: "/cms/admin",
    },
    {
      icon:
        '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>',
      selectedIcon:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>',
      text: this.$t("cms.menu.analytics"),
      actif: false,
      href: "/cms/analytics",
    },
    {
      icon:
        '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
      selectedIcon:
        '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>',
      text: this.$t("cms.menu.schedules"),
      actif: false,
      href: "/cms/schedules",
    },
  ];

  get languages() {
    return Object.keys(this.$i18n.messages);
  }

  // Change language
  public onChangeLanguage(event: any): void {
    if (
      this.$i18n.locale !== event.target.value ||
      event.target.value !== "none"
    ) {
      this.$i18n.locale = event.target.value;
      LocalStorageService.setLanguage(event.target.value);
      //  this.$nextTick(function () {
      window.location.reload();
      //   });
    }
  }
}
</script>

<style scoped lang="less">
@background: #111a21;
@hoverBG: rgba(255, 255, 255, 0.15);
@activeLink: #4ad295;

#tasks-menu {
  background-color: @background;
  padding: 0 10px 0 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  color: white;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #4ad295;
    }
  }

  /* Scrollbar */

  /* width */
  &::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    background: @background;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 9px;
    border: solid 6px transparent;
    background-clip: content-box;
  }

  /* branding */
  .branding {
    height: 50px;
    border-bottom: 1px solid #4ad295;

    h1 {
      line-height: 50px;
      text-align: center;
    }
  }

  .task-menu-nav {
    padding-bottom: 40px;

    &.top {
      flex-grow: 1;
    }

    .menu-nav-links {
      align-items: center;
      cursor: pointer;
      display: flex;
      padding: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 3px;
      border-left: 3px transparent solid;
      transition: 0.4s background-color ease-out;

      &:hover {
        background-color: @hoverBG;
      }

      &.router-link-exact-active {
        border-left-color: @activeLink;
        background-color: @hoverBG;
        color: @activeLink;
      }
    }
  }
}
</style>
