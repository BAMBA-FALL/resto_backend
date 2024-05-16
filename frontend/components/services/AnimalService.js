// Services/AnimalService.js
import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api';

const AnimalService = {
  async getAllAnimals() {
    try {
      const response = await axios.get(`${BASE_URL}/animals`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching animals');
    }
  },

  async getAnimalById(animalId) {
    try {
      const response = await axios.get(`${BASE_URL}/animals/${animalId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching animal details');
    }
  },

  // Autres fonctions pour les opérations sur les animaux
};

export default AnimalService;
