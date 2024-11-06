"use client";

import React, { useEffect, useRef, useState } from "react";
import DevicesCard from "./DevicesCard";
import Image from "next/image";
import { bestDealsData } from "@/data/data";
import BestDealsCard from "../bestDeals/BestDealsCard";
interface Prop {
  imageUrl: string;
  label: string;
  description: string;
}
const Devices = ({ imageUrl, label, description }: Prop) => {
  const containerRef = useRef<HTMLDivElement>(null); // Reference for the devices container
  const [scrollPosition, setScrollPosition] = useState(0); // State for the current scroll position
  const [remainingWidth, setRemainingWidth] = useState(0); // State to track remaining width

  // Function to scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth; // Total width of all cards
      const containerWidth = containerRef.current.clientWidth; // Visible width of the container
      const newPosition =
        remainingWidth < 224
          ? scrollPosition - remainingWidth
          : scrollPosition - 224;
      setScrollPosition(newPosition);
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    const containerWidth = containerRef.current?.clientWidth || 0; // Get the container width
    const newPosition = Math.min(scrollPosition + 224, 0); // Scroll back to the right
    setScrollPosition(newPosition);
  };

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth; // Total width of all cards
      const containerWidth = containerRef.current.clientWidth; // Visible width of the container

      // Calculate the remaining width to scroll
      const remainingWidth = totalWidth + scrollPosition - containerWidth;

      setRemainingWidth(remainingWidth);
    }
  }, [scrollPosition]);

  return (
    <div className="relative overflow-hidden bg-gray-900 p-2 mt-10 w-full flex rounded-lg">
      {scrollPosition < 0 && (
        <button
          className="absolute z-10 text-white font-bold bg-black bg-opacity-50 p-2 rounded h-1/2 flex items-center justify-center left-0 bottom-1/2"
          style={{ transform: "translateY(50%)" }}
          onClick={scrollLeft}
          disabled={scrollPosition === 0} // Disable button if at the start
        >
          ←
        </button>
      )}
      <div className="w-2/6 h-60 flex gap-3">
        <div className="relative w-1/2 h-full hidden sm:block">
          <Image
            src={imageUrl}
            alt="Best Deal"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col text-left text-white w-1/2 h-full justify-center">
          <h1 className="text-3xl">{label}</h1>
          <span className="text-lg">{description}</span>
        </div>
      </div>
      <div
        className="w-4/6 h-60 flex transition-transform duration-300 ease-in-out  items-center" // Add transition classes
        style={{ transform: `translateX(${scrollPosition}px)` }}
        ref={containerRef}
      >
        {bestDealsData.map((card, index) => {
          return <DevicesCard imageUrl={card.img} key={card.id} />;
        })}
      </div>

      {remainingWidth > 0 && (
        <button
          className="absolute z-10 text-white font-bold bg-black bg-opacity-50 p-2 rounded h-1/2 flex items-center justify-center right-0 bottom-1/2"
          style={{ transform: "translateY(50%)" }}
          onClick={scrollRight}
          disabled={remainingWidth <= 0} // Disable button if no remaining width
        >
          →
        </button>
      )}
    </div>
  );
};

export default Devices;
