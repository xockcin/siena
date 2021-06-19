import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Main from './components/MainComponent'
import Item from './components/ItemComponent'

export default function App() {
  return (
    <Item />
  );
}