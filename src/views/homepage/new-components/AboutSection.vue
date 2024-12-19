<template>
  <div class="about-section w-100 custom-zoom">
    <div class="max-width">
      <v-row align="center">
        <v-col cols="12" md="6" class="about-section__imgs">
          <v-row align="end" justify="center">
            <v-col cols="6" class="text-right">
              <img
                :src="require('@/assets/images/new-design/about/top-left.jpg')"
                alt="about-section__top-left"
                width="180"
                height="80"
                class="mb-4"
              />

              <img
                :src="
                  require('@/assets/images/new-design/about/center-left.jpg')
                "
                alt="about-section__center-left"
                width="270"
                height="180"
              />
            </v-col>

            <v-col cols="6">
              <img
                :src="require('@/assets/images/new-design/about/top-right.jpg')"
                alt="about-section__imgs__top-right"
                :class="$vuetify.display.smAndDown ? 'w-100': ''"
                width="300"
                height="400"
              />
            </v-col>
          </v-row>

          <v-row align="start">
            <v-col cols="4" class="d-flex justify-end">
              <img
                :src="
                  require('@/assets/images/new-design/about/bottom-left.jpg')
                "
                width="82"
                height="82"
                alt="about-section__bottom-left"
              />
            </v-col>
            <v-col cols="8">
              <img
                :src="
                  require('@/assets/images/new-design/about/bottom-right.jpg')
                "
                class="w-100"
                alt="about-section__bottom-right"
                height="200"
              />
            </v-col>
          </v-row>
          <img
            :src="require('@/assets/images/new-design/about/bg-circle.svg')"
            alt="bg-circle"
            class="about-section__imgs__bg-circle"
          />
        </v-col>
        <v-col cols="12" md="6" v-if="isHomepage">
          <div
            class="radius-24"
            :class="$vuetify.display.smAndDown ? '' : 'py-14 px-10'"
          >
            <h2 class="d-block text-darkblue font-32 font-700 nunito-black">
              {{ $t("navbar.aboutTorisma") }}
            </h2>
            <p class="mt-4 text-black font-16 text-darkblue2">
              {{ $t("newDesign.aboutDesc1") }}
            </p>
            <p class="mt-4 text-black font-16 text-darkblue2">
              {{ $t("newDesign.aboutDesc2") }}
            </p>
            <p class="mt-4 text-black font-16 text-darkblue2">
              {{ $t("newDesign.aboutDesc3") }}
            </p>

            <div class="mt-3">
              <div class="mt-10">
                <span
                  class="d-block font-600 text-darkblue font-25 nunito-sans-extra-bold"
                  >{{ $t("about.mission") }}</span
                >
                <p class="text-black font-16 text-darkblue2 mt-2">
                  {{ $t("newDesign.missionDesc") }}
                </p>
              </div>

              <div class="mt-12">
                <span
                  class="d-block font-600 text-darkblue font-25 nunito-sans-extra-bold"
                  >{{ $t("about.vission") }}</span
                >
                <p class="text-black font-16 text-darkblue2 mt-2">
                  {{ $t("newDesign.vissionDesc") }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    isHomepage: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters(["translate"]),
  },
};
</script>

<style lang="scss">
.about-section {
  position: relative;
  top: -40px;
  margin-bottom: 120px;

  &__imgs {
    position: relative;
    img {
      object-fit: cover;
      box-shadow: 0px 15px 38px 0px #0000000d;
      border-radius: 16px;
      overflow: hidden;
      z-index: 2;
      position: relative;
    }

    &__bg-circle {
      position: absolute !important;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.4);
      z-index: 1 !important;
    }
  }
  @media (max-width: 700px) {
    &__imgs {
      &__top-right {
        width: 100px !important;
      }
    }
  }
}
</style>
