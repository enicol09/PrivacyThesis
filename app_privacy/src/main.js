import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueDashboard from 'vue-dashboard-vd';
import VueHtmlToPaper from "vue-html-to-paper";
import vueresponsive from "vue-responsive-dash";;

import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

import moment from 'moment';
Vue.prototype.$moment = moment;

import AppSnackbar from './components/AppSnackbar.vue';
Vue.component('appsnackbar', AppSnackbar);

// * FIREBASE INTEGRATION
const firebase = require("./firebase/firebase-config.js"); // Import Firebase Config for Firebase Object Access
Vue.prototype.$firebase = firebase; // Prototype Firebase for use throughout Project $firebase
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css"
  ]
};

Vue.use(VueHtmlToPaper, options);
Vue.use(vueresponsive);


Vue.use(VueDashboard);
Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


