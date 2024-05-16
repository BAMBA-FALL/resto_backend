import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import AuthenticationService from '../services/AuthenticationService';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthenticationService.login(email, password, navigation);
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.message);
      Alert.alert('Erreur de connexion', 'Identifiants invalides. Veuillez réessayer.');
    }
  };
  return (
    <View style={styles.formulaire}>
      <Text>Composant de connexion</Text>

      <TextInput
        id="emailInput"
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        id="passwordInput"
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Pressable title="Login" onPress={handleLogin}><Text>Se connecter</Text></Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formulaire: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
