<script setup lang="ts">
import axios from 'axios';
import { ref,onBeforeMount } from 'vue';
const localRole = ref(localStorage.getItem("role"));
const role = ref()
onBeforeMount(() => {
	checkIsAdmin()
})
async function checkIsAdmin() {
  try {
        const data = await axios.post("http://localhost:3001/api/get-data", {
          uuid: localStorage.getItem("uuid"),
          id: localStorage.getItem("id"),
        });
        role.value = data.data.user.role
        localStorage.setItem("role", role.value)
      }catch(error){
        console.log(error)
      }
        if (role.value === "ADMIN") {
          console.log(role.value)
        }
        else{
					localStorage.setItem('role', 'USER')
          location.assign('/')
          alert('Еще че придумал? сегодня не твой день салага')
        }
      
}
</script>
<template>

</template>

