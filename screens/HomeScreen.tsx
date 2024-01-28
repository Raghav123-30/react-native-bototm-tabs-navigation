import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbd5e1",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
