<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
import { md5 } from "js-md5";
import { ref } from "vue";
const passwordsMatch = ref(false);
const nameNotEmpty = ref(true);
const passwordLengthValid = ref(true);
const passwordContainsLetter = ref(true);
const emailValid = ref(true);
const passwordReport = ref("");
const isSuccessSignUp = ref(false);
const textSuccessSignUp = ref("");
let timer = ref(5);
const isTimerStarted = ref(false);
let localStorageMatch = ref(false);
const submitForm = async (event: Event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  const name = (document.getElementById("Name") as HTMLInputElement).value;
  const email = (document.getElementById("Email") as HTMLInputElement).value;
  const password = (document.getElementById("Password") as HTMLInputElement)
    .value;
  const password_confirmation = (
    document.getElementById("Password_confirmation") as HTMLInputElement
  ).value;

  nameNotEmpty.value = name.length >= 2;
  emailValid.value = email.includes("@");
  passwordLengthValid.value = password.length >= 6;
  passwordContainsLetter.value = /[a-zA-Z]/.test(password);

  const startTimer = () => {
    if (!isTimerStarted.value) {
      isTimerStarted.value = true;
      const interval = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(interval);
          isTimerStarted.value = false;
        }
      }, 1000);
    }
    
  };
  
  if (
    nameNotEmpty.value &&
    emailValid.value &&
    passwordLengthValid.value &&
    passwordContainsLetter.value &&
    password === password_confirmation
  ) {
    try {
      const create = await axios.post("http://localhost:3001/api/createUser", {
        name: name,
        email: email,
        password: md5(password).toString(),
      });
      isSuccessSignUp.value = true;
      textSuccessSignUp.value = "Вы успешно зарегистрировались!";
      const infoUser = await create.data;
      localStorage.id = infoUser.id;
      localStorage.uuid = infoUser.uuid;
      startTimer();
      isTimerStarted.value = true
      localStorageMatch.value = true;
      await setTimeout( async () => {await location.assign("/");}, 5000)
      
    } catch (err) {
      console.error(err);
      isSuccessSignUp.value = false;
      textSuccessSignUp.value =
        "Произошла ошибка при регистрации. Пожалуйста, попробуйте попробуйте позже";
    }
    passwordsMatch.value = true;
  } else {
    passwordsMatch.value = false;
    passwordReport.value = "Пожалуйста, исправьте ошибки в форме.";
  }
};

// Вызываем clickSubmit при монтировании компонента
onMounted(() => {
  submitForm;
});
</script>
<template>
  
  <div
    class="flex mt-[50px] items-center flex-col"
    v-if="isSuccessSignUp == false"
  >
    <h3 class="text-[28px] font-light">
      <span class="text-[#7747ff]">Зарегистрируйтесь</span>
    </h3>
  </div>

  <div
    class="max-w-[370px] m-auto mt-5 relative flex flex-col p-4 rounded-md text-black bg-white"
    
  >
  <div v-if="isSuccessSignUp == true" class="mt-[100px]" >
        <p class="text-lg text-center text-green-700">
          {{ textSuccessSignUp }}
        </p>
      </div>
      <div v-if="isTimerStarted == true" class="flex mt-[50px] items-center flex-col text-center justify-center">
      <p class="text-[27px] font-light">
        Вы перенаправитесь на главную страницу через:
        <span class="text-[#7747ff] text-[25px]">{{ timer }}</span>
      </p>
    </div>
  <div v-else-if="isSuccessSignUp == false" >
        <p class="text-lg text-center text-red-700">
          {{ textSuccessSignUp }}
        </p>
      </div>
  <form class="flex flex-col gap-3" @submit="submitForm" v-if="isSuccessSignUp == false">
     
      <div class="block relative">
        <label
          for="Name"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Имя</label
        >
        <div v-if="!nameNotEmpty">
          <p class="text-sm text-red-500">
            Поле Имя должно содержать минимум два символа
          </p>
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
        <div v-if="!emailValid">
          <p class="text-sm text-red-500">
            Пожалуйста, введите корректный email
          </p>
        </div>
        <input
          type="email"
          id="Email"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>

      <div class="block relative">
        <label
          for="Password"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Пароль</label
        >
        <div v-if="!passwordLengthValid">
          <p class="text-sm text-red-500">
            Пароль должен содержать минимум шесть символов
          </p>
        </div>
        <div v-if="!passwordContainsLetter">
          <p class="text-sm text-red-500">
            Пароль должен содержать хотя бы одну букву
          </p>
        </div>
        <input
          type="password"
          id="Password"
          minlength="6"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>
      <div class="block relative">
        <label
          for="Password_confirmation"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Подтвердите пароль</label
        >
        <div v-if="!passwordsMatch">
          <p class="text-sm text-red-500">{{ passwordReport }}</p>
        </div>
        <input
          type="password"
          id="Password_confirmation"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>
      <div>
        <a class="text-sm text-[#7747ff]" href="#">Forgot your password? </a>
      </div>
      <button
        class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
        id="buttonSubmit"
        type="submit"
      >
        Submit
      </button>
      <div class="text-sm text-center mt-[1.6rem]">
        Уже есть аккаунт?
        <router-link to="profile">
          <p class="text-sm text-[#7747ff]">Войдите!</p>
        </router-link>
      </div>
    </form>
  </div>
</template>
// Сделать проверку при загрузке сайта что данные из локал стораджа соответствуют данным из бд 
так же надо сделать так чтобы когда чел регался и ждал перенаправки, не мог никуда нажать 
реализовать вход в профиль, сделать так чтобы когда чел зарегался у него пропадало поле входа и появлялся профиль наконец то 
так же надо сделать так чтобы при регистрации нельзя было использовать символы в имени и убрать проверку на пароль, тк в коде я сам это прописал 