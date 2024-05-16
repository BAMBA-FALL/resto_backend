// DogList.js
import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import DogCard from '../components/DogCard';
import { cardStyles } from '../components/CardStyle';

const typesOfDogs = [
  { id: '1', type: 'Type 1', image: require('../assets/images/telecharger.jpg') },
  { id: '2', type: 'Type 2', image: require('../assets/images/telecharger.jpg') },
  { id: '3', type: 'Type 3', image: require('../assets/images/telecharger.jpg') },
  // Ajoutez d'autres types de chiens si nécessaire
];

const dogsData = [
  { id: '1', name: 'Dog 1', breed: 'Breed 1', age: '2 years', imageSrc: require('../assets/images/chien1.jpg') },
  { id: '2', name: 'Dog 2', breed: 'Breed 2', age: '3 years', imageSrc: require('../assets/images/chien.jpg') },
  { id: '2', name: 'Dog 2', breed: 'Breed 2', age: '3 years', imageSrc: require('../assets/images/chien.jpg') },
  // Ajoutez d'autres chiens si nécessaire
];

const DogList = () => {
  return (
    <View>
      {/* Liste horizontale des types de chiens */}
      <FlatList
        data={typesOfDogs}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View key={item.id} style={cardStyles.dogType}>
            <Image source={item.image} style={cardStyles.dogTypeImage} />
            <Text style={cardStyles.dogTypeText}>{item.type}</Text>
          </View>
        )}
      />

      {/* Liste verticale des cartes de chiens */}
      <FlatList
        data={dogsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DogCard
            title={item.name}
            description={`Breed: ${item.breed}\nAge: ${item.age}`}
            imageSrc={item.imageSrc}
          />
        )}
      />
    </View>
  );
};

export default DogList;
