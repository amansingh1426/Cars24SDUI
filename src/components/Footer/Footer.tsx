import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Cars24. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  text: {
    fontSize: 14,
    color: "#666666",
  },
});

export default Footer;