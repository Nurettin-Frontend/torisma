<template>
  <div class="hero-section custom-zoom">
    <div class="hero-section__content">
      <img
        class="hero-section__bottom-cave"
        :src="require('@/assets/images/new-design/hero/cave.svg')"
      />
      <img
        class="hero-section__top-cave"
        :src="require('@/assets/images/new-design/hero/cave-top.svg')"
      />
      <img
        class="hero-section__top-right"
        :src="require('@/assets/images/new-design/hero/top-right.png')"
      />
      <img
        class="hero-section__bottom-left"
        :src="require('@/assets/images/new-design/hero/bottom-left.png')"
      />
      <img
        class="hero-section__bottom-center"
        :src="require('@/assets/images/new-design/hero/bottom-center.png')"
      />
      <img
        class="hero-section__bottom-right"
        :src="require('@/assets/images/new-design/hero/bottom-right.png')"
      />
      <img
        class="hero-section__main-img"
        :src="require('@/assets/images/new-design/hero/hero-img.jpg')"
        alt="hero-img"
      />
      <div class="max-width h-100">
        <v-row
          align="center"
          :class="$vuetify.display.smAndDown ? 'col-reverse' : ''"
        >
          <v-col cols="12" md="8">
            <div class="hero-section__text z-9 relative">
              <h1
                class="font-60 font-700 d-block nunito-extra-Bold text-white"
                :class="$vuetify.locale.isRtl ? 'pl-5' : 'pr-5'"
                v-html="$t('header.title')"
              ></h1>
              <p class="font-16 mt-4 text-white hero-text">
                {{ $t("header.subTitle") }}
              </p>

              <div>
                <v-btn
                  color="primary"
                  elevation="0"
                  class="radius-30 mt-5 btn-hover"
                  :class="$vuetify.display.mdAndDown ? '  mt-3' : ' '"
                  height="50px"
                  @click="goToLink('https://torisma.com/en/register ')"
                >
                  <span
                    class="font-16 d-inline-block mb-1 nunito-sans-Bold text-black font-600"
                    >{{ $t("navbar.partnerRegistration") }}</span
                  >
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data: () => ({
    embedDialog: false,
  }),
  computed: {},
  methods: {
    goToLink(link) {
      window.open(link, "_self");
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.hero-section {
  height: 800px;
  position: relative;

  &__main-img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0px 0px ;
  }
  position: relative;
  background-color: #0f1114;
  background-size: cover;
  overflow: hidden;

  &__content {
    height: 100%;
    margin: auto;
    position: relative;
    padding-top: 60px;
  }
  &__top-left {
    position: absolute;
    top: 0px;
    z-index: 5;
    left: 0px;
    opacity: 1;
    transform: scale(1.5);
  }
  &__top-right {
    position: absolute;
    top: 0px;
    z-index: 5;
    right: 0px;
    opacity: 0.3;
  }
  &__bottom-left {
    position: absolute;
    bottom: 0px;
    z-index: 5;
    left: 0px;
    transform: scale(1.3);
    opacity: 1
  }
  &__bottom-center {
    position: absolute;
    bottom: -10%;
    z-index: 5;
    left: 48%;
    transform: translateX(-50%);
    width: 700px;
    opacity: 0;
  }
  &__bottom-cave {
    position: absolute;
    bottom: 0px;
    z-index: 5;
    width: 100%;
    opacity: 0;
  }
  &__top-cave {
    position: absolute;
    top: 0px;
    z-index: 6;
    width: 100%;
    opacity: 0.3;
  }
  &__bottom-right {
    position: absolute;
    bottom: 0px;
    z-index: 10;
    right: 0px;
    opacity: 0;
  }

  &__text {
    margin-top: 130px;
    margin-bottom: 200px;
  }

  @media (max-width: 960px) {
    height: auto !important;
    &__text {
      margin-top: 80px;
      margin-bottom: 130px;
    }

    .hero-section__main {
      z-index: 0;
    }
  }
}

.hero-text {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
</style>
