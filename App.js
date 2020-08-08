import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {

  return (
    <View>
      <View style={{ ...styles.container, alignItems: "center" }}>
        <View style={{ ...styles.item, backgroundColor: "red" }} />
        <View style={{ ...styles.item, backgroundColor: "yellow" }} />
        <View style={{ ...styles.item, backgroundColor: "green" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  item: {
    width: 50,
    height: 50
  }
});

export default App;