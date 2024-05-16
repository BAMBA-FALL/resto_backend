import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AuthenticationService from '../services/AuthenticationService';


const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await AuthenticationService.register(username, name, email, password);

      // Vérifiez si la réponse indique le succès et contient un jeton
      if (response.success && response.token) {
        // Stockez le jeton quelque part (par exemple, AsyncStorage ou le contexte de l'application)
        // Redirigez l'utilisateur vers la page Home
        navigation.navigate('/HomeScreen');
      } else {
        // Si la réponse ne contient pas de succès ou de jeton, lancez une erreur
        throw new Error(response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Affichez un message d'alerte avec le détail de l'erreur
      Alert.alert('Registration Error', error.message || 'Failed to register. Please try again.');
    }
  };

  return (
    <View>
      <Text>Register Component</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Pressable title="Register" onPress={handleRegister}><Text>Se connecter</Text></Pressable>
    </View>
  );
};

export default Register;
