import React from 'react';
import { View, Text, StyleSheet, Button, Switch } from 'react-native';
import { useTheme } from '../Theme/ThemeContext'; // Assurez-vous que le chemin est correct

const SettingsScreen = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  // Fonction de déconnexion (exemple)
  const handleLogout = () => {
    // Ajoutez ici la logique de déconnexion, nettoyage du stockage, etc.
    console.log('Déconnexion');
  };

  return (
    <View style={darkMode ? [styles.container, styles.darkMode] : styles.container}>
      <Text style={[styles.title, darkMode && styles.darkModeText]}>Paramètres</Text>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkModeText]}>Compte</Text>
        {/* Ajoutez ici des paramètres liés au compte */}
        <Button title="Déconnexion" onPress={handleLogout} />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode && styles.darkModeText]}>Apparence</Text>
        {/* Ajoutez ici des paramètres liés à l'apparence de l'application */}
        <View style={styles.setting}>
        <Text style={[styles.settingText, darkMode && styles.settingTextDark]}>Couleur du texte :</Text>
          <Button title="Changer" onPress={() => console.log('Changer la couleur du texte')} />
        </View>
        <View style={styles.setting}>
        <Text style={[styles.settingText, darkMode && styles.settingTextDark]}>Police :</Text>
          <Button title="Changer" onPress={() => console.log('Changer la police')} />
        </View>
        <View style={styles.setting}>
        <Text style={[styles.settingText, darkMode && styles.settingTextDark]}>Mode sombre :</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>
      {/* Ajoutez d'autres sections de paramètres au besoin */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff', // Couleur de fond en mode clair
  },
  darkMode: {
    backgroundColor: '#000000', // Couleur de fond en mode sombre
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', // Couleur du texte en mode clair
  },
  darkModeText: {
    color: '#ffffff', // Couleur du texte en mode sombre
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555555', // Couleur du texte en mode clair
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  settingText: {
    color: '#333333', // Couleur du texte en mode clair
  },
  settingTextDark: {
    color: '#ffffff', // Couleur du texte en mode sombre
  },
});

export default SettingsScreen;
