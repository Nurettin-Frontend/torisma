import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage/IndexView.vue";
import NotFound from "../views/not-found/IndexView.vue";

const routes = [
  {
    path: "/:lang", // Add language parameter
    name: "homepage",
    component: Homepage,
  },

  {
    path: "/:catchAll(.*)",
    component: NotFound
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const isLogin = store.getters.token;

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (isLogin) {
//       next();
//     } else {
//       next({
//         path: "/:lang/" + to.params.lang,
//       });
//     }
//   } else {
//     next();
//   }
// });

router.afterEach((to) => {
  let ourLangs = ["en", "ar"];
  let ourPages = [
    "contact",
    "cookies",
    "privacy",
    "refund",
    "register",
    "reset-password",
    "terms",
  ];

  // check how many / in the route
  let slashConutInRoute = to.fullPath.replace("?", "/").split("/");
  let lang = localStorage.getItem("language") || "en";
  // 2 status to check
  // 1. if the page is wrong
  // 2. if the language is wrong

  if (
    slashConutInRoute.length > 2 &&
    !ourPages.includes(slashConutInRoute[2].toLowerCase())
  ) {
    slashConutInRoute[2];

    router.replace("/" + lang);
  } else if (!ourLangs.includes(slashConutInRoute[1])) {
    if (ourPages.includes(slashConutInRoute[1])) {
      router.replace("/" + lang + "/" + slashConutInRoute[1]);
    } else {
      router.replace("/" + lang);
    }
  } else if (!to.params.lang) {
    router.replace("/" + localStorage.getItem("language"));
  }
});

export default router;
