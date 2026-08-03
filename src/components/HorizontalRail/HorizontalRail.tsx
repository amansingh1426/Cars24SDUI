import React from "react";
import { ScrollView } from "react-native";
import CarCard from "../CarCard/CarCard";

interface Car {
  image: string;
  name: string;
  price: string;
  year: string;
}

interface Props {
  cars?: Car[];
  action?: {
    type: string;
    payload?: Record<string, any>;
  };
}

const HorizontalRail = ({ cars = [] }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 20,
      }}
    >
      {cars.map((car, index) => (
        <CarCard key={index} {...car} />
      ))}
    </ScrollView>
  );
};

export default HorizontalRail;