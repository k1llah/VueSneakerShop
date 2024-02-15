<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
import { md5 } from "js-md5";
import { ref } from "vue";
const passwordsMatch = ref(true);
const nameNotEmpty = ref(true);
const isSuccessSignUp = ref(false);
const submitForm = async (event: Event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  const name = document.getElementById("Name") as HTMLInputElement;
  const email = document.getElementById("Email") as HTMLInputElement;
  const password = document.getElementById("Password") as HTMLInputElement;
  const password_confirmation = document.getElementById(
    "Password_confirmation"
  ) as HTMLInputElement;

  if (
    name.value !== "" &&
    email &&
    password.value === password_confirmation.value &&
    password.value.length >= 6 &&
    name.value.length >= 2
  ) {
    try {
      const create = await axios.post("http://localhost:3001/api/create", {
        name: name.value,
        email: email.value,
        password: md5(password.value).toString(),
      });
      nameNotEmpty.value = true;
      passwordsMatch.value = true;
      isSuccessSignUp.value = true;
      window.location.reload();
        name.value = "";
        email.value = "";
        password.value = "";
        password_confirmation.value = "";
    } catch (err) {
      console.log(err);
      isSuccessSignUp.value = true;
    }
  } else {
    nameNotEmpty.value = name.value !== "" && name.value.length >= 2; // Проверяем заполнено ли поле Имя
    passwordsMatch.value = password.value === password_confirmation.value;
  }
  if (password.value === password_confirmation.value && name.value.length >= 2){
    passwordsMatch.value = true;
    nameNotEmpty.value = true;
}
};


// Вызываем clickSubmit при монтировании компонента
onMounted(() => {
  submitForm;
});
</script>
<template>
  <div
    class="max-w-[370px] m-auto mt-5 relative flex flex-col p-4 rounded-md text-black bg-white"
    flex
    items-center
  >
    <form class="flex flex-col gap-3" @submit="submitForm">
      <div v-if="isSuccessSignUp">
          <p class="text-lg text-center text-green-700">Поздравляем, вы успешно зарегистрировались!</p>
        </div>
      <div class="block relative">
        <label
          for="Name"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Имя
          </label
        >
        <div v-if="!nameNotEmpty">
          <p class="text-sm text-red-500">Поле Имя должно содержать минимум два символа</p>
        </div>
        <input
          type="name"
          minlength="2"
          id="Name"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>

      <div class="block relative">
        <label
          for="Email"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Email</label
        >
        <input
          type="email"
          id="Email"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>

      <div class="block relative">
        <label
          for="password"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Пароль</label
        >
        <input
          type="password"
          id="Password"
          minlength="6"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>
      <div class="block relative">
        <label
          for="password"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Подтвердите пароль</label
        >
        <input
          type="password"
          id="Password_confirmation"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>
      <div v-if="!passwordsMatch">
        <p class="text-sm text-red-500">Пароли не совпадают</p>
      </div>
      <div>
        <a class="text-sm text-[#7747ff]" href="#">Forgot your password? </a>
      </div>
      <button
        class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        id="buttonSubmit"
        @click="submitForm"
        type="submit"
      >
        Submit
      </button>
    </form>
    <div class="text-sm text-center mt-[1.6rem]">
      Уже есть аккаунт?
      <router-link to="profile">
        <p class="text-sm text-[#7747ff]" >Войдите!</p>
      </router-link>
    </div>
  </div>
</template>
