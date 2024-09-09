import React from "react";
import OmelleteImage from "../assets/images/image-omelette.jpeg";

const ImageSection: React.FC = () => (
 <>
 <img
      src={OmelleteImage}
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
 </>
)

export default ImageSection;