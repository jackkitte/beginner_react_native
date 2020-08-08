import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "一覧" }} />
        <Tab.Screen name="Detail" component={DetailScreen} options={{ title: "詳細" }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default App;