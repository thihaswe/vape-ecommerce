"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TryNewFlavor = () => {
  const [state, setState] = useState("0%");

  const toogleView = () => {
    setState((prev) => (prev === "0%" ? "-40%" : "0%")); // Toggle between "0%" and "50%"
  };

  return (
    <div className="overflow-hidden relative mt-10">
      <div
        className="w-[200%] flex gap-1 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${state})` }} // Apply the translation based on state
      >
        {/* First Card */}
        <div className="w-[calc(50%-96px)] h-40 rounded-lg bg-gray-500 flex">
          <div className="w-1/2 relative h-full">
            <Image
              src="https://dummyvapesofficials.com/wp-content/uploads/2024/02/Disposable_vapes_6ix9ine.webp"
              alt="image"
              fill
            />
          </div>
          <div className="flex justify-center items-center flex-col text-center">
            <h1 className="text-4xl text-white font-bold">Try New Flavor</h1>
            <h1 className="text-md">Citrus Monster</h1>
            <Link href={"#newReleased"}>
              <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full">
                View
              </button>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-[calc(50%-96px)] h-40 rounded-lg bg-pink-950 flex">
          <div className="w-1/2 relative h-full">
            <Image
              src="https://dummyvapesofficials.com/wp-content/uploads/2024/02/Disposable_vapes_6ix9ine.webp"
              alt="image"
              fill
            />
          </div>
          <div className="flex justify-center items-center flex-col text-center">
            <h1 className="text-4xl text-white font-bold">Try New Flavor</h1>
            <h1 className="text-md">Citrus Monster</h1>
            <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full">
              View
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="absolute z-10 text-white font-bold bg-black bg-opacity-50 p-2 rounded h-1/2 flex items-center justify-center right-10 bottom-1/2"
        style={{ transform: "translateY(50%)" }}
        onClick={toogleView}
      >
        {state === "0%" ? "→" : "←"}
      </button>
    </div>
  );
};

export default TryNewFlavor;
