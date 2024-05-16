import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '../Theme/ThemeContext'; // Assurez-vous que le chemin est correct

const ProfileScreen = () => {
  const { darkMode } = useTheme(); // Utilisez useTheme ici

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      {userProfile ? (
        <View>
          <Text style={[styles.title, darkMode && styles.darkModeTitle]}>User Profile</Text>
          <Text style={darkMode ? styles.darkModeText : styles.text}>Username: {userProfile.username}</Text>
          <Text style={darkMode ? styles.darkModeText : styles.text}>Name: {userProfile.name}</Text>
          <Text style={darkMode ? styles.darkModeText : styles.text}>Email: {userProfile.email}</Text>
          {/* Ajoutez d'autres informations de profil ici */}
        </View>
      ) : (
        <Text style={darkMode ? styles.darkModeText : styles.text}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Couleur par défaut
  },
  darkModeContainer: {
    backgroundColor: '#000000', // Couleur en mode sombre
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333', // Couleur par défaut
  },
  darkModeTitle: {
    color: '#ffffff', // Couleur en mode sombre
  },
  text: {
    color: '#333333', // Couleur par défaut
  },
  darkModeText: {
    color: '#ffffff', // Couleur en mode sombre
  },
});

export default ProfileScreen;
