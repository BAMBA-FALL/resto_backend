import axios from 'axios';
import { API_BASE_URL } from './constants';

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const animalAPI = {
  fetchAnimals: async () => {
    try {
      const response = await API.get('/animals');

      if (response.status !== 200) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }

      return response.data;
    } catch (error) {
      console.error('Error fetching animals:', error);
      throw error;
    }
  },

};

export default animalAPI;
