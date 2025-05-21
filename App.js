import React from 'react';
//import { db } from "firebaseConfig";
//import { collection, getDocs } from "./firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
} 
