import React from "react";


const IngredientSection: React.FC = () =>(
    <>
    {/* Seção: Ingredients */}
<div className="mt-6">
  <h2 className="text-2xl font-bold title-serif text-brown-800 mb-4">
    Ingredients
  </h2>
  <ul className="list-disc pl-5 text-gray-700 space-y-2">
    <li>2-3 large eggs</li>
    <li>Salt, to taste</li>
    <li>Pepper, to taste</li>
    <li>1 tablespoon of butter or oil</li>
    <li>
      Optional fillings: cheese, diced vegetables, cooked meats, herbs
    </li>
  </ul>
</div>
    </>

)

export default IngredientSection;