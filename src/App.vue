<script setup>
import { ref } from "vue";

const options = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
});

const series = ref([
  {
    name: "Vue Chart",
    data: [30, 40, 45, 50, 49, 60, 70, 81],
  },
]);

function updateChart() {
  const max = 90;
  const min = 20;
  const newData = series.value[0].data.map(() => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });
  series.value = [
    {
      name: "Vue Chart",
      data: newData,
    },
  ];
}
</script>

<template>
  <body class="bg-gray-900 h-screen">
    <div class="container w-full flex justify-center h-1/2 mx-auto">
      <!-- <apexchart
        width="500"
        title="Data Contoh"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart> -->

      <div class="w-1/3 bg-gray-600 bg-opacity-40 items-end mx-3 my-10">
        <div class="text-white mt-5 ml-3 font-bold">Top Sources</div>
        <div class="text-slate-400 ml-3 mt-1 font-bold text-sm">sources</div>
      </div>

      <div class="w-1/3 bg-gray-600 bg-opacity-40 items-end mx-3 my-10">
        <div class="text-white mt-5 ml-3 font-bold">Top Sources</div>
        <div class="text-slate-400 ml-3 mt-1 font-bold text-sm">sources</div>
      </div>
    </div>
  </body>
</template>
