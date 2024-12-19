<template>
  <div class="info-section custom-zoom">
    <div class="max-width">
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for="(item, i) in items" :key="i">
          <div class="info-section__cover">
            <img :src="item.icon" alt="" />
            <div class="mt-5">
              <span class="font-32 d-block text-darkblue mb-1 nunito-extra-bold">{{
                item.count
              }}</span>
              <span
                class="font-16 d-block text-darkblue mb-4 nunito-sans-bold"
                >{{ $t(item.title) }}</span
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    items: [
      {
        icon: require("@/assets/images/new-design/info/icon-1.svg"),
        title: "newDesign.info1",
        count: "1.000.000+",
      },
      {
        icon: require("@/assets/images/new-design/info/icon-2.svg"),
        title: "newDesign.info2",
        count: "70.000+",
      },
      {
        icon: require("@/assets/images/new-design/info/icon-3.svg"),
        title: "newDesign.info3",
        count: "100.000+",
      },
      {
        icon: require("@/assets/images/new-design/info/icon-4.svg"),
        title: "newDesign.info4",
        count: "24/7",
      },
    ],
  }),
  computed: {
    ...mapGetters(["translate"]),
  },
};
</script>

<style lang="scss">
.info-section {
  position: relative;
  top: -100px;
  z-index: 11;

  &__cover {
    border-radius: 24px;
    background: url("@/assets/images/new-design/info/cover.png") no-repeat
      center;
    padding: 24px;
  }

  @media (max-width: 960px) {
    &__cover {
      background-size: 100% 100%;
      padding: 24px 34px
    }
  }
}
</style>
