import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import axios from 'axios'
const AuthenticationService = {
  login: async (email, password, navigation) => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password });
      if (response.data.success) {
        if (navigation) {
          navigation.navigate('/'); // Redirige vers la page Home après une connexion réussie
        }
        await AsyncStorage.setItem('token', response.data.token); // Enregistrer le token dans AsyncStorage
      } else {
        throw new Error('Identifiants invalides. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.message);
      Alert.alert('Erreur de connexion', 'Identifiants invalides. Veuillez réessayer.');
    }
  },
  register: async (username, name, email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/api/register', { username, name, email, password });
  
      if (response.data.success && response.data.token) {
        return response.data;
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      throw new Error('Error during registration: ' + error.message);
    }
  },

  getProfile: async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get('http://localhost:4000/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        console.log('Profil utilisateur :', response.data.data);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du profil utilisateur :', error.message);
      Alert.alert('Erreur de récupération du profil', error.message);
    }
  },

  // Ajoutez d'autres méthodes d'authentification si nécessaire
};

export default AuthenticationService;
