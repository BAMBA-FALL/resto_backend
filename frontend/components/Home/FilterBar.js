import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const FilterBar = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <View style={styles.container}>
    {categories && categories.length > 0 && categories.map((category, index) => (
      <Pressable
        key={index}
        style={[
          styles.category,
          selectedCategory === category && styles.selectedCategory,
        ]}
        onPress={() => handleSelectCategory(category)}
      >
        <Text>{category}</Text>
      </Pressable>
    ))}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  category: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCategory: {
    backgroundColor: 'lightblue',
  },
});

export default FilterBar;
