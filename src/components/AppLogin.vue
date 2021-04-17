<template>
  <div id="AppLogin">
    <v-container fluid class="red darken-2 my-4">
      <v-row class="green lighten-3 ma-1" justify="center">
        <v-sheet elevation="4" class="pa-3 my-3">
          <v-form v-model="dataReady">
            <v-row class="flex-column" align="end">
              <v-col>
                <v-text-field prepend-icon="mdi-email" type="text"
                  label="Email" v-model="uMail" :rules="emailRules" />
              </v-col>
              <v-col>
                <v-text-field prepend-icon="mdi-lock" type="password"
                  label="Password" v-model="uPass" :rules="pwRules" />
              </v-col>
              <v-col cols="auto">
                <v-btn outlined :disabled="!dataReady">Login</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { FirebaseAuth, UserCredential } from "@firebase/auth-types";
import "firebase/auth";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

const EM_REGEX = /([0-9a-z]+)@([a-z0-9]+\.)+(edu|com|org)$/;

@Component
export default class AppLogin extends Vue {
  readonly $appAuth!: FirebaseAuth;
  $router: any;
  emRegex = EM_REGEX;
  dataReady = false;
  uMail = "";
  uPass = "";
  emailRules = [
    function (x: string): boolean | string {
      return x.length > 0 ? true : "Email is required";
    },
    function (x: string): boolean | string {
      const matchLen = x.match(EM_REGEX)?.length ?? 0;
      return matchLen > 0 ? true : ".edu, .com, org expected";
    },
    (x: string): boolean => x.indexOf("@") > 0,
  ];
  pwRules = [
    function (x: string): boolean | string {
      return x.length >= 6 ? true : "Password (at least 6 chars) is required";
    },
  ];
}
</script>

<style scoped>
#AppLogin{
  display: inline-block;
  text-align: right;
  border-radius: 0.5em;
  padding: 1em;
  margin: 0.6em;
}

</style>