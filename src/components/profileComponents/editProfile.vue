<script setup lang="ts">
import buttonProfile from "@/components/buttonProfile.vue";
import axios from "axios";
import { ref, watch, onMounted } from "vue";

const email = ref("");
const first_name = ref("");
const lastName = ref("");
const profileImg = ref("");
const getData = async function () {
  const uuid = localStorage.getItem("uuid");
  const id = localStorage.getItem("id");
  try {
    let infoUser = await axios.post("http://localhost:3001/api/get-data", {
      uuid,
      id,
    });
    let data = infoUser.data;
    email.value = data.user.email;
    first_name.value = data.user.first_name;
    lastName.value = data.user.last_name;
    profileImg.value = data.user.profileImg;
    if (lastName.value == null) {
      lastName.value = "Не указано";
    }
    console.log(data.value);
    console.log(email.value);
    console.log(first_name.value);
    console.log(lastName.value);
  } catch (error) {
    console.log(error);
  }
};




let newImageProfile = ref("");
const submitForm = async (event: Event) => {

}
onMounted(() => {
  submitForm;
});
</script>

<template>
  <div class="flex gap-5 items-center">
    <buttonProfile />
    <h2 class="text-3xl">Редактирование профиля</h2>
  </div>

  <div class="m-auto flex flex-col items-center mt-10 gap-9">
    <div>
      <img
        src="/prof.jpeg"
        alt="profile image"
        class="w-[150px] rounded-[50%]"
      />
    </div>
    <div class="flex gap-5">
      <p class="text-lg">Загрузить свое фото</p>
      <button
        class="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
      >
        <svg
          class="w-4 h-4"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    </div>

    <form class="flex flex-col gap-5" @submit="submitForm">
      <div>
        <label for="inputname" class="block text-gray-800 font-semibold text-sm"
          >Фамилия</label
        >
        <div class="mt-2">
          <input
            type="text"
            name="lastName"
            id="lastName"
            class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            v-model="lastName"
          />
        </div>
        <label class="pt-1 block text-gray-500 text-sm">Some Description</label>
      </div>
      <div>
        <label for="inputname" class="block text-gray-800 font-semibold text-sm"
          >Имя</label
        >
        <div class="mt-2">
          <input
            type="text"
            name="inputname"
            id="name"
            class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            v-model="first_name"
          />
        </div>
        <label class="pt-1 block text-gray-500 text-sm">Some Description</label>
      </div>
      <div>
        <label
          for="inputEmail"
          class="block text-gray-800 font-semibold text-sm"
          >Email</label
        >
        <div class="mt-2">
          <input
            type="email"
            name="inputEmail"
            id="email"
            class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            v-model="email"
          />
        </div>
        <label class="pt-1 block text-gray-500 text-sm">Some Description</label>
      </div>
			<div class="flex gap-5">
				<button
					type="submit"
					class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
				>
					Submit
				</button>
				<button
					class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
				>
					Cancel
				</button>
			</div>
    </form>
  </div>
</template>
