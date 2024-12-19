<template>
  <div class="error-page">
    <div class="w-100">
      <img width="100%" :src="require('@/assets/images/global/404.png')" alt="" />
      <div class="text-center px-6 mt-4">
        <span class="font-22 font-500 black--text global.ops global.notFound"
          ><span class="primary--text">Ops...</span> Page not found!</span
        >
        <div class="d-flex align-center mt-4 justify-center">
          <v-btn
            color="primary"
            dark
            class="radius-5 mx-2"
            min-width="160px"
            height="48px"
            :elevation="0"
            @click="$router.push('/'+$route.params.lang)"
          >
            <span class="font-16 font-500 white--text global.goToHomepage">Go To Homepage</span>
          </v-btn>
          <v-btn
            color="primary"
            dark
            class="radius-5 mx-2"
            width="90px"
            height="48px"
            :elevation="0"
            outlined
            @click="$router.go(-1)"
          >
            <span class="font-16 font-500 global.back" >Back</span>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters(['translate'])
  }
};
</script>

<style lang="scss">
.error-page {
  padding: 0px 20px;
  max-width: 600px;
  width: 100%;
  margin: auto;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
