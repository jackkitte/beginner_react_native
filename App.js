import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Alert, Button, TextInput, View } from 'react-native';

const App = () => {
  const [value, setValue] = useState("Input text");

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} value={value} onChangeText={text => setValue(text)} onSubmitEditing={() => Alert.alert(value)} />
      <Button onPress={() => alert("onPress")} title="ボタンA" />
      <Button onPress={() => alert("onPress")} title="ボタンB" color="red" />
      <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 200,
    borderColor: "black",
    borderWidth: 1
  }
});

export default App;