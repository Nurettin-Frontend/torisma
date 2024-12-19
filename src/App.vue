<template>
  <v-app
    class="app"
    :key="reCreateApp + changeLang + showApp + $route.params.lang"
  >
    <transition name="fade" mode="out-in">
      <layout-navbar @recreate="recreate"> </layout-navbar>
    </transition>
    <global-snackbar></global-snackbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <layout-footer class="footer"></layout-footer>
    <transition name="fade" mode="out-in">
      <layout-cookies
        v-if="viewCookies && !cookiesAccepted && showApp"
        @close="viewCookies = false"
      ></layout-cookies>
    </transition>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import LayoutNavbar from "@/layout/NavbarComponent";
import LayoutFooter from "@/layout/FooterComponent";
import LayoutCookies from "@/layout/CookiesComponent";
import GlobalSnackbar from "@/components/global/SnackbarComponent";

export default {
  components: {
    LayoutNavbar,
    LayoutFooter,
    LayoutCookies,
    GlobalSnackbar,
  },
  data: () => ({
    showApp: false,
    reCreateApp: false,
    viewCookies: true,
  }),
  computed: {
    ...mapGetters(["changeLang"]),
    cookiesAccepted() {
      return localStorage.getItem("cookies");
    },
  },
  watch: {
    reCreateApp: {
      async handler() {
        await this.fetchTanslate();
      },
    },
    changeLang: {
      async handler() {
        setTimeout(async () => {
          await this.fetchTanslate();
        }, 200);
      },
    },
    $route: {
      async handler() {
        await this.fetchTanslate();
      },
      deep: true,
    },
  },
  methods: {
    recreate() {
      this.reCreateApp = !this.reCreateApp;
    },
    bannerClick() {
      var _hsp = (window._hsp = window._hsp || []);
      _hsp.push(["showBanner"]);
    },
    async fetchTanslate() {
      const html = document.documentElement;
      const body = document.querySelector("body");
      this.showApp = false;
      await this.$store.dispatch("setTranslate", {});
      let queryLang = "";
      let ourLangs = ["en", "ar"];
      let localLang = localStorage.getItem("language");

      if (!this.cookiesAccepted) {
        let res = await axios.post("utilities/init", {
          microsite: 20,
        });
        queryLang = res.data.value.languageCode;
      } else {
        // check what is the lang in param
        if (ourLangs.includes(this.$route.params.lang)) {
          queryLang = this.$route.params.lang;
        } else {
          if (localLang) {
            queryLang = localLang;
          } else {
            queryLang = "en";
          }
        }
      }

      if (queryLang == "ar") {
        this.setSiteLang("ar", true, "rtl", html, body, true);
      } else {
        this.setSiteLang("en", false, "ltr", html, body);
      }
      this.$i18n.locale = queryLang == "ar" ? "ar_" : "en";
      this.showApp = true;
    },
    setSiteLang(lang, rtlBoolean, rtlDir, html, body, appRtl = false) {
      localStorage.setItem("language", lang);
      this.$vuetify.rtl = rtlBoolean;
      html.setAttribute("lang", lang);
      body.setAttribute("dir", rtlDir);

      setTimeout(() => {
        const app = document.querySelector(".app");

        if (appRtl) {
          app.classList.add("app-rtl");
          app.classList.remove("app-ltr");
        } else {
          app.classList.add("app-ltr");
          app.classList.remove("app-rtl");
          app.classList.remove("v-locale--is-rtl");
        }
      }, 200);
    },
  },
  async created() {
    await this.fetchTanslate();
  },
};
</script>

<style lang="scss">
.app {
  overflow-x: hidden;
  background: #f6f6f7 !important;
  .custom-app {
    min-height: 700px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
