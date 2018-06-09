import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(Quasar, {
  components: All,
  directives: All,
  plugins: All
});

// instance config
const app = {
  el: "#app",
  router: Router,
  store: Store,
  ...App
};
new Vue(app);
