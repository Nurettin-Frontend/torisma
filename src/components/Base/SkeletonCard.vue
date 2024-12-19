<template>
  <div class="skeleton-card">
    <v-skeleton-loader
      class="skeleton-card__img mx-auto"
      type="image"
    ></v-skeleton-loader>
    <div class="d-flex align-center justify-space-between mt-3">
      <v-skeleton-loader class="skeleton-card__text"  type="text">
      </v-skeleton-loader>

      <v-skeleton-loader class="skeleton-card__text"  type="text">
      </v-skeleton-loader>
    </div>
    <div class="d-flex align-center justify-space-between mt-3" v-if="type == 'experience'">
      <v-skeleton-loader class="skeleton-card__text"  type="text">
      </v-skeleton-loader>

      <v-skeleton-loader class="skeleton-card__text"  type="text">
      </v-skeleton-loader>
    </div>
    <v-skeleton-loader
      class="skeleton-card__btn mt-2"
      type="button"
      v-if="type != 'experience'"
    >
    </v-skeleton-loader>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
};
</script>

<style lang="scss">
.skeleton-card {
  &__img {
    width: 100%;
    height: 215px;
  }
  &__text {
    width: 80px;
  }
  .v-skeleton-loader__button {
    width: 100% !important;
    max-width: 100% !important;
    height: 40px;
  }
}
</style>
