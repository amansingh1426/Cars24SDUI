import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import Renderer from "../core/renderer/Renderer";
import home from "../schemas/home.json";
import { ScreenSchema } from "../types/ComponentModel";
import { ComponentType } from "../types/ComponentTypes";

const SDUIScreen = () => {
  const homeSchema = home as ScreenSchema;
  const components = homeSchema.components.map((component) => ({
    ...component,
    type: component.type as ComponentType,
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Renderer components={components} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SDUIScreen;