import React from "react";
import { SafeAreaView } from "react-native";

import Renderer from "../core/renderer/Renderer";

import home from "../schemas/home.json";

const SDUIScreen = () => {

    return (

        <SafeAreaView>

            <Renderer components={home.components} />

        </SafeAreaView>

    );

};

export default SDUIScreen;