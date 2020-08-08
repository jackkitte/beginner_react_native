import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert, Button, Text, TextInput, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const App = () => {
  const [value, setValue] = useState("Input text");

  const onPressButton = () => {
    alert("タップしました。");
  }
  const onLongPressButton = () => {
    alert("ロングタップしました。");
  }

  return (
    <ScrollView pagingEnabled={true}>
      <View style={styles.container}>
        <TextInput style={styles.textInput} value={value} onChangeText={text => setValue(text)} onSubmitEditing={() => Alert.alert(value)} />
        <Button onPress={() => alert("onPress")} title="ボタンA" />
        <Button onPress={() => alert("onPress")} title="ボタンB" color="red" />
        <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
        <TouchableHighlight onPress={onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <Button onPress={() => alert("onPress")} title="ボタンA" />
        <Button onPress={() => alert("onPress")} title="ボタンB" color="red" />
        <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
        <TouchableOpacity onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <Button onPress={() => alert("onPress")} title="ボタンA" />
        <Button onPress={() => alert("onPress")} title="ボタンB" color="red" />
        <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
        <TouchableNativeFeedback onPress={onPressButton} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback (Android only)</Text>
          </View>
        </TouchableNativeFeedback>
        <Button onPress={() => alert("onPress")} title="ボタンA" />
        <Button onPress={() => alert("onPress")} title="ボタンB" color="red" />
        <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
        <TouchableWithoutFeedback onPress={onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <Button onPress={() => alert("onPress")} title="ボタンA" />
        <Button onPress={() => alert("onPress")} title="ボタンB" color="red" />
        <Button onPress={() => alert("onPress")} title="ボタンC" disabled={true} />
        <TouchableHighlight onPress={onPressButton} onLongPress={onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
  }
});

export default App;