import React from "react";
import Button from "./Button";

const FirstSection = () => {
  return (
    <div className="relative w-screen h-screen bg-blue-500 overflow-hidden">
      {/* Absolute Text and Button Container */}
      <div className="absolute pt-40 px-10 bg-gradient-to-r  to-transparent from-blue-800 h-screen w-1/2  top-10  md:top-16  space-y-4">
        
        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Innovative Education Solution
        </h1>
        
        <h4 className="text-lg md:text-xl text-white">
          Empowering Learning with Modern <br /> Tools and Strategies
        </h4>
        
        <Button
          classes="bg-white text-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
          text="Book Your Free Consultation"
        />
      </div>

      {/* Background Image */}
      <img
        src="./HeroBackground.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FirstSection;
