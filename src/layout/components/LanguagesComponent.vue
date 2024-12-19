<template>
  <div  :key="'lang' + changeLang">
    <!-- langeuages desktop-->
    <v-menu v-if="!$vuetify.display.smAndDown" content-class="language-menu">
      <template v-slot:activator="{ props }">
        <div class="d-flex align-center mx-1 cursor-pointer" v-bind="props">
          <img
            width="18"
            v-if="selectedLanguage == 'arabic'"
            :src="arFlag"
            alt="ar-lang"
          />
          <img
            width="18"
            v-if="selectedLanguage == 'english'"
            :src="enFlag"
            alt="en-lang"
          />
          <span
            class="font-16 d-inline-block mx-1 language-title  mb-1"
            :class="isScrolled ? 'text-black': 'text-white'"
            >{{ $t(`global.${selectedLanguage}`) }}</span
          >
          <img
            class="transition-03 mb-2"
            width="12"
            height="12"
            :src="require(`@/assets/images/icons/arrow-down${isScrolled ? '': '-white'}.svg`)"
            alt="arrow-down"
          />
        </div>
      </template>

      <v-list :elevation="0">
        <v-list-item
          v-for="(lang, i) in languages"
          :key="i"
          @click="$emit('switchLanguage', lang)"
          class="text-center"
        >
          <div class="d-flex align-center">
            <img class="mx-1" width="18" :src="lang.img" :alt="lang.title" />
            <v-list-item-title
              class="cursor-pointer mx-1 font-14 text-black"
              style="margin-bottom: 2px"
              :class="$t(`global.${lang.title}`)"
              >{{ $t(`global.${lang.title}`) }}</v-list-item-title
            >
          </div>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- languages mobile -->

    <v-list-group v-if="$vuetify.display.smAndDown" no-action class="px-0">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">
          <div class="d-flex align-center cursor-pointer">
            <img
              width="18"
              v-if="selectedLanguage == 'arabic'"
              :src="arFlag"
              alt="ar-lang"
            />
            <img
              width="18"
              v-if="selectedLanguage == 'english'"
              :src="enFlag"
              alt="en-lang"
            />
            <span
              class="text-black font-16 d-inline-block pb-1 mx-2 pt-2"
              :class="$t(`global.${selectedLanguage}`)"
              >{{ $t(`global.${selectedLanguage}`) }}</span
            >
            <img width="12" :src="require('@/assets/images/icons/arrow-down.svg')" alt="">
          </div>
        </v-list-item>
      </template>

      <v-list-item
        v-for="(lang, i) in languages"
        :key="i"
        @click="$emit('switchLanguage', lang)"
        class="px-7"
      >
        <div class="d-flex">
          <img class="mt-1" width="16" :src="lang.img" :alt="lang.title" />
          <v-list-item-title
            class="cursor-pointer px-0 mx-2"
            :class="$t(`global.${lang.title}`)"
            >{{ $t(`global.${lang.title}`) }}</v-list-item-title
          >
        </div>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import arFlag from "@/assets/images/global/ar-lang.svg";
import enFlag from "@/assets/images/global/en-lang.svg";
export default {
  name: "App",
  props: {
    selectedLanguage: {
      type: String,
      default: "en",
    },
    isScrolled: {
      type: Boolean,
      default: false,
    },
    lang: {
      type: String,
      default: "en",
    },
  },
  setup() {
    return {
      arFlag,
      enFlag,
    };
  },
  // setup(props) {

  //   // props
  //   let selectedLanguage = props.selectedLanguage;
  //   let lang = props.lang;

  //   const isLoaded = ref(false);
  //   onMounted(() => {

  //     isLoaded.value = true;
  //   });

  //   return {  selectedLanguage, lang , isLoaded};
  // },
  computed: {
    ...mapGetters(["translate", "changeLang"]),

    isHomepage() {
      if (this.$route.name == "Homepage") {
        return true;
      } else {
        return false;
      }
    },
  },
  data: () => ({
    languages: [
      {
        title: "english",
        value: "en",
        img: enFlag,
      },
      {
        title: "arabic",
        value: "ar",
        img: arFlag,
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss">
.v-list-item {
  min-height: 40px !important;
  height: 40px !important;
  i {
    &::before {
      display: none;
    }
  }
}
.language-title {
  line-height: normal !important;
}
</style>
