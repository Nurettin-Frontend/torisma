<template>
  <div class="subject-form">
    <div class="text-center">
      <div class="d-flex align-center justify-space-between">
        <div></div>
        <h4 class="font-20 black--text">Data Subject Access Request Form</h4>
        <v-icon size="18" @click="$emit('close')">mdi-close</v-icon>
      </div>
      <p class="font-16 greytext--text my-5 mx-10">
        Please fill in the information below. The website administrator or data
        protection officer will be notified of your request within 24 hours, and
        will need an appropriate amount of time to respond.
      </p>
    </div>

    <div class="subject-form__cover">
      <v-form v-model="valid" ref="subjectForm" @submit.prevent="submitHandler">
        <v-row>
          <!-- Website -->
          <v-col cols="12">
            <base-input
              v-model="obj.website"
              placeholder="Website"
              title="Website"
            ></base-input>
          </v-col>

          <!-- your name -->
          <v-col cols="12">
            <base-input
              v-model="obj.name"
              placeholder="Your name"
              title="Your name"
            ></base-input>
          </v-col>

          <!-- email address -->
          <v-col cols="12">
            <base-input
              v-model="obj.emailAddress"
              placeholder="What email address do you use to access the above website / app?"
              title="What email address do you use to access the above website / app?"
              :rules="$helper.emailRules"
            ></base-input>
          </v-col>

          <!-- request as -->
          <v-col cols="12">
            <p class="font-500 font-16 mb-1">
              You are submitting this request as
            </p>
            <v-radio-group v-model="obj.submittingAs">
              <v-radio
                v-for="(request, i) in requestAs"
                :key="i"
                :label="request.title"
                :value="request.title"
              ></v-radio>
            </v-radio-group>
          </v-col>

          <!-- lawRequest -->
          <v-col cols="12">
            <p class="font-500 font-16 mb-1">
              Under the rights of which law are you making this request?
            </p>
            <base-select
              v-model="obj.law"
              :items="laws"
              itemText="title"
              itemValue="title"
              placeholder="Select Law"
              :isString="true"
            ></base-select>
          </v-col>

          <!-- request to -->
          <v-col cols="12" class="pb-0 base-auto">
            <p class="font-500 font-16 mb-1">
              I am submitting a request to ___________
            </p>
            <v-autocomplete
              v-model="obj.reason"
              :items="requestTo"
              itemText="title"
              itemValue="title"
              :multiple="true"
              dense
              height="45px"
              outlined
              class="base-input"
              placeholder="Please Select"
              :rules="[(v) => (v && v.length > 0) || '']"
            >
              <template v-slot:selection="data">
                <span>
                  {{
                    obj.reason.length > 1
                      ? obj.reason.length + " " + 'Selected'
                      : obj.reason.length == 1
                      ? data.item.title
                      : 'Please Select'
                  }}
                </span>
              </template>
            </v-autocomplete>
          </v-col>

          <!-- leave question -->
          <v-col cols="12" class="pt-0">
            <base-textarea
              v-model="obj.details"
              placeholder="Please leave details regarding your action request or question."
              title="Please leave details regarding your action request or question."
            ></base-textarea>
          </v-col>

          <v-col cols="12">
            <p class="font-500 font-16 mb-1">
              I confirm that
            </p>

            <v-checkbox
              v-model="confirm1"
              :hide-details="true"
              label="Under penalty of perjury, I declare all the above information to be true and accurate."
              class="mt-1"
              :class="$vuetify.rtl ? 'text-right' : ''"
              :rules="[(v) => v || '']"
            ></v-checkbox>
            <v-checkbox
              v-model="confirm2"
              :hide-details="true"
              label="I understand that the deletion or restriction of my personal data is irreversible and may result in the termination of services with Torisma Website / App."
              class="mt-3"
              :class="$vuetify.rtl ? 'text-right' : ''"
              :rules="[(v) => v || '']"
            ></v-checkbox>
            <v-checkbox
              v-model="confirm3"
              :hide-details="true"
              label="I understand that I will be required to validate my request by email, and I may be contacted in order to complete the request."
              class="mt-3"
              :class="$vuetify.rtl ? 'text-right' : ''"
              :rules="[(v) => v || '']"
            ></v-checkbox>
          </v-col>

          <v-col cols="12">
            <div class="d-flex justify-end">
              <base-button
                :loading="loading"
                width="140px"
                title="Submit"
                classes="radius-5 "
                type="submit"
                height="45px"
              ></base-button>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    obj: { law: "PDPL" },
    requestAs: [
      { title: "he person, or the parent / guardian of the person, whose name appears above.", value: 1 },
      { title: "An agent authorized by the consumer to make this request on their behalf.", value: 2 },
    ],
    requestAsValue: 1,

    requestToValue: 1,
    confirm1: false,
    confirm2: false,
    confirm3: false,
    laws: [{ title: "PDPL" }, { title: "CCPA" }, { title: "CCPR" }],

    loading: false,
    valid: false,
  }),
  computed: {
    requestTo() {
      return [
        {
          title: 'Know what information is being collected from me',
          value: 1,
          selected: false,
        },
        {
          title: 'Have my information deleted',
          value: 2,
          selected: false,
        },
        {
          title: 'Opt out of having my data sold to third parties',
          value: 3,
          selected: false,
        },
        {
          title: 'Opt in to the sale of my personal data',
          value: 4,
          selected: false,
        },
        {
          title: 'Other (please specify in the comment box below)',
          value: 5,
          selected: false,
        },
      ];
    },
  },
  methods: {
    
    async submitHandler() {
      let valid = this.$refs.subjectForm.validate();
      if (!valid) {
        this.$store.dispatch("showSnack", {
          text: this.$t("rules.checkAllFields"),
          color: "error",
        });
      }
      let reqObj = {
        ...this.obj,
        reason: this.obj.reason.toString(),
        law: this.obj.law.toString(),
      };
      let { data } = await this.$axios.post(
        "/utilities/forms/data-subject-access-request",
        reqObj
      );
      if (data) {
        this.$store.dispatch("showSnack", {
          text: 'Your request sent successfully',
          color: "success",
        });
        this.$emit("close");
      } else {
        this.$store.dispatch("showSnack", {
          text: 'Something wrong',
          color: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss">
.subject-form {
  &__cover {
    box-shadow: 0 3.125rem 3.125rem -1.875rem #f5f6fa;
    border: solid 0.0625rem #8b93a7a1;
    border-radius: 4px;
    padding: 20px 40px;
  }
}
.v-list-item {
  min-height: 40px !important;
  height: 40px !important;
}
.base-auto {
  .v-text-field--outlined {
    fieldset {
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      border-radius: 10px;
    }
  }
  .v-input__append-inner {
    margin-top: 10px !important;
  }

  overflow: hidden;

  .v-select__selections {
    span {
      display: none;

      &:nth-child(1) {
        display: block;
      }
    }
  }
}
</style>
