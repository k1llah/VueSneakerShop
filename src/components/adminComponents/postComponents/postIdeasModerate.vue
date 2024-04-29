<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios'
import { onBeforeMount, ref } from 'vue';
import ideasTemplate from './ideasTemplate.vue';
import { useIsAdmin } from '@/stores/isAdmin';
const isAdmin = useIsAdmin();
const dataIdeas = ref()
const role = ref()
onBeforeMount(() => {
	isAdmin.checkIsAdmin()
})

async function getIdeas(){
	try{
		const response = await axios.get('http://localhost:3001/api/get-ideas')
		dataIdeas.value = response.data
		console.log(dataIdeas.value)
	} catch(error){
		console.log(error)
	}
}
</script>
<template>
	<div v-if="dataIdeas">
		<div v-for="idea in dataIdeas" :key="idea.id">
			<ideasTemplate
			:email="idea.email"
			:name="idea.name"
			:idea="idea.idea"
			/>
		</div>
			
		</div>
</template>