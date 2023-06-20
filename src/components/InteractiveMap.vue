<script setup lang="js">
import {onMounted, ref} from "vue"
import "leaflet/dist/leaflet.css"
import {LMap, LPolygon, LTileLayer} from "@vue-leaflet/vue-leaflet"
import axios from "axios";
let zoom = ref(6)
let center = ref([58.462335, 88.504020])
const map = ref();
const dataSource = ref(null);
const isLoading = ref(false)
//const test = [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]];

const getUrl = (place) => {
  return `https://nominatim.openstreetmap.org/search.php?q=${place}&polygon_geojson=1&format=geojson`
}
const getData = async () => {
  const places = [
    'Arkhangelsk_region'
  ]
  isLoading.value = true;
  const dynamicUrl = getUrl(places[0])
  const response = await axios.get(dynamicUrl)
  console.log(response.data.features)
  dataSource.value = response.data.features.map(item => item.geometry.coordinates[0])
  console.log(dataSource.value)
  isLoading.value = false;
}

onMounted(async () => {
  await getData()
})
</script>


<template>
  <div class="map-container">
    <v-progress-circular v-if="isLoading" indeterminate class="bg-blue-grey"/>
    <l-map
      v-else-if="dataSource"
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
      <l-polygon
        v-for="(polygon, index) in dataSource"
        :key="index"
        :lat-lngs="polygon"
        fill-color="#FD8D3C"
        fill-opacity="0.2"
        weight="3"
        opacity="1"
        dash-array="3"
        color="white"

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
  height:500px;
  border: thin solid grey;
}
</style>
