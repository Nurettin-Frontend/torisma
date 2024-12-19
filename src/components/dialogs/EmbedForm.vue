<template>
  <no-ssr>
    <div class="embed-form relative w-100" id="embed" style="min-height: 100px">
      <div v-if="!loaded">
        <global-loading></global-loading>
      </div>
      <div v-if="loaded" :key="routeChanged">
        <transition name="fade" mode="out-in">
          <v-icon
            v-if="loadedIcon"
            class="embed-form__close cursor-pointer"
            @click="$emit('close')"
            >mdi-close</v-icon
          >
        </transition>

        <component :is="'script'" >
          hbspt.forms.create({
            region: "eu1",
            portalId: "26630621",
            formId: "be5ad4f8-a8df-4acb-8e14-7750352bb666",
            onFormReady: function (val) {
              let formEmbed = val.querySelector(
                "#password-be5ad4f8-a8df-4acb-8e14-7750352bb666"
              );
              formEmbed.setAttribute("type", "password");
            },
            onFormSubmit: async function (form, val) {
              console.log("blabla", form);
              console.log("val", val);
              let obj = {
                b2BUser: {
                  companyDetails: {},
                },
                phoneNumber: {},
              };
              val.forEach((field) => {
                if (field.name == "firstname") {
                  obj.firstName = field.value;
                }
                if (field.name == "email") {
                  obj.email = field.value;
                }
                if (field.name == "lastname") {
                  obj.lastName = field.value;
                }
                if (field.name == "phone") {
                  obj.phoneNumber.phoneNumber = field.value;
                }
                if (field.name == "password") {
                  obj.password = field.value;
                }
                if (field.name == "0-2/company_type") {
                  obj.b2BUser.companyDetails.type = field.value;
                }
                if (field.name == "0-2/company_name") {
                  obj.b2BUser.companyDetails.name = field.value;
                }
                if (field.name == "0-2/company_country_2") {
                  obj.b2BUser.companyDetails.country = field.value;
                }
                if (field.name == "0-2/company_email") {
                  obj.b2BUser.companyDetails.email = field.value;
                }
                if (field.name == "0-2/company_phone_number") {
                  obj.b2BUser.companyDetails.phoneNumber = field.value;
                }
                obj.termsAndConditions = true;
              });
              let res = await axios.post("/tc-users/sign-up", obj, {
                params: {
                  microsite: 20,
                },
              });
            },
          });
        </component>
      </div>
    </div>
  </no-ssr>
</template>

<script>

import axios from "axios";
export default {
  setup(){
    useHead({
  script:[
    {src: '//js-eu1.hsforms.net/forms/embed/v2.js'}
  ]
})
  },
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    loaded: false,
    loadedIcon: false,
    routeChanged: false,
    isScriptLoaded: false

  }),
  methods: {},
  created() {
    console.log(axios);
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
    setTimeout(() => {
      this.loadedIcon = true;
    }, 1500);
  },
};
</script>

<style lang="scss">
.embed-form {
  &__close {
    position: absolute !important;
    top: 15px;
    right: 15px;
  }
}
</style>
