// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../Auth/Login';
import AuthNavigator from './AuthNavigator'; // Assurez-vous d'importer correctement votre navigateur d'authentification

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          tabBarLabel :"Home",
          tabBarStyle: { backgroundColor: '#C8D6A2' },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen} 
        options={{
          tabBarLabel: "Profile",
          tabBarStyle: { backgroundColor: "#E9C46A"},
          tabBarIcon:({ color }) =>(
            <MaterialCommunityIcons name="account" color={color} size ={26}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={SettingsScreen} 
        options={{
          tabBarLabel : "Settings",
          tabBarStyle: {backgroundColor: "#82CEF9"},
          tabBarIcon : ({color}) =>(
            <MaterialCommunityIcons name= "cog" color={color} size = {26}/> 
          )
        }}
      />
       <Tab.Screen 
        name="Login"
        component={Login} 
        options={{
          tabBarLabel : "Settings",
          tabBarStyle: {backgroundColor: "#82CEF9"},
          tabBarIcon : ({color}) =>(
            <MaterialCommunityIcons name= "login" color={color} size = {26}/> 
          )
        }}
      />

      {/* <Tab.Screen 
        name="Auth"
        component={AuthNavigator} // Utilisez le navigateur d'authentification ici
      /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
