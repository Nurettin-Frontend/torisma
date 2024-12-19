import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "./plugins/axios";
import i18n from "./plugins/i18n/index.js";
import "./assets/style/main.scss";
import "./assets/style/_variables.scss";
import "./assets/style/rtl.scss";

import BaseButton from "./components/Base/BaseButton";
import BaseInput from "./components/Base/InputField";
import BaseDate from "./components/Base/InputDate";
import BaseSelect from "./components/Base/SelectField";
import BaseLoading from "./components/Base/BaseLoading";
import BaseSkeletonCard from "./components/Base/SkeletonCard";
import BaseTextarea from "./components/Base/TextareaField";
import LoadingSpinner from "@/components/global/SpinnerComponent";

loadFonts();
const app = createApp(App)
app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseDate", BaseDate);
app.component("BaseSelect", BaseSelect);
app.component("BaseTextarea", BaseTextarea);
app.component("BaseLoading", BaseLoading);
app.component("BaseSkeleton-card", BaseSkeletonCard);
app.component("LoadingSpinner", LoadingSpinner);

app.provide("$axios", axios);

app.use(i18n()).use(router).use(store).use(vuetify).mount("#app");
