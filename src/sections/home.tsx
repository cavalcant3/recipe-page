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

        {/* Seção: Ingredients */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold title-serif text-brown-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        {/* Seção: Instructions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold title-serif text-brown-800 mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-4">
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>

        {/* Seção: Nutrition */}
        <div className="bg-white rounded-lg  p-8 mt-6">
          <h2 className="text-2xl font-bold title-serif text-brown-800 mb-4">Nutrition</h2>
          <p className="text-gray-600 mb-4">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table className="w-full text-left table-auto">
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">Calories</td>
                <td className="py-2 font-bold text-brown-800">277kcal</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">Carbs</td>
                <td className="py-2 font-bold text-brown-800">0g</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">Protein</td>
                <td className="py-2 font-bold text-brown-800">20g</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">Fat</td>
                <td className="py-2 font-bold text-brown-800">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
