<template>
  <div class="become-partner-section custom-zoom">
    <div
      class="max-width"
      :class="$vuetify.display.smAndDown ? 'text-center' : ''"
    >
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="9">
          <span class="text-white nunito-black font-36 mb-4 d-block">{{
            $t("newDesign.becomePartner")
          }}</span>
          <p class="text-white font-16 mb-1">
            {{ $t("newDesign.becomePartnerDesc") }}
          </p>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn
            color="primary"
            elevation="0"
            class="radius-30 px-4 mt-4 btn-hover"
            :class="$vuetify.display.smAndDown ? '  mt-3' : ' '"
            height="58px"
            @click="goTo('https://torisma.com/en/register ')"
          >
            <span class="font-20 text-black nunito-sans-bold d-inline-block">{{
              $t("navbar.partnerRegistration")
            }}</span>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods: {
    goTo(link) {
      window.open(link, "_self");
    },
  },
};
</script>

<style lang="scss">
.become-partner-section {
  padding: 3% 0px;
  background: url("@/assets/images/new-design/become-partner/bg.png") no-repeat;
  background-size: cover;
  @media (max-width: 960px) {
    padding: 40px 0px;
  }
}
</style>
