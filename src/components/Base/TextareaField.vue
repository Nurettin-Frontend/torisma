<template>
  <div class="base-textarea relative" :class="outlined ? 'textarea-style' : ''">
    <span class="black--text font-16 d-block mb-1">{{ title }}</span>
    <v-textarea
      class="w-100"
      :outlined="outlined"
      :placeholder="placeholder"
      dense
      :rules="rules"
      :hide-details="hideDetails"
      :rounded="rounded"
      :rows="3"
      :readonly="readonly"
      color="black"
      v-model="selected"

      >
      <!-- @update="value =  $event" -->
    </v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      validator: () => true,
    },
    title: {
      type: String,
      default: "text",
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    rounded: {
      type: Boolean,
      default: false,
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
    defaultSelected: {
      type: String,
      default: "",
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
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0px 2px 10px rgb(168 168 168 / 5%);
    }
    .v-input__append-inner {
      margin-top: 5px !important;
    }
  }
  .error--text {
    .v-input__slot {
      fieldset {
        border: 1px solid #e44358 !important;
      }
    }
  }
}
.v-input {
  margin-top: 0px;
}
.textarea-style {
  .v-input__slot {
    fieldset {
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
    }
  }
  .error--text {
    .v-input__slot {
      fieldset {
        border: 1px solid #e44358 !important;
      }
    }
  }
}
</style>
