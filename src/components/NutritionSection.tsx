import React from "react";

const NutritionSection: React.FC = () => (
    <>
            {/* Seção: Nutrition */}
        <div className="bg-white rounded-lg  p-8 mt-6">
          <h2 className="text-2xl font-bold title-serif text-brown-800 mb-4">
            Nutrition
          </h2>
          <p className="text-gray-600 mb-4">
            The table below shows nutritional values per serving without the
            additional fillings.
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
    </>
)

export default NutritionSection;