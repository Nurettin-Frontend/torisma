import axios from "axios";
import store from "../store";
axios.defaults.baseURL = "";

window.axios = axios;
export default async () => {
  // show loader in each request
  window.axios.interceptors.request.use(
    (confiq) => {
      store.dispatch('loading', true)
    return confiq;
  },
  (erorr) => {
      return erorr;
    }
  );

  window.axios.interceptors.response.use(
    function (response) {
      store.dispatch('loading', false)
      return response;
    },
    async function (error) {
      store.dispatch('loading', false)
      // response with status code > 200 is here
      return error.response.data;
    }
  );
};