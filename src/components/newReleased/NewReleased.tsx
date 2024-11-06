"use client";

import React, { useState } from "react";
import NewReleasedCard from "./NewReleasedCard";
import { newReleasedData } from "@/data/data";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ArrowDownward } from "@mui/icons-material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const BestDeals = () => {
  const [showMore, setShowMore] = useState(false);

  // Example array to represent your cards, adjust as needed
  const cards = newReleasedData;
  const visibleCards = showMore ? cards : cards.slice(0, 4);

  return (
    <div className="mt-10" id="newReleased">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold ">
          <span className="text-red-500">New</span> Released
        </h1>
        <h3 className="text-lg">Try Our Latest Flavor Here</h3>
      </div>
      <div className="flex flex-wrap gap-1 justify-center">
        {visibleCards.map((card, index) => (
          <NewReleasedCard
            desc={card.desc}
            key={card.id}
            bgColor={card.color}
            image={card.img}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full border border-gray-400 flex items-center gap-2"
          >
            View More
            <ArrowDownwardIcon />
          </button>
        ) : (
          <button
            onClick={() => setShowMore(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full border border-gray-400 flex items-center gap-2"
          >
            Hide
            <ArrowUpwardIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default BestDeals;
