import { defineStore } from 'pinia'
import { apiService } from '../../network/apiService';
import axios from 'axios';

export const useKeywordStores = defineStore('keywordStore', {
  state: () => ({
    overlay: false,
    data:[],
    apiUrl:import.meta.env.VITE_APP_API_URL

  }),
  actions: {
    toggleOverlay(){
        this.overlay = !this.overlay
    },
    async fetchData(){
    
    const url = `${this.apiUrl}mcrowvqolo4qwzk/records?limit=25&shuffle=0&offset=0`;
    try {
        const data = await apiService.get(url);
        this.data = data.list;
    } catch (error) {
        alert(error.message);
    }
    }
  
  },
  getters: {
    isOverlayActive() {
      return this.overlay
    },
    getData()
    {
        return this.data
    }

  },
  persist:true
})
