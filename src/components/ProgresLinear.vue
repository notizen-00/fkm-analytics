<template>
  <div class="min-h-20">
    <!-- Loop through the provided data array -->
    <div
      v-for="(item, index) in data"
      :key="index"
      class="w-full bg-gray-600 bg-opacity-40 rounded-sm dark:bg-gray-600 dark:bg-opacity-40 p-1 relative mb-1"
    >
      <!-- Progress Bar Background -->
      <div
        class="absolute inset-0 bg-gray-600 bg-opacity-90 rounded-sm"
        :style="{
          width: calculatePercentage(item[valueKey]) + '%',
          height: '100%',
        }"
      ></div>

      <!-- Text and Indicators -->
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">
          <div :class="iconClass">
            <i :class="icon"></i>
          </div>
          <span class="ml-3 text-gray-300">{{ item[labelKey] }}</span>
        </div>
        <div class="text-gray-300 font-semibold">
          {{ item[valueKey] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// Props to make the component reusable
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  iconClass: {
    type: String,
    required: false,
  },
  labelKey: {
    type: String,
    required: true,
  },
  valueKey: {
    type: String,
    required: true,
  },
  fetchData: {
    type: Function,
    required: true,
  },
});

onMounted(() => {
  if (typeof props.fetchData === "function") {
    props.fetchData();
  }
});

// Function to calculate percentage
function calculatePercentage(value) {
  const total = props.data.reduce((sum, item) => sum + item[props.valueKey], 0);
  return ((value / total) * 100).toFixed(2);
}
</script>
