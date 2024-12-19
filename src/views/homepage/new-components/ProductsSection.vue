<template>
  <div class="products-section custom-zoom">
    <div class="max-width">
      <v-row justify="center" class="mb-14">
        <v-col cols="12" md="10" lg="9" class="text-center">
          <span class="text-darkblue d-block font-36 nunito-black font-700">{{
            $t("newDesign.ourProduct")
          }}</span>
          <p class="text-darkblue2 font-24">
            {{ $t("newDesign.ourProductsDes") }}
          </p>
        </v-col>
      </v-row>
      <v-row
        class="mb-16"
        v-for="(product, i) in products"
        :key="i"
        align="center"
        :class="product.flip ? 'row-reverse' : ''"
        justify="center"
      >
        <v-col cols="12" md="6">
          <div class="products-section__product-text">
            <span class="d-block font-24 text-darkblue nunito-sans-black">{{
              $t(product.title)
            }}</span>
            <p
              class="font-16 text-darkblue2 mt-2"
              v-html="$t(product.desc)"
            ></p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <img
            height="340"
            class="products-section__product-img w-100 object-cover"
            :src="product.img"
            alt=""
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    products: [
      {
        title: "newDesign.product5Title",
        desc: "newDesign.product5Desc",
        img: require("@/assets/images/new-design/products/product-5.jpg"),
        flip: false,
      },
      {
        title: "newDesign.product1Title",
        desc: "newDesign.product1Desc",
        img: require("@/assets/images/new-design/products/product-1.png"),
        flip: true,
      },
      {
        title: "newDesign.product4Title",
        desc: "newDesign.product4Desc",
        img: require("@/assets/images/new-design/products/product-4.jpg"),
        flip: false,
      },
      {
        title: "newDesign.product2Title",
        desc: "newDesign.product2Desc",
        img: require("@/assets/images/new-design/products/product-2.png"),
        flip: true,
      },
      {
        title: "newDesign.product3Title",
        desc: "newDesign.product3Desc",
        img: require("@/assets/images/new-design/products/product-3.jpg"),
        flip: false,
      },
    ],
  }),
  computed: {
    ...mapGetters(["translate"]),
  },
};
</script>

<style lang="scss">
.products-section {
  background: white;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;

  &__product-text {
    max-width: 600px;
  }
  &__product-img {
    max-width: 600px;
    border-radius: 24px;
  }

  @media (max-width: 960px) {
    margin-top: 100px;
    &__product-text {
      width: auto !important;
      max-width: unset !important;
    }
    &__product-img {
      width: auto !important;
      max-width: unset !important;
    }
  }
}
</style>
