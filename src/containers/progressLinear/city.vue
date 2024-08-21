<template>
  <div class="w-1/3 bg-gray-600 bg-opacity-40 rounded-lg items-end mx-1 my-5">
    <div class="text-white mt-5 ml-3 font-bold">Kota</div>
    <div class="text-slate-400 ml-3 mt-1 font-bold text-sm">sources</div>

    <div class="container px-2 mt-10 overflow-y-hidden max-h-60">
      <ProgressLinear
        :data="cityData"
        labelKey="Kota"
        valueKey="Jumlah Pengunjung"
        :fetchData="fetchCityData"
      />
    </div>

    <div class="flex justify-center w-full">
      <button
        class="mt-4 mb-5 bg-blue-500 bg-opacity-90 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
      >
        <i class="fa-duotone fa-expand mr-1"></i> Detail
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import ProgressLinear from "@/components/ProgresLinear.vue";
import { storeToRefs } from "pinia";
const store = inject("store");
const { getData: cityData } = storeToRefs(store.cityStore);

function fetchCityData() {
  store.cityStore.fetchData();
}
</script>
