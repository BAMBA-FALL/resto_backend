// DogCard.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { cardStyles } from './CardStyle';

const DogCard = ({ name, breed, age, imageSrc }) => {
  return (
    <View style={cardStyles.card}>
      {imageSrc && <Image source={{ uri: imageSrc }} style={cardStyles.cardImage} />}
      <View style={cardStyles.cardContent}>
        <Text style={cardStyles.cardTitle}>{name}</Text>
        <Text style={cardStyles.cardText}>Breed: {breed}</Text>
        <Text style={cardStyles.cardText}>Age: {age}</Text>
        {/* Ajoutez d'autres informations si nécessaire */}
      </View>
    </View>
  );
};

export default DogCard;
