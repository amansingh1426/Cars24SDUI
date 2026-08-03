import React from "react";
import { SafeAreaView } from "react-native";

import Renderer from "../core/renderer/Renderer";
import home from "../schemas/home.json";
import { ScreenSchema } from "../types/ComponentModel";

const SDUIScreen = () => {
  const schema = home as ScreenSchema;

  return (
    <SafeAreaView>
      <Renderer components={schema.components} />
    </SafeAreaView>
  );
};

export default SDUIScreen;