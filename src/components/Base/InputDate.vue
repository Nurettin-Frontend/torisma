<template>
  <div class="base-date">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          class="input-style"
          outlined
          :label="$t('form.selectDate')"
          dense
          :hide-details="true"
          append-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          :rules="rules"
          v-on="on"
          :value="date.length > 2 ? '+3 dates selected ' : value"
          @input="$emit('input', $event)"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable :multiple="multiple" :min="new Date().toISOString().substr(0, 10)">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="okHandler"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Array],
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [(v) => !!v || "this field is require"],
    },
  },
  data: () => ({
    date: null,
    menu: false,
  }),
  methods: {
    okHandler() {
      this.menu = false;
      this.$emit("valueHandler", this.date);
    },
  },
  created() {
    this.date = this.value;
  },
};
</script>

<style lang="scss">
.base-date {
  .v-input__icon {
    margin-top: 6px !important;
  }
}
</style>
