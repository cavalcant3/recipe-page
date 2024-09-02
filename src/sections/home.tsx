import React from "react";
import "./home.css";
import OmeletteImage from "../assets/images/image-omelette.jpeg";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full md:w-3/4 lg:w-1/2">
        <img
          src={OmeletteImage}
          alt="simple omelette"
          className="w-full rounded-t-lg"
        />
        <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-900">
          Simple Omelette Recipe
        </h1>
        <p className="font-roboto text-gray-700 text-base leading-relaxed mt-2 text-sm">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div>
        <h4>Preparation time</h4>
      </div>
      </div>
    </div>
  );
};

export default Home;
