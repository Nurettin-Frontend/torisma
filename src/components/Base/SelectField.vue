<template>
  <div class="base-input base-select">
    <span class="font-16 d-block mb-1">{{ title }}</span>

    <v-select
      :items="items"
      outlined
      :placeholder="placeholder"
      dense
      :hide-details="hideDetails"
      :item-value="itemValue"
      :item-text="itemText"
      :rules="rules"
      :multiple="multiple"
      color="primary"
      v-model="selected"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "text",
    },
    items: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
    itemValue: {
      type: String,
      default: "id",
    },
    itemText: {
      type: String,
      default: "name",
    },
    defaultSelected: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [(v) => !!v || "this field is require"],
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    normalSelect: {
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
.base-select {
  position: relative;

  .v-input__slot {
    border-radius: 4px;
    .v-input__append-inner {
      margin-top: 10px !important;
    }
    fieldset {
      height: 48px !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0px 2px 10px rgb(168 168 168 / 5%);
    }

    .v-text-field__slot {
      height: 48px !important;
    }
  }
  .error--text {
    .v-input__slot {
      fieldset {
        height: 48px !important;
        border: 1px solid #e44358 !important;
      }
    }
  }
  .v-select--is-multi .v-select__selections {
    span {
      display: none;

      &:nth-child(1) {
        display: block;
      }
    }
  }
}
.base-select-mulitple-two {
  .v-select__selections {
    span {
      display: none;

      &:nth-child(1) {
        display: block;
      }
      &:nth-child(2) {
        display: block;
      }
    }
  }
}
.v-list-item {
  min-height: 40px !important;
  height: 40px !important;
}
</style>
