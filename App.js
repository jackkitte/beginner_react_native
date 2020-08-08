import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = (props) => {
  return (
    <Button title="詳細画面へ" onPress={() => props.navigation.navigate("Detail")} />
  );
}

const DetailScreen = (props) => {
  return (
    <Button title="一覧画面へ" onPress={() => props.navigation.goBack()} />
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;