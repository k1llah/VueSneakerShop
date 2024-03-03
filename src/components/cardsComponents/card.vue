<script setup script lang="ts">
import { defineProps } from 'vue';
	const props = defineProps({
		id: Number || String,
		imageUrl: String,
		title: String,
		price: Number,
		isFavorite:Boolean,
		isAdded:Boolean,
		onClickAdd: Function,
		onFavoriteAdd: Function,
		onClickOnCard: Function,
	})
	const onFav = props.onFavoriteAdd as ((payload: MouseEvent) => void)
	const onCard = props.onClickOnCard as ((payload: MouseEvent) => void)
	const onclck = props.onClickAdd as ((payload: MouseEvent) => void)
	
	
</script>
<template>
		<div class="relative bg-white border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition" @click="onClickOnCard && onClickOnCard(id)">
			<img :src="!isFavorite ? '/like-1.svg': '/like-2.svg'" class="absolute top-8 left-8" @click.stop=" onFavoriteAdd && onFavoriteAdd(id)">

			<img :src="imageUrl" alt="Sneaker">
			<p class="mt-2">
				{{ title }}
			</p>
			<div class="flex justify-between mt-5">
				<div class="flex flex-col">
					<span class="text-slate-400">Цена</span>
					<span>{{ price }} Руб</span>
				</div>
				<img :src="!isAdded ? '/plus.svg': '/checked.svg'" @click.stop="onclck" alt="Plus">
			</div>
		</div>
</template>