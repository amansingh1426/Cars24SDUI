import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UnknownComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠ Unsupported Component</Text>
      <Text style={styles.subtitle}>
        This component type is not supported by this app version.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#FFF3CD",
    borderWidth: 1,
    borderColor: "#FFCC00",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#8A6D3B",
  },

  subtitle: {
    marginTop: 8,
    color: "#555",
  },
});

export default UnknownComponent;