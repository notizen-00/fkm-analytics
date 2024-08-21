// src/services/apiService.js
import axios from 'axios';

export const apiService = {
  async get(url, params = {}) {
    const token = import.meta.env.VITE_APP_API_KEY;

    try {
      const response = await axios.get(url, {
        headers: {
          'xc-token': token,
        },
        params, // Optional query parameters
      });
      return response.data;
    } catch (error) {
      console.error('GET API Error:', error);
      throw error;
    }
  },

  async post(url, data) {
    const token = import.meta.env.VITE_APP_API_KEY;

    try {
      const response = await axios.post(url, data, {
        headers: {
          'xc-token': token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('POST API Error:', error);
      throw error;
    }
  },

  async put(url, data) {
    const token = import.meta.env.VITE_APP_API_KEY;

    try {
      const response = await axios.put(url, data, {
        headers: {
          'xc-token': token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('PUT API Error:', error);
      throw error;
    }
  },

  async delete(url) {
    const token = import.meta.env.VITE_APP_API_KEY;

    try {
      const response = await axios.delete(url, {
        headers: {
          'xc-token': token,
        },
      });
      return response.data;
    } catch (error) {
      console.error('DELETE API Error:', error);
      throw error;
    }
  },
};
