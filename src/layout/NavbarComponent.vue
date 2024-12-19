<template>
  <div
    class="navbar"
    :class="{
      'navbar--scrolled': !topOfPage || $route.name != 'homepage',
    }"
  >
    <div
      class="navbar-layout"
      :class="{
        'navbar-layout--scrolled': !topOfPage || $route.name != 'homepage',
      }"
    ></div>
    <drawer-app v-if="$vuetify.display.mdAndDown"></drawer-app>
    <div
      class="navbar__max-width mt-4 mb-2 hidden-sm-and-down z-9"
      v-if="!$vuetify.display.mdAndDown"
    >
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center h-100 relative z-9">
          <!-- logo -->
          <span
            class="logo-font font-600 cursor-pointer text-white d-flex font-32"
            :class="{
              'text-black': !topOfPage || $route.name != 'homepage',
            }"
            @click="linkHandler('HOME')"
          >
            <span class="text-primary logo-font">{{$t('newDesign.tor')}}</span>
            {{$t('newDesign.isma')}}
          </span>
        </div>
        <!-- links -->
        <transition name="fade" mode="out-in">
          <div
            class="navbar__links py-3 d-flex align-center justify-center w-100 relative z-9"
          >
            <div
              class="d-flex align-center navbar__links__link cursor-pointer mx-3"
              v-for="(link, i) in links"
              :key="i"
              :class="link.active ? 'navbar__links__link--active' : ''"
              @click="linkHandler(link.section)"
            >
              <!-- <img class="mr-2" :src="link.icon" alt="" /> -->
              <span class="font-16 montserrat-medium">{{
                $t(link.title)
              }}</span>
            </div>
            <!-- languages -->
            <languages-component
              class="mx-1"
              :isScrolled="!topOfPage || $route.name != 'homepage'"
              :selectedLanguage="selectedLanguage"
              @switchLanguage="switchLanguage"
            ></languages-component>
          </div>
        </transition>
        <!-- buttons logged -->
        <transition name="fade" mode="out-in">
          <div
            class="navbar__buttons d-flex align-center"
            :key="$route.params.lang"
          >
            <!-- login -->

            <v-btn
              color="white"
              elevation="0"
              class="radius-30 px-2 d-flex justify-center align-center"
              height="44"
              v-if="!userName || loggedOut"
              @click="$router.go()"
            >
              <img
                :src="
                  require('@/assets/images/new-design/icons/login-icon.svg')
                "
              />
              <span
                class="font-16 d-inline-block text-black mx-2 nunito-sans-extra-bold"
                >{{$t('navbar.login')}}</span
              >
            </v-btn>

            <v-btn
              color="primary"
              elevation="0"
              class="radius-30 px-2 mx-3 btn-hover"
              height="44"
            @click="goToLink('https://torisma.com/en/register ')"

            >
              <span
                class="font-16 d-inline-block mx-2 text-black nunito-sans-extra-bold"
                >+ {{ $t("navbar.partnerRegistration") }}</span
              >
            </v-btn>
          </div>
        </transition>
      </div>
    </div>

    <div v-if="registerOpen">
      <div
        data-tf-widget="of4aXjzP"
        data-tf-opacity="100"
        style="width: 100%; height: 100%"
      ></div>
    </div>

  </div>
</template>

<script>
import DrawerApp from "./DrawerComponent.vue";
import LanguagesComponent from "./components/LanguagesComponent.vue";
import { mapGetters } from "vuex";

// images
import logoImage from "@/assets/images/new-design/global/logo-white.svg";
import logoImageDark from "@/assets/images/global/logo.png";
import plusImage from "@/assets/images/icons/plus.svg";
import { createI18n } from "vue-i18n";
export default {
  name: "App",
  setup() {
    // useHead({
    //   script: [
    //     {
    //       id: "hs-script-loader",
    //       src: "//js-eu1.hs-scripts.com/26630621.js",
    //     },
    //   ],
    // });
    const i18n = createI18n();

    return { i18n, logoImage, plusImage, logoImageDark };
  },
  components: {
    DrawerApp,
    LanguagesComponent,
  },
  data: () => ({
    registerOpen: false,
    registerDialog: false,
    loginDialog: false,
    loggedOut: false,
    type: "",
    links: [
      {
        title: "navbar.aboutTorisma",
        section: "ABOUT",
        name: "About Torisma",
        active: false,
      },
      {
        title: "navbar.services",
        section: "SERVICES",
        name: "Services",
        active: false,
      },
      {
        title: "navbar.ourProducts",
        section: "OUR-PRODUCT",
        name: "Our Product",
        active: false,
      },
    ],
    obj: {},
    settingDialog: false,
    topOfPage: true,
  }),
  computed: {
    ...mapGetters(["translate", "userDetails"]),

    blurNav() {
      if (this.$route.name == "Blog" || this.$route.name == "About") {
        return true;
      } else {
        return false;
      }
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
    selectedLanguage() {
      return this.$route.params.lang == "ar" ? "arabic" : "english";
    },
  },
  methods: {
    logoutHandler() {
      this.store.setUser({});
      localStorage.removeItem("userName", "");
      this.loggedOut = true;
    },
    loginHandler() {
      this.loggedOut = false;
      this.loginDialog = true;
      this.type = "login";
    },
    goToLink(link) {
      window.open(link, "_self");
    },
    async switchLanguage(language) {
      this.selectedLanguage = language.title;
      this.$vuetify.rtl = language.value == "ar" ? true : false;
      this.i18n.global.locale = language.value;
      localStorage.setItem("language", language.value);

      // Inside a component or method
      const currentParams = this.$route.params;
      const newParams = { ...currentParams, lang: language.value };

      setTimeout(() => {
        if (JSON.stringify(newParams) !== JSON.stringify(currentParams)) {
          this.$router.push("/" + language.value);
        }
      }, 100);
      await this.$store.dispatch("changeLangHandler");
    },
    linkHandler(section) {
      const top = document.querySelector("#" + section);
      if (top) {
        window.scrollTo({
          top: top.offsetTop - 80,
          left: 0,
          behavior: "smooth",
        });
      } else {
        this.$router.push("/" + this.$route.params.lang);
      }
    },
    registerClicked() {
      this.registerOpen = true;
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

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 99999999;
  transition: 0.3s;
  height: 94px;
  &__max-width {
    max-width: 1920px;
    margin: auto;
    padding: 0px 20px;
  }

  .login-btn {
    width: 190px;
    height: 50px;
  }

  .navbar-layout {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: 0.3s;

    &--scrolled {
      background: #fff;
      border-bottom: 0.5px solid #ffffff81;
    }
  }

  &__links {
    border-radius: 18px;
    span {
      color: white;
      transition: 0.3s;
    }

    &__link {
      transition: 0.3s;
      opacity: 1;

      &:hover {
        opacity: 0.8;
      }
      &--active {
        opacity: 0.8;
      }
    }
  }

  &__logo {
    height: 50px;
    transition: 0.3s;
  }

  @media (max-width: 1260px) {
    height: 60px;
  }
}
.v-menu__content {
  z-index: 999999999 !important;
}
.navbar--scrolled {
  .navbar__links__link {
    span {
      color: black !important;
    }
  }
}
</style>
