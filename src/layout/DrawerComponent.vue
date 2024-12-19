<template>
  <div class="drawer">
    <v-app-bar
      prominent
      height="80px"
      class="w-100 d-flex align-center justify-space-between drawer-navbar px-4 py-2"
      elevation="0"
    >
      <div @click="linkHandler('HOME')">
        <span
          class="logo-font font-600 cursor-pointer text-white d-flex font-60"
          :class="{
            'text-black': !topOfPage || $route.name != 'homepage',
          }"
        >
          <span class="text-primary logo-font">{{$t('newDesign.tor')}}</span>
          {{$t('newDesign.isma')}}
        </span>
      </div>
      <transition name="fade" mode="out-in">
        <v-app-bar-nav-icon
          style="z-index: 999999"
          :color="topOfPage ? 'white': 'black'"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </transition>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :right="$i18n.locale != 'en'"
      :left="$i18n.locale == 'en'"
      height="100vh"
      width="300"
    >
      <v-list class="px-3" nav dense>
        <v-list-item-group>
          <div class="d-flex justify-space-between my-2 cursor-pointer">
            <span
              class="logo-font font-600 cursor-pointer text-black d-flex font-60 transition-03"
              @click="linkHandler('HOME')"
            >
              <span class="text-primary logo-font">{{$t('newDesign.tor')}}</span>
              {{$t('newDesign.isma')}}
            </span>
            <img @click="drawer = !drawer" :src="closeIcon" alt="close" />
          </div>

          <!-- becaome provider -->
          <base-button
            class="w-100 mt-5 mb-2"
            width="100%"
            elevation="0"
            height="40px"
            :title="$t('navbar.partnerRegistration')"
            @click="goToLink('https://torisma.com/en/register ')"
          ></base-button>

          <!-- logout  -->
          <base-button
            class="w-100 mt-4"
            width="100%"
            elevation="0"
            height="40px"
            :outlined="true"
            title="Logout"
            @click="logoutHandler"
            v-if="userName && !loggedOut"
          ></base-button>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            @click="linkHandler(link.section)"
          >
            <span class="font-16 black--text">{{ $t(link.title) }}</span>
          </v-list-item>
          <!-- list group -->

          <languages-component
            @switchLanguage="switchLanguage"
            :selectedLanguage="selectedLanguage"
          ></languages-component>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LanguagesComponent from "./components/LanguagesComponent.vue";

// images
import logoImage from "@/assets/images/global/logo.png";
import closeIcon from "@/assets/images/icons/close.svg";
export default {
  name: "App",
  components: { LanguagesComponent },
  setup() {
    return {
      logoImage,
      closeIcon,
    };
  },
  data: () => ({
    drawer: false,
    settingDialog: false,
    registerDialog: false,
    group: "",

    allLinks: [
      {
        title: "navbar.home",
        section: "HOME",
        name: "Home",
        active: false,
      },
      {
        title: "navbar.aboutTorisma",
        section: "ABOUT",
        name: "About Torisma",
        active: false,
      },
      {
        title: "navbar.ourProducts",
        section: "OUR-PRODUCT",
        name: "Our Product",
        active: false,
      },
      // {
      //   title: vm.$t("Partners"),
      //   section: "PARTNERS",
      //   name: "Partners",
      //   active: false,
      // },
      {
        title: "navbar.services",
        section: "SERVICES",
        name: "Services",
        active: false,
      },
    ],
    languages: [
      {
        title: "english",
        value: "en",
        img: "/images/global/en-lang.svg",
      },
      {
        title: "arabic",
        value: "ar",
        img: "/images/global/ar-lang.svg",
      },
    ],
    loginDialog: false,
    loggedOut: false,
    topOfPage: true,

    selectedLanguage:
      localStorage.getItem("language") == "ar" ? "arabic" : "english",
  }),
  computed: {
    ...mapGetters(["translate", "userDetails"]),
    links() {
      return this.allLinks;
    },
    userName() {
      if (
        localStorage.getItem("userName") ||
        (this.userDetails && this.userDetails.username)
      ) {
        return this.userDetails.agencyName || localStorage.getItem("userName");
      } else {
        return false;
      }
    },
  },
  methods: {
    logoutHandler() {
      this.store.setUser({});
      localStorage.setItem("userName", "");
      this.loggedOut = true;
    },
    loginHandler() {
      this.loggedOut = false;
      this.loginDialog = true;
    },
    goToLink(link) {
      window.open(link, "_self");
    },
    linkHandler(section) {
      const top = document.querySelector("#" + section);
      window.scrollTo({
        top: top.offsetTop - 80,
        left: 0,
        behavior: "smooth",
      });
    },
    async switchLanguage(language) {
      this.selectedLanguage = language.title;
      this.$vuetify.rtl = language.value == "ar" ? true : false;
      this.$i18n.locale = language.value;
      localStorage.setItem("language", language.value);
      // Inside a component or method
      const currentParams = this.$route.params;
      const newParams = { ...currentParams, lang: language.value };

      setTimeout(() => {
        if (JSON.stringify(newParams) !== JSON.stringify(currentParams)) {
          this.$router.push({
            name: this.$route.name,
            params: { lang: language.value },
          });
        }
      }, 100);
      await this.$store.dispatch("changeLangHandler");
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
.v-toolbar__content {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100%;
}
.v-navigation-drawer {
  height: 100vh !important;
  z-index: 9999999999999999999999 !important;
}
.drawer {
  z-index: 9999999999999999999 !important;
  position: relative;

  .drawer-navbar {
    background: transparent !important;
    transition: 0.3s;

    &--scrolled {
      background: rgba(255, 255, 255, 0.6) !important;
    }
  }
  .logo {
    width: 110px !important;
  }
  .v-list {
    background: transparent !important;
    i {
      color: white;
    }
  }
  .v-list-group__header {
    padding-left: 8px !important;
    i {
      color: white !important;
    }
  }
}
</style>
