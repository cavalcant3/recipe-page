import React from "react";
interface TitleProps {
  title: string;
}
const SimpleSection: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};
export default SimpleSection;
