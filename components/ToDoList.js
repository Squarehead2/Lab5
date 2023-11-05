import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

export default function ToDoList({ tasks }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [styles.task, pressed && styles.completed]}
          >
            <Text style={styles.task}>{task}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
styles = StyleSheet.create({
  task: {
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  completed: {
    backgroundColor: "#ddd",
  },
});
