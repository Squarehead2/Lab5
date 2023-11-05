import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function ToDoForm({ addTask, setTaskText, taskText }) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

styles = StyleSheet.create({
  form: {
    margin: 20,
    padding: 20,
    backgroundColor: "#efefef",
    borderRadius: 10,
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 18,
    padding: 10,
    borderRadius: 3,
  },
});
