<script setup lang="ts">
	let userIsLoggined = false 
</script>
<template>
	<div class="container">
		<div class="min-h-[600px]" v-if="(userIsLoggined == true)">
			<button>
				<img src="/arrow-right.svg" alt="close button">
			</button>
		</div>
	</div>
</template>