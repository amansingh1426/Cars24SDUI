import React from "react";
import { View } from "react-native";

import { ComponentRegistry } from "../registry/ComponentRegistry";

import UnknownComponent from "../../components/UnknownComponent/UnknownComponent";

import { SDUIComponent } from "../../types/ComponentModel";

interface RendererProps {
  components: SDUIComponent[];
}

const Renderer: React.FC<RendererProps> = ({ components }) => {
  return (
    <View>
      {components.map((component) => {

        const Component =
          ComponentRegistry[component.type] || UnknownComponent;

        return (
          <Component
            key={component.id}
            {...component.props}
          />
        );
      })}
    </View>
  );
};

export default Renderer;