<script setup lang="js">
import {onMounted, ref} from "vue"
import "leaflet/dist/leaflet.css"
import {LGeoJson, LMap, LTileLayer} from "@vue-leaflet/vue-leaflet"
let zoom = ref(6)
let center = ref([58.462335, 88.504020])
const map = ref();
const dataSource = ref(null);
const isLoading = ref(false);
import {arkhangelsk} from '@/assets/districts/szfo/Arhangelsk region'

const getUrl = (place) => {
  return `https://nominatim.openstreetmap.org/search.php?q=${place}&polygon_geojson=1&format=geojson`
}
const getData = async () => {
  // const places = [
  //   'Arkhangelsk_region'
  // ]
  // isLoading.value = true;
  // const dynamicUrl = getUrl(places[0])
  // const response = await axios.get(dynamicUrl)
  // console.log(response.data.features)
  // dataSource.value = response.data.features.map(item => item.geometry.coordinates[0])
  // console.log(dataSource.value)
  // isLoading.value = false;
  //axios.get("https://github.com/timurkanaz/Russia_geojson_OSM/raw/master/GeoJson's/Regions/SZFO//Архангельская%20область_Arhangelsk%20region.geojson")

}

onMounted(async () => {
  await getData()
})
</script>


<template>
  <div class="map-container">
    <v-progress-circular v-if="isLoading" indeterminate class="bg-blue-grey"/>
    <l-map
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
      <l-geo-json :geojson="arkhangelsk"/>
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
