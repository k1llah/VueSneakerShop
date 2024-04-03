<script setup lang="ts">
	import templateFeedBack from '@/components/feedBackComponents/templateFeedback.vue';
	import { useAllStore } from '@/stores/all';
	import modalFeedback from '@/components/feedBackComponents/modalFeedback.vue';
	let allStore = useAllStore();

	console.log(allStore.isOpenedFeedBack)
</script>
<template >
  <div class="flex justify-end pr-10">
    <button class="cssbuttons-io-button" @click="allStore.isOpenedFeedBack = true">
  Оставить отзыв
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

  </div>
<div class="flex flex-col items-center mt-12 container-bg p-10 h-full">
  
<templateFeedBack :rate="3"/>

</div>
<div v-if="allStore.isOpenedFeedBack == true">
  
<modalFeedback/>
</div>


</template>










<style scoped>
.container-bg {
  width: 100%;
  height: 100%;
  --s: 60px;
  --c1: #180a22;
  --c2: #5b42f3;
  --_g: radial-gradient(
    25% 25% at 25% 25%,
    var(--c1) 99%,
    rgba(0, 0, 0, 0) 101%
  );
  background:
    var(--_g) var(--s) var(--s) / calc(2 * var(--s)) calc(2 * var(--s)),
    var(--_g) 0 0 / calc(2 * var(--s)) calc(2 * var(--s)),
    radial-gradient(50% 50%, var(--c2) 98%, rgba(0, 0, 0, 0)) 0 0 / var(--s)
      var(--s),
    repeating-conic-gradient(var(--c2) 0 50%, var(--c1) 0 100%)
      calc(0.5 * var(--s)) 0 / calc(2 * var(--s)) var(--s);
}



.cssbuttons-io-button {
  background: #a370f0;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}

</style>