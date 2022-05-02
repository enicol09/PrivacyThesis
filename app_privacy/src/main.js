import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

import moment from 'moment';
Vue.prototype.$moment = moment;

import AppSnackbar from './components/AppSnackbar.vue';
Vue.component('appsnackbar', AppSnackbar);

// * FIREBASE INTEGRATION
const firebase = require("./firebase/firebase-config.js"); // Import Firebase Config for Firebase Object Access
Vue.prototype.$firebase = firebase; // Prototype Firebase for use throughout Project $firebase


Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


