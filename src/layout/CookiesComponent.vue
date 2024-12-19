<template>
  <div class="cookies-app">
    <div class="cookies-app__content">
      <div class="w-100">
        <span class="font-20 font-600 black--text d-block mb-2">{{
          $t("global.cookiesTitle")
        }}</span>
        <p class="font-14 black--text">{{ $t("global.cookiesSubTitle") }}</p>
      </div>
      <div class="d-flex align-center mt-4">
        <v-btn
          color="primary"
          @click="clickHandler"
          elevation="0"
          class="radius-5"
        >
          <span class="text-white font-14 d-inline-block mb-1">{{
            $t("global.understand")
          }}</span>
        </v-btn>
        <v-btn
          color="darkblue"
          @click="$router.push('/'+$route.params.lang+'/cookies')"
          elevation="0"
          class="radius-5 mx-4"
        >
          <span class="font-14 white--text d-inline-block mb-1">{{
            $t("global.readMore")
          }}</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      localStorage.setItem("cookies", "accepted");
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.cookies-app {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.301);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  &__content {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    padding: 20px;
    background: white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 960px) {
    display: block !important;
    &__content {
      display: block !important;
    }
  }
}
</style>
