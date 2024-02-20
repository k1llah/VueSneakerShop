		<script setup lang="ts">
	let	props = defineProps({
		showOverlay: Boolean
	})
		</script>
<template >
	<div class="fixed top-0 left-0 h-full w-full bg-[#22eb0073] z-10 opacity-70" v-if="showOverlay">
		
	</div>
</template>