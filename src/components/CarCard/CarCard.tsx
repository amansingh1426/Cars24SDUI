import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  image?: string;
  name?: string;
  price?: string;
  year?: string;
  action?: {
    type: string;
    payload?: Record<string, any>;
  };
}

const CarCard = ({ image, name, price, year }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.year}>{year}</Text>

      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 220,
    marginRight: 16,
    backgroundColor: "white",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },

  image: {
    width: "100%",
    height: 140,
  },

  name: {
    fontWeight: "700",
    fontSize: 18,
    paddingHorizontal: 12,
    marginTop: 10,
  },

  year: {
    color: "#777",
    paddingHorizontal: 12,
    marginTop: 4,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0a8f3d",
    paddingHorizontal: 12,
    marginVertical: 12,
  },
});

export default CarCard;