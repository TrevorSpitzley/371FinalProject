import Vue from 'vue'
import App from './App.vue'
// import firebase from "firebase/app"
// import "firebase/firestore"
// import "firebase/auth"
import { AppRouter } from "./app-routing";

Vue.config.productionTip = false

// firebase.initializeApp(firebaseConfig);

// Vue.prototype.$appDB = firebase.firestore();
// Vue.prototype.$appAuth = firebase.auth();


new Vue({
  router: AppRouter,
  render: h => h(App),
}).$mount('#app')
