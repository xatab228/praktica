<script setup lang="js">
import {getLayerColor} from "@/utils";

const data = [
	{
		text: 'от 0 до 0.1',
		color: getLayerColor(0)
	},
	{
		text: 'от 0.1 до 0.2',
		color: getLayerColor(0.1)
	},
	{
		text: 'от 0.2 до 0.3',
		color: getLayerColor(0.2)
	},
	{
		text: 'от 0.3 до 0.4',
		color: getLayerColor(0.3)
	},
	{
		text: 'от 0.4 до 0.5',
		color: getLayerColor(0.4)
	},
	{
		text: 'от 0.5 до 0.6',
		color: getLayerColor(0.5)
	},
	{
		text: 'от 0.6 до 0.7',
		color: getLayerColor(0.6)
	},
	{
		text: 'от 0.7 до 0.8',
		color: getLayerColor(0.7)
	},
	{
		text: 'от 0.8 до 0.9',
		color: getLayerColor(0.8)
	},
	{
		text: 'от 0.9 до 1',
		color: getLayerColor(0.9)
	},

]

</script>

<template>
	<v-sheet max-width="200">
		<v-sheet
			v-for="colorBox in data"
			:key="colorBox.color"
			class="color-box"
		>
			<v-sheet
				width="50"
				height="50"
				:color="colorBox.color"
				style="border: 1px solid black"
			/>
			<div v-text="colorBox.text" class="ml-2"/>
		</v-sheet>
	</v-sheet>
</template>

<style scoped>
.color-box {
	display: grid;
	grid-template-columns: 1fr auto;
	margin-bottom: 8px;
	align-items: center;
}
</style>