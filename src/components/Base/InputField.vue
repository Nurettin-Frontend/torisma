<template>
  <div
    class="input-style relative"
    :class="type == 'number' ? 'base-phone' : ''"
  >
    <span
      class="font-16 d-block mb-1"
      :class="isPrimary ? 'primary--text' : 'black--text'"
      >{{ title }}</span
    >
    <v-text-field
      class="w-100"
      :type="type"
      :outlined="outlined"
      :placeholder="placeholder"
      dense
      height="44px"
      max-height="44px"
      :rules="rules"
      :hide-details="hideDetails"
      @click:appendInner="$emit('appendClicked')"
      :rounded="rounded"
      :append-inner-icon="
        type == 'email' && hasValue ? 'mdi-check' : appendIcon
      "
      full-width
      :readonly="readonly"
      color="black"
      v-model="selected"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    defaultSelected: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    title: {
      type: String,
      default: "text",
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    isPrimary: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [(v) => !!v || "this field is require"],
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    hasValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selected: {
      get() {
        return this.defaultSelected;
      },
      set(newVal) {
        if (this.selected !== newVal) {
          this.$emit("changeSelected", newVal);
        }
      },
    },
  },
};
</script>

<style lang="scss">
.input-style {
  .v-input__slot {
    border-radius: 10px;
    fieldset {
      height: 49px !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0px 2px 10px rgb(168 168 168 / 5%);
    }
    .v-input__append-inner {
      margin-top: 5px;
    }
    .v-text-field__slot {
      height: 44px !important;
    }
  }
  .error--text {
    .v-input__slot {
      fieldset {
        height: 49px !important;
        border: 1px solid #e44358 !important;
      }
    }
  }
}
.input-style {
  .v-input__slot {
    .v-input__append-inner {
      top: 4px !important;
      position: relative;
    }
  }
}
.base-phone input::-webkit-outer-spin-button,
.base-phone input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
.base-phone input[type="number"] {
  -moz-appearance: textfield !important;
}
</style>
