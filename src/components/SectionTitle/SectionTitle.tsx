import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({

  title: {

    fontSize:22,

    fontWeight:"700",

    marginHorizontal:16,

    marginTop:20,

    marginBottom:12

  }

});

export default SectionTitle;