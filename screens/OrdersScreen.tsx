import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Orders Screen</Text>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cbd5e1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
