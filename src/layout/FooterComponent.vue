<template>
  <div class="" :class="$vuetify.display.smAndDown ? 'text-center' : ''">
    <div
      class="footer-app"
      :class="$route.name == 'homepage' ? '' : 'footer-app--not-home'"
    >
      <div class="max-width">
        <v-row
          class="mt-0"
          :justify="$vuetify.display.smAndDown ? 'center' : 'space-between'"
        >
          <!-- first col -->
          <v-col
            cols="12"
            md="3"
            lg="2"
            :class="$vuetify.display.smAndDown ? '' : 'text-left'"
          >
            <span
              class="logo-font font-600 cursor-pointer text-white d-flex font-32"
            >
              <span class="text-primary logo-font">{{$t('newDesign.tor')}}</span>
              {{$t('newDesign.isma')}}
            </span>
          </v-col>

          <!-- second col -->
          <v-col cols="12" md="3" lg="2">
            <!-- <span
              class="d-block text-white font-16 cursor-pointer"
              :class="$vuetify.display.smAndDown ? 'font-700' : ''"
              @click="$router.go()"
              >{{ $t["footer.torisma"] }}</span
            >

            <router-link :to="'/' + $route.params.lang + '/privacy'">
              <span
                class="d-block text-white font-16 mt-3"
                :class="$vuetify.display.smAndDown ? 'font-700' : ''"
                >{{ $t("footer.privacyPolicy") }}</span
              >
            </router-link> -->

            <!-- <span
              class="d-block lightwhite--text font-16 mt-3 cursor-pointer"
              :class="$vuetify.display.smAndDown ? 'font-700' : ''"
              @click="$router.push('/faq')"
              >{{ $t("FAQ") }}</span
            > -->
          </v-col>

          <!-- third col -->
          <v-col cols="12" md="3" lg="2">
            <!-- <router-link :to="'/' + $route.params.lang + '/terms'">
              <span
                class="d-block text-white font-16 mt-3"
                :class="$vuetify.display.smAndDown ? 'font-700' : ''"
                >{{ $t("footer.termsConditions") }}</span
              >
            </router-link> -->

            <!-- <router-link to="/cookies-policy">
              <span
                class="d-block lightwhite--text font-16 mt-3"
                :class="$vuetify.display.smAndDown ? 'font-700' : ''"
                >{{ $t('footer.cookiesPolicy') }}</span
              >
            </router-link> -->
          </v-col>

          <!-- desc & socials -->
          <v-col cols="12" md="3">
            <div
              class="d-flex align-center w-100"
              :class="
                $vuetify.display.smAndDown
                  ? ' justify-center'
                  : ' justify-space-around'
              "
            >
              <div
                class="cursor-pointer mx-2"
                v-for="(social, i) in socials"
                :key="i"
                @click="goTo(social.link)"
              >
                <img :src="social.icon" :alt="social.link" />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="footer-copy py-5">
      <div class="max-width">
        <span class="text-white">{{
          $t("footer.copyRight1") + yearDate + $t("footer.copyRight2")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import facebookIcon from "@/assets/images/icons/facebook.svg";
import twitterIcon from "@/assets/images/icons/twitter.svg";
import instaIcon from "@/assets/images/icons/insta.svg";
import linkedinIcon from "@/assets/images/icons/linkedin.svg";
import tiktokIcon from "@/assets/images/icons/tiktok.svg";

export default {
  setup() {},
  data: () => ({
    socials: [
      {
        icon: facebookIcon,
        link: "https://www.facebook.com",
      },
      {
        icon: twitterIcon,
        link: "https://twitter.com",
      },
      {
        icon: instaIcon,
        link: "https://instagram.com",
      },
      {
        icon: linkedinIcon,
        link: "https://www.linkedin.com",
      },
      {
        icon: tiktokIcon,
        link: "https://www.tiktok.com",
      },
    ],
  }),
  computed: {
    yearDate(){
      return new Date().getFullYear();
    },
  },
  methods: {
    goTo(link) {
      window.open(link);
    },
    goToSection(section) {
      const top = document.querySelector("#" + section);
      window.scrollTo({
        top: top.offsetTop - 80,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.footer-app {
  padding: 40px 0px;
  background: #313131;
  z-index: 8;

  &--not-home {
    margin-top: 80px;
  }
}
.footer-copy {
  background: #0f1114;
}
</style>
