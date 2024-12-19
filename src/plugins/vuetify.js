
// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";


const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#FD8467",
    "yellow-bg": "#FEF9EA",
    bluebg: "#BAEBE0",
    "light-bluebg": "#E3EFFF",
    "blue-text": "#186B6D",
    "light-primary": "#FFE9E3",
    "light-primary2": "#FFFAEB",
    black: "#1F2227",
    greybg: "#F5F5F5",
    lightgreybg: "#ECECEC",
    greyText: "#464646",
    lightgreyText: "#909090",
    lightText: "#C1C1C1",
    normaldarkblue: "#575F87",
    lightdarkblue: "#7B809A",
    yellow: "#FFC107",
    darkyellow: "#644E12",
    green: "#47B649",
    darkgreen: "#2E6565",
    lightwhite: "#FFFEFC",
    darkblue: "#2E333B",
    darkblue2: "#4D5562",
    error: "#ff5656",
  },
}


export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    iconfont: "mdiSvg",
  },
  breakpoint: {
    scrollBarWidth: 24,
  },
  rtl: localStorage.getItem("language") == "ar" ? true : false,
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    },
  },
});
