<template>
  <div>
    <button v-on:click="goBack()">Go Back</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue,} from "vue-property-decorator";

@Component
export default class Seller extends Vue{
    //$router: any;

  goBack(): void{
    this.$router.back();
  }
}
</script>

<style scoped>

</style>