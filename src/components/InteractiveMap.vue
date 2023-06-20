<script setup lang="js">
import {computed, getCurrentInstance, onMounted, ref, watch} from "vue"
import "leaflet/dist/leaflet.css"
import {LGeoJson, LMap, LTileLayer} from "@vue-leaflet/vue-leaflet"

import {arkhangelskDistrict} from '@/assets/districts/szfo/Arhangelsk region'
import {nenetsAutonomousDistrict} from "@/assets/districts/szfo/Nenets Autonomous District";

const props = defineProps({
  jsonDataBase: {
    type: Object
  }
})

let zoom = ref(6)
let center = ref([58.462335, 88.504020])
const map = ref();
const needUpdate = ref(false)

const szfoDistricts = computed(() => {
  return [
    arkhangelskDistrict,
    nenetsAutonomousDistrict
  ]
})

watch(() => props.jsonDataBase, (value) => {
  needUpdate.value = true;
  setTimeout(() => needUpdate.value = false,0)
})
const getStyle = (e) => {
  console.log(props.jsonDataBase)
  console.log(e)
}

</script>


<template>
  <div class="map-container">
    <l-map
      v-if="!needUpdate"
      ref="map"
      v-model:zoom="zoom"
      v-model:center="center"
      :useGlobalLeaflet="false"
    >
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
      />
      <l-geo-json
        v-for="(district, index) in szfoDistricts"
        :key="`district-${index}`"
        :visible="!needUpdate"
        :geojson="district"
        :options-style="getStyle"
      />
    </l-map>
  </div>
</template>



<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  border: thin solid grey;
}
</style>
