<script setup lang="ts">
import { useBlog } from '@/stores/sneakerBlog';
import axios from 'axios'
import { ref } from 'vue'
import createdModal from './createdModal.vue'
const blog = useBlog();
let email = ref('');
let ideaText = ref('');
let name = ref('')
let messageWarning = ref('')
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

async function submit() {
  event?.preventDefault()
	try{
    const isEmailValid = emailRegex.test(email.value)
		if(email.value.length > 2 && isEmailValid && ideaText.value.length > 5 && name.value.length > 2){
			const submit = await axios.post('http://localhost:3001/api/post-idea', {
				name: name.value,
				email: email.value,
				ideaText: ideaText.value,
			})

      blog.isOpenedModalFeedback = true
      console.log('success', submit)
		}
    else if( !isEmailValid){
      console.log('ALEEEERt')
    }
  
	} catch(error){
		console.log(error)
	}
}
</script>
<template>
	<div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
<div class="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8  z-20 relative bg-slate-100 rounded-xl bottom-[600px]"  id="modal" >
  <div class="mx-auto max-w-lg text-center ">
    <h1 class="text-2xl font-bold sm:text-3xl">Напишите свою идею</h1>
    <p class="mt-4 text-gray-600">
			мы обязательно рассмотрим ваше предложение и постараемся сделать статью на эту тему!!
    </p>
  </div>

  <form class="mx-auto mb-0 mt-8 max-w-md space-y-4" >
    <div>
      <label class="sr-only" for="email">Email</label>
      <div class="relative">
        <input
          placeholder="Введите свой email"
          class="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          id="email"
          type="email"
          v-model="email"
        />
        <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            class="h-6 w-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label class="sr-only" for="name">Имя</label>
      <div class="relative">
        <input
          placeholder="Введите свое имя"
          class="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          id="name"
          type="text"
          v-model="name"
        />
      
      </div>
    </div>
    <div>
      <label class="sr-only" for="password">Message</label>
      <div class="relative">
        <input
          placeholder="Введите сообщение"
          class="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          id="message"
          type="text"
          v-model="ideaText"
        />
      </div>
			<button
        class="inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5"
        @click="submit()"
      >
        Отправить
      </button>
    </div>
		
  </form>
</div>
<createdModal v-if="blog.isOpenedModalFeedback"/>
</template>