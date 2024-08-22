<template>
  <div
    class="w-1/3 bg-gray-600 bg-opacity-40 rounded-lg items-end mx-1 my-5 relative"
  >
    <div class="text-white mt-5 ml-3 font-bold">Browser Statistik</div>

    <div class="container px-2 mt-2 overflow-y-hidden max-h-60">
      <div class="flex justify-between w-full">
        <div class="text-slate-400 text-sm font-bold py-2">Browser</div>
        <div class="text-slate-400 text-sm font-bold py-2">Pengunjung</div>
      </div>
      <ProgressLinear
        :data="browserData"
        icon="fa-duotone fa-globe text-blue-400"
        iconClass="pt-1"
        labelKey="Nama Browser"
        valueKey="Jumlah Pengunjung"
        :fetchData="fetchCityData"
      />
    </div>

    <div class="flex justify-center w-full">
      <button
        class="mt-4 mb-5 bg-blue-500 absolute bottom-0 bg-opacity-90 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
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
const { getData: browserData } = storeToRefs(store.browserStore);

function fetchCityData() {
  store.browserStore.fetchData();
}
</script>
