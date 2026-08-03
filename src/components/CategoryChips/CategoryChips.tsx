import React from "react";
import { ScrollView, Pressable, Text, StyleSheet } from "react-native";

interface Props {
  categories?: string[];
  action?: {
    type: string;
    payload?: Record<string, any>;
  };
}

const CategoryChips = ({ categories = [] }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((item, index) => (
        <Pressable key={index} style={styles.chip}>
          <Text style={styles.text}>{item}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#f1f2f4",
    marginRight: 10,
  },

  text: {
    fontWeight: "600",
  },
});

export default CategoryChips;