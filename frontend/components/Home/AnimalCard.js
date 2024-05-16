import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useTheme } from '../Theme/ThemeContext'; // Assurez-vous que le chemin est correct

const AnimalCard = ({ animal }) => {
  const { darkMode } = useTheme();
  const { name, type, age, description, imageUrl } = animal;

  // Assurez-vous de remplacer 'http://localhost:4000' par le chemin correct de votre serveur
  const serverBaseUrl = 'http://localhost:4000';

  return (
    <Pressable>
      <View style={darkMode ? styles.cardDark : styles.card}>
        <Image style={styles.image} source={{ uri: `${serverBaseUrl}/${imageUrl}` }} />
        <View style={styles.details}>
          <Text style={darkMode ? styles.textDark : styles.text}>Name: {name}</Text>
          <Text style={darkMode ? styles.textDark : styles.text}>Type: {type}</Text>
          <Text style={darkMode ? styles.textDark : styles.text}>Age: {age}</Text>
          <Text style={darkMode ? styles.textDark : styles.text}>Description: {description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    flexDirection: 'column',
  },
  cardDark: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#333', // Fond en mode sombre
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  text: {
    color: '#333', // Couleur du texte en mode clair
  },
  textDark: {
    color: '#fff', // Couleur du texte en mode sombre
  },
});

export default AnimalCard;
