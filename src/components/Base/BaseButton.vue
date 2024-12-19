<template>
  <div class="base-button">
    <v-btn
      color="primary"
      dark
      class="radius-10"
      :class="classes"
      :width="width"
      :height="height"
      :type="type"
      :elevation="elevation"
      :outlined="outlined"
      @click="$emit('click')"
    >
      <span class="" :class="spanClasses" v-if="!loading">{{
        title
      }}</span>
      <span v-if="loading"><global-spinner></global-spinner></span>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "60px",
    },
    title: {
      type: String,
      default: "",
    },
    elevation: {
      type: String,
      default: "",
    },
    classes: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    spanClasses: {
      type: String,
      default: "font-18 font-500 ",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    isPrimary: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.base-button {
  button {
    box-shadow: 0px 17px 25px 0px #fd7a5c0f !important;
  }
}
</style>
