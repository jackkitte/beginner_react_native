import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Alert, Button, Text, TextInput, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const App = () => {
  const [value, setValue] = useState("Input text");
  const [names, setNames] = useState(["satou", "suzuki", "takahashi", "tanaka", "itou", "watanabe", "yamamoto", "nakamura", "kobayashi", "katou", "yoshida", "yamada"]);

  const onPressButton = () => {
    alert("タップしました。");
  }
  const onLongPressButton = () => {
    alert("ロングタップしました。");
  }
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.item}>{item}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={names} renderItem={renderItem} />
      <TextInput style={styles.textInput} value={value} onChangeText={text => setValue(text)} onSubmitEditing={() => Alert.alert(value)} />
      <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
      <TouchableHighlight onPress={onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={onPressButton} background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableNativeFeedback (Android only)</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableWithoutFeedback onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight onPress={onPressButton} onLongPress={onLongPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
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
    marginBottom: 10,
    width: 200,
    borderColor: "black",
    borderWidth: 1
  },
  button: {
    marginBottom: 32,
    width: 240,
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  buttonText: {
    textAlign: "center",
    padding: 24,
    color: "white"
  },
  item: {
    padding: 16,
    fontSize: 18,
    height: 64
  }
});

export default App;