import React from "react";
import { View, Text } from "react-native";

const UnknownComponent = () => {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#ffecec",
        margin: 16,
        borderRadius: 10
      }}
    >
      <Text>Unsupported Component</Text>
    </View>
  );
};

export default UnknownComponent;