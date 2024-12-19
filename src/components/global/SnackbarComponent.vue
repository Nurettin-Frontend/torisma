<template>
  <div>
    <v-snackbar v-model="show" :color="color" :timeout="timeout" top>
      <div v-if="typeToast == 'loginError'">
        <span class="white--text">{{ $t("book.needLogin") }} </span>
      </div>
      <div else>
        {{ text }}
      </div>

      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="show = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {},
  data() {
    return {
      show: false,
      color: "",
      text: "",
      timeout: -1,
      typeToast: "",
    };
  },
  computed: {
    ...mapGetters(['translate'])
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "SHOW_MESSAGE") {
        this.text = state.text;
        this.color = state.color;
        this.typeToast = state.typeToast;
        this.timeout = state.timeout;
        this.show = true;
      }
    });
  },
};
</script>
