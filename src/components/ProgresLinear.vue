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
        :style="{ width: item[valueKey] + '%', height: '100%' }"
      ></div>

      <!-- Text and Indicators -->
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">
          <div class="bg-gray-700 rounded-full w-2.5 h-2.5"></div>
          <span class="ml-3 text-gray-300">{{ item[labelKey] }}</span>
        </div>
        <div class="text-gray-300 font-semibold">{{ item[valueKey] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

// Props to make the component reusable
const props = defineProps({
  data: {
    type: Array,
    required: true,
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
</script>
