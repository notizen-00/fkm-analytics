import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import 'vuetify/styles'
import {pinia} from './store/pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {useStore} from './store/modules'

const vuetify = createVuetify({
  components,
  directives,
})
createApp(App)
.use(vuetify)
.use(pinia)
.provide('store',useStore())
.use(VueApexCharts)
.mount('#app')
