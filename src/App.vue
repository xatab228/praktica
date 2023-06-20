<template>
  <v-app>
    <v-main>
      <interactive-map :json-data-base="jsonDataBase"/>
      <v-sheet class="my-5 mx-4">
        <file-loader v-model="jsonDataBase"/>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script setup>
import InteractiveMap from './components/InteractiveMap.vue'
import FileLoader from "@/components/FileLoader.vue";
import {ref, watch} from "vue";

const jsonDataBase = ref({})
// watch(jsonDataBase,(value) => {
//   console.log(value)}, {immediate: true})

</script>

<style>
#app {

}
</style>
