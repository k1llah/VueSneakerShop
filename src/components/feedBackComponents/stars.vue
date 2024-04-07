<script setup lang="ts">
import { ref } from "vue";
import { useAllStore } from "@/stores/all";
import { useFeedbackStore } from "@/stores/feedback";
const allStore = useAllStore();
const props = defineProps(["prefix", "stats"]);
const rateFeedback = ref(props.stats);
const feedbackStore = useFeedbackStore();
</script>
<template>
  <div class="rating">
    <input
      type="radio"
      :id="'5'"
      name="5"
      value="5"
      v-model="rateFeedback"
      :disabled="!allStore.isOpenedFeedBack"
      @click="console.log('5', feedbackStore.starRating), feedbackStore.starRating = 5"
    />
    <label :for="'5'" @click="feedbackStore.starRating = 5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          pathLength="360"
          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
        ></path>
      </svg>
    </label>
    <input
      type="radio"
      :id="'4'"
      name="4"
      value="4"
      v-model="rateFeedback"
      :disabled="!allStore.isOpenedFeedBack"
      @click="console.log(prefix + '4', feedbackStore.starRating), feedbackStore.starRating = 4"
    />
    <label :for="prefix + '4'" @click="feedbackStore.starRating = 4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          pathLength="360"
          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
        ></path>
      </svg>
    </label>
    <input
      type="radio"
      :id="'3'"
      name="3"
      value="3"
      v-model="rateFeedback"
      :disabled="!allStore.isOpenedFeedBack"
      @click="console.log('3', feedbackStore.starRating), feedbackStore.starRating = 3"
    />
    <label :for="'3'" @click="feedbackStore.starRating = 3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          pathLength="360"
          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
        ></path>
      </svg>
    </label>
    <input
      type="radio"
      :id="'2'"
      name="2"
      value="2"
      v-model="rateFeedback"
      :disabled="!allStore.isOpenedFeedBack"
      @click="console.log('2', feedbackStore.starRating), feedbackStore.starRating = 2"
    />
    <label :for="'2'" @click="feedbackStore.starRating = 2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          pathLength="360"
          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
        ></path>
      </svg>
    </label>

    <input
      type="radio"
      :id="'1'"
      name="1"
      value="1"
      v-model="rateFeedback"
      :disabled="!allStore.isOpenedFeedBack"
      @click="console.log('1', feedbackStore.starRating), feedbackStore.starRating = 1"
    />
    <label :for="'1'" @click="feedbackStore.starRating = 1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          pathLength="360"
          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
        ></path>
      </svg>
    </label>
  </div>
</template>
<style scoped>
.rating {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.3rem;
  --stroke: #666;
  --fill: #ffc73a;
}

.rating input {
  appearance: unset;
}

.rating label {
  cursor: pointer;
}

.rating svg {
  width: 2rem;
  height: 2rem;
  overflow: visible;
  fill: transparent;
  stroke: var(--stroke);

  transition:
    stroke 0.2s,
    fill 0.5s;
}

.rating label:hover svg {
  stroke: var(--fill);
}
.rating input:checked ~ label svg {
  transition: 0s;
  animation:
    idle 4s linear infinite,
    yippee 0.75s backwards;
  fill: var(--fill);
  stroke: var(--fill);
  stroke-opacity: 0;
  stroke-dasharray: 0;
  stroke-linejoin: miter;
  stroke-width: 8px;
}

@keyframes yippee {
  0% {
    transform: scale(1);
    fill: var(--fill);
    fill-opacity: 0;
    stroke-opacity: 1;
    stroke: var(--stroke);
    stroke-width: 1px;
  }

  30% {
    transform: scale(0);
    fill: var(--fill);
    fill-opacity: 0;
    stroke-opacity: 1;
    stroke: var(--stroke);
    stroke-width: 1px;
  }

  30.1% {
    stroke: var(--fill);
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
  }

  60% {
    transform: scale(1.2);
    fill: var(--fill);
  }
}
</style>
