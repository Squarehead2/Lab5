import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDoApp</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default MainLayout;
