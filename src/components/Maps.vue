<template>
  <WorldMapVue
    :country-data="editSubscriptionCountryData"
    :show-overlay="showMapOverlay"
    @mouseenter="onMouseEnterMapCountry"
    @mouseleave="onMouseLeaveMapCountry"
    @click="onClickMapCountry"
  >
    <template v-slot:overlay>
      <!-- Your components here -->
    </template>
  </WorldMapVue>
</template>

<script setup>
import { ref } from "vue";
import WorldMapVue from "vue-world-map";
// Props
const props = defineProps({
  editSubscriptionCountryData: {
    type: Object,
    required: true,
  },
});

// Reactive variables
const showMapOverlay = ref(false);

// Methods
function onMouseEnterMapCountry(countryCode) {
  showMapOverlay.value = true;
  // Update your data/property to be displayed on the overlay.
}

function onMouseLeaveMapCountry() {
  showMapOverlay.value = false;
}

function onClickMapCountry(data) {
  console.log("Click Country", data);
}
</script>
