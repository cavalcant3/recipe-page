import React from "react";
import "./home.css";
import ImageSection from "../components/ImageSection";
import IngredientSection from "../components/IngredientSection";
import PreparetionSection from "../components/PreparetionSection";
import InstructionsSection from "../components/InstructionsSection";
import NutritionSection from "../components/NutritionSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full md:w-3/4 lg:w-1/2">
        <ImageSection />

        <PreparetionSection />

        <IngredientSection />

        <InstructionsSection />
        <NutritionSection />
      </div>
    </div>
  );
};

export default Home;
