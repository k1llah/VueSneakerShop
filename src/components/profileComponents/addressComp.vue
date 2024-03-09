<script setup lang="ts">
import { ref, watch } from "vue";
import { defineProps } from "vue";
import { useAllStore } from "@/stores/all";
import axios from "axios";
const props = defineProps({
  id: Number,
  firstName: String,
  lastName: String,
  surname: String,
  phoneNumber: String,
  city: String,
  postalCode: Number,
  street: String,
  buildingNumber: String,
  houseNumber: Number,
  apartment: Number,
  editAddress: Function,
  deleteAddress: Function,
});

const allStore = useAllStore();
const deleteAddress = async()=>{
  try{
    const data = await axios.post('http://localhost:3001/api/delete-address',{
      id: props.id,
      userId: localStorage.getItem('id'),
    })

  } catch(error){
    console.log(error)
  }
}
</script>
<template>
  <div class="bg-[#f4f4f5] md:max-w-[350px] rounded-xl p-5 mt-5 shadow">
    <div class="flex flex-col md:text-[18px] sm:text-[14px]">
      <div class="flex flex-col gap-2 justify-around">
        <p>
          Фамилия:
          <span class="font-[600] text-base text-slate-500">{{
            lastName
          }}</span>
        </p>
        <p>
          Имя:
          <span class="font-[600] text-base text-slate-500">{{
            firstName
          }}</span>
        </p>
        <p>
          Отчество:
          <span class="font-[600] text-base text-slate-500">{{ surname }}</span>
        </p>
        <p>
          Номер телефона:
          <span class="font-[600] text-base text-slate-500">{{
            phoneNumber
          }}</span>
        </p>

        <p>
          Город:
          <span class="font-[600] text-base text-slate-500">{{ city }}</span>
        </p>
        <p>
          Почтовый индекс:
          <span class="font-[600] text-base text-slate-500">{{
            postalCode
          }}</span>
        </p>
        <p>
          Улица:
          <span class="font-[600] text-base text-slate-500">{{ street }}</span>
        </p>
        <p>
          Номер дома:
          <span class="font-[600] text-base text-slate-500">{{
            houseNumber
          }}</span>
        </p>

        <p>
          Номер квартиры:
          <span class="font-[600] text-base text-slate-500">{{
            apartment
          }}</span>
        </p>
        <p>
          Корпус:
          <span class="font-[600] text-base text-slate-500">{{
            buildingNumber
          }}</span>
        </p>
      </div>
      <div class="flex justify-end gap-3">
        <button
          class="w-[54px] h-[54px] hover:transition-all duration-200 hover:bg-blue-400 text-3xl rounded-xl"
          @click="allStore.targetPage = 'editAddress', allStore.idAddress = props.id!, allStore.headerText = 'Редактирование адреса'"
        >
          ⚙️
        </button>
        <button
          class="w-[54px] h-[54px] hover:transition-all duration-200 hover:bg-red-600 text-2xl rounded-xl"
          @click="deleteAddress()"
        >
          🗑️
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shadow {
  -webkit-box-shadow: 15px 4px 40px 7px rgba(34, 60, 80, 0.22);
  -moz-box-shadow: 15px 4px 40px 7px rgba(34, 60, 80, 0.22);
  box-shadow: 15px 4px 40px 7px rgba(34, 60, 80, 0.22);
}
</style>
