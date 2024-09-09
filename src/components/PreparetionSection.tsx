import React from "react";

const PreparetionSection: React.FC = () => (
    <>
            {/* Seção: Preparation Time */}
            <div className="bg-pink-50 rounded-lg p-4 mt-6 shadow-inner">
          <h4 className="text-lg font-semibold text-pink-800 mb-2">
            Preparation time
          </h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation:</strong> 5 minutes
            </li>
            <li>
              <strong>Cooking:</strong> 5 minutes
            </li>
          </ul>
        </div>
    </>
)

export default PreparetionSection;