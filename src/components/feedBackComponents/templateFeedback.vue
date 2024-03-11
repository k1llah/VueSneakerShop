<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  id: Number,
  author: String,
  image: String,
  text: String,
  rate: Number || String,
});

const stars = [1, 2, 3, 4, 5];
</script>
<template>
  <div class="">

  <div class="flex flex-col gap-6 border-2 border-slate-300 p-10 rounded-xl bg-[#e5e7eb] max-w-[350px] justify-center items-center m-auto shadow">
		<div class="w-full">
			<p class="text-xl pb-3">
				{{ author }}
        Автор - какой то чел
			</p>
			<img src="/sneakers/conv.jpeg"  alt="sneaker" class="w-full h-64 p-2 m-auto" />
			<p class="text-lg mt-3">
				{{ text }}
				лучший магазин очень доволен покупкой хотел бы купить еще, смело советую всем знакомым!!
			</p>
		</div>
    <div>
      <div class="radio-input">
        <input
          value="value-1"
          name="value-radio"
          id="value-1"
          type="radio"
          class="star s1"
        />
        <input
          value="value-2"
          name="value-radio"
          id="value-2"
          type="radio"
          class="star s2"
        />
        <input
          value="value-3"
          name="value-radio"
          id="value-3"
          type="radio"
          class="star s3"
        />
        <input
          value="value-4"
          name="value-radio"
          id="value-4"
          type="radio"
          class="star s4"
        />
        <input
          value="value-5"
          name="value-radio"
          id="value-5"
          type="radio"
          class="star s5"
        />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.radio-input {
  display: flex;
  scale: 0.15;
  transform: rotate(180deg);
}

.star {
  margin: 1em;
  appearance: none;
  --color: white;
  border-left: 6.4721359549996em solid transparent;
  border-right: 6.4721359549996em solid transparent;
  border-bottom: 4em solid var(--color);
  transform: rotate(0deg);
  cursor: pointer;
}

.star:before {
  content: "";
  border-left: 6.4721359549996em solid transparent;
  border-right: 6.4721359549996em solid transparent;
  border-top: 4em solid var(--color);
  position: absolute;
  left: -6.4721359549996em;
  transform: rotate(108deg);
}

.star:after {
  content: "";
  border-left: 6.4721359549996em solid transparent;
  border-right: 6.4721359549996em solid transparent;
  border-top: 4em solid var(--color);
  position: absolute;
  left: -6.4721359549996em;
  transform: rotate(253deg);
}

.radio-input > .star:hover ~ .star,
.radio-input > .star:hover,
.radio-input > .star:checked ~ .star,
.radio-input > .star:checked {
  --color: yellow;
}

.radio-input > .star:checked ~ .star,
.radio-input > .star:checked {
  animation: rotate 0.5s linear forwards;
  transform: rotate(360deg);
  transition: transform 0.3s;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    scale: 1.5;
  }
  100% {
    transform: rotate(360deg);
  }
}
.shadow{
  -webkit-box-shadow: -4px 17px 47px 12px rgba(34, 60, 80, 0.25);
-moz-box-shadow: -4px 17px 47px 12px rgba(34, 60, 80, 0.25);
box-shadow: -4px 17px 47px 12px rgba(34, 60, 80, 0.25);
}
</style>
