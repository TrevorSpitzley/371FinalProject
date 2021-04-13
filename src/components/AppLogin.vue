<template>
  <div>
    <button v-on:click="moveToSeller()">Seller</button>
    <button v-on:click="moveToClient()">Client</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class AppLogin extends Vue{
  $router: any;

  moveToSeller(): void{
    this.$router.push({ path: "/Seller" });
  }

  moveToClient(): void{
    this.$router.push({ path: "/Client" });
  }
}
</script>

<style scoped>

</style>