import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

interface Props {
  images?: string[];
  action?: {
    type: string;
    payload?: Record<string, any>;
  };
}

const BannerCarousel = ({ images = [] }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image }}
          style={styles.banner}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 16
  },

  banner: {
    width: 320,
    height: 180,
    borderRadius: 12,
    marginRight: 12,
    resizeMode: "cover"
  }
});

export default BannerCarousel;