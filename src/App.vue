<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FirebaseFirestore } from "@firebase/firestore-types";

import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { QuerySnapshot } from "@firebase/firestore-types";

import {FirebaseAuth} from "@firebase/auth-types";
import "firebase/auth";

import AppLogin from './components/AppLogin.vue';
import Seller from './components/Seller.vue';
import Client from './components/Client.vue';


@Component({
  components: {
    AppLogin, Seller, Client,
  },
})

  //changing the APP properties
export default class App extends Vue {
  // readonly $appAuth!: FirebaseAuth;
  $router: any;

  userLoggedIn(): boolean {
    // return this.$appAuth.currentUser?.uid !== undefined;
    return true;
  }

  doLogout(): void {
    // this.$appAuth.signOut();
    this.$router.back();    // Go backward in the "history stack"
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
