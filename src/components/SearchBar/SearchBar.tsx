import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface SearchBarProps {
  placeholder?: string;
  action?: {
    type: string;
    payload?: Record<string, any>;
  };
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 16,
    backgroundColor: "white"
  }
});

export default SearchBar;