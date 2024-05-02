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
		onFavoriteDelete: Function,
		onClickOnCard: Function,
		onclckDelete: Function,
	})
	const onFav = props.onFavoriteAdd as ((payload: MouseEvent) => void)
	const onCard = props.onClickOnCard as ((payload: MouseEvent) => void)
	const onclck = props.onClickAdd as ((payload: MouseEvent) => void)
	const onclckDelete = props.onclckDelete as ((payload: MouseEvent) => void)
	
	
</script>
<template>
		<div class="relative bg-white border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition" @click="onClickOnCard && onClickOnCard(id)">
			<img v-if="!isFavorite" src="/like-1.svg" class="absolute top-8 left-8" @click.stop=" onFavoriteAdd && onFavoriteAdd(id)">
			<img v-if="isFavorite" src="/like-2.svg" class="absolute top-8 left-8" @click.stop=" onFavoriteDelete && onFavoriteDelete(id)">

			<img :src="imageUrl" alt="Sneaker">
			<p class="mt-2">
				{{ title }}
			</p>
			<div class="flex justify-between mt-5">
				<div class="flex flex-col sm:text-sm">
					<span class="text-slate-400 ">Цена</span>
					<span>{{ price }} Руб</span>
				</div>
				<img v-if="!isAdded" src="/plus.svg" @click.stop="onclck" alt="Plus">
				<img v-else-if="isAdded" src="/checked.svg" @click.stop="onclckDelete" alt="Delete">
			</div>
		</div>
</template>