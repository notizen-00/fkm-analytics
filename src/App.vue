<script setup>
import { ref } from "vue";
import ProgresLinear from "./components/ProgresLinear.vue";
import City from "@/containers/progressLinear/City.vue";
import Browser from "@/containers/progressLinear/Browser.vue";
import Keyword from "@/containers/progressLinear/Keyword.vue";
import Lokasi from "@/containers/progressLinear/Lokasi.vue";

const countryColors = {
  US: "#2200AA",
  CA: "red",
  UK: "rgba(200, 200, 255, 0.1)",
};
const options = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
});

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

      <City></City>
      <Browser></Browser>
    </div>
    <div class="container w-full flex justify-center h-1/2 mx-auto">
      <!-- <apexchart
        width="500"
        title="Data Contoh"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart> -->

      <Lokasi></Lokasi>
      <Keyword></Keyword>
    </div>
  </body>
</template>
