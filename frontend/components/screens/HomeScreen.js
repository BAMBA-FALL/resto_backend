import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AnimalCard from '../Home/AnimalCard';
import AnimalService from '../services/AnimalService';
import { useTheme } from '../Theme/ThemeContext'; // Assurez-vous que le chemin est correct
const HomeScreen = () => {
  const { darkMode } = useTheme();
  // Variables d'état
  const [animaux, setAnimaux] = useState([]);

  // Effect
  // Récupère les données des animaux
  useEffect(() => {
    const fetchAnimaux = async () => {
      try {
        const data = await AnimalService.getAllAnimals();
        setAnimaux(data.animals); // Met à jour la liste des animaux
      } catch (error) {
        console.error('Erreur de récupération des animaux :', error.message);
      }
    };

    // Exécute la fonction fetchAnimaux une fois
    fetchAnimaux();
  }, []);

  // Composants
  return (
    <View style={darkMode ? styles.containerDark : styles.container}>
      <FlatList
        data={animaux}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <AnimalCard animal={item} />}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#000000', // Couleur de fond en mode sombre
  },
});

export default HomeScreen;
