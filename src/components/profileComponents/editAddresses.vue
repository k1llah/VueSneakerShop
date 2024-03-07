<script setup lang="ts">
import { ref } from "vue";

</script>
<template>
  <div>
    <form class="flex flex-col">
      <div class="flex space-x-4 mb-4">
        <input
          placeholder="First Name"
          class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
        <input
          placeholder="Last Name"
          class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
      </div>
    </form>
  </div>
</template>
