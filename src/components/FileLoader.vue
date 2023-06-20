<script setup lang="js">
import {ref, watch} from "vue";

const fileJSON = defineModel()
const localFile = ref(null)

async function readJSONFile(file) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = event => {
            resolve(JSON.parse(event.target.result))
        };
        fileReader.onerror = error => reject(error);
        fileReader.readAsText(file);
    });
}
watch(localFile, async (value) => {fileJSON.value = await readJSONFile(value[0])})
</script>

<template>
    <v-file-input
      v-model="localFile"
      label="JSON file input"
      variant="outlined"
      accept=".json"
    ></v-file-input>
</template>

<style scoped>

</style>