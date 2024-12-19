<template>
  <div class="whatsapp-btn cursor-pointer" @click="goTo">
    <img width="55px" height="55px" :src="require('@/assets/images/icons/whatsapp-orange.svg')" alt="" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["fixedBtn"]),
  },
  methods: {
    goTo() {
      window.open("http://web.whatsapp.com/send?phone=+966555074410");
    },
  },
};
</script>

<style lang="scss">
.whatsapp-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9;
  animation: fadeUpBtn 1s 1s forwards;
  opacity: 0;
  transform: translateY(50px);
}

@keyframes fadeUpBtn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
