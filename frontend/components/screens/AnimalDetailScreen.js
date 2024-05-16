// AnimalDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnimalDetailScreen = ({ route }) => {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {animal.name}</Text>
      <Text>Type: {animal.type}</Text>
      <Text>Age: {animal.age}</Text>
      <Text>Description: {animal.description}</Text>
      {/* Ajoutez d'autres informations détaillées ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AnimalDetailScreen;
