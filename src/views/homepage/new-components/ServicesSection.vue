<template>
  <div class="services-section custom-zoom">
    <img
      class="services-section__clip"
      :src="require('@/assets/images/new-design/products/clip.png')"
    />
    <div class="max-width">
      <div class="text-center mb-14">
        <span class="font-36 text-darkblue nunito-sans-black">{{
          $t("newDesign.servicesTitle")
        }}</span>
        <p class="font-16 text-darkblue2 mt-1">
          {{ $t("newDesign.servicesDesc") }}
        </p>
      </div>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(service, i) in services"
          :key="i"
        >
          <div class="services-section__cover">
            <img class="mx-auto mb-3" width="110" :src="service.icon" alt="" />
            <div class="mt-5">
              <span
                class="font-26 d-block text-darkblue mb-4 nunito-sans-extra-bold"
                >{{ $t("services." + service.title) }}</span
              >
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
  data: () => ({
    services: [
      {
        icon: require("@/assets/images/new-design/services/service-icon-1.svg"),
        title: "globalCustomer",
      },
      {
        icon: require("@/assets/images/new-design/services/service-icon-2.svg"),
        title: "localCustomer",
      },
      {
        icon: require("@/assets/images/new-design/services/service-icon-3.svg"),
        title: "multilingualAgents",
      },
    ],
  }),
  computed: {
    ...mapGetters(["translate"]),
  },
};
</script>

<style lang="scss">
.services-section {
  background: white;
  padding: 100px 0px;
  position: relative;
  &__clip {
    position: absolute;
    top: 0px;
    width: 100%;
    left: 0px;
    transform: translateY(-100%);
    z-index: 99;
    height: 150px;
  }
  &__cover {
    background: #f6f6f7;
    padding: 24px;
    border-radius: 24px;
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    span {
      max-width: 250px;
    }
  }

  @media (max-width: 960px) {
    padding: 60px 0px;

    &__clip{
      height: 60px
    }

    &__cover {
      height: auto;
    }
  }
}
</style>
