import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simuler un chargement pendant quelques secondes puis naviguer vers l'écran d'accueil
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000); // Navigue vers l'écran d'accueil après 3 secondes (exemple)
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <ActivityIndicator size="large" color="blue" />
      {/* Vous pouvez ajouter une animation ou du contenu supplémentaire ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
