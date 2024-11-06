"use client";
import React, { useState } from "react";
import AdvertisementSection from "./Advertisement";
import { topImageData } from "@/data/data";

const TopSection = () => {
  const [state, setState] = useState(0); // Track the current slide
  const totalSlides = topImageData.length; // Update this if you add/remove slides

  // Handle slide change for the left and right buttons
  const handlePrev = () => {
    setState((prevState) =>
      prevState === 0 ? totalSlides - 1 : prevState - 1
    );
  };

  const handleNext = () => {
    setState((prevState) =>
      prevState === totalSlides - 1 ? 0 : prevState + 1
    );
  };

  return (
    <div className="w-full h-96 relative overflow-hidden" id="top">
      {/* Left button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white font-bold bg-black bg-opacity-50 p-2 rounded h-1/3 flex items-center justify-center"
      >
        ←
      </button>

      {/* Advertisement section */}
      <div
        className="flex  transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${state * 100}vw)
        `,
          width: `${topImageData.length * 100}vw`,
        }}
      >
        {topImageData.map((data) => {
          return (
            <div className="w-[100vw]" key={data.id}>
              <AdvertisementSection imageUrl={data.img} />
            </div>
          );
        })}
      </div>

      {/* Right button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white font-bold bg-black bg-opacity-50 p-2 rounded h-1/3 flex items-center justify-center"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {topImageData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === state ? "bg-black" : "bg-gray-600"
            }`}
            style={{
              transition: "background-color 0.3s, transform 0.3s",
              transform: `scale(${index === state ? 1.2 : 1})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSection;
