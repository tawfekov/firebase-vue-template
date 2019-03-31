import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import "./registerServiceWorker";
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import './firebase/firebaseInit';

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});