import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { executeAction } from "../../core/actions/ActionHandler";

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
  action?: {
    type: string;
    payload?: Record<string, any>;
  };
}

const CTASection = ({
  title,
  subtitle,
  buttonText,
  action,
}: Props) => {
  const handlePress = () => {
    executeAction(action);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <Pressable
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#003B95",
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  subtitle: {
    color: "white",
    marginTop: 8,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#00C853",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});

export default CTASection;