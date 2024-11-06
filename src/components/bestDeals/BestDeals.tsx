"use client";

import React, { useState } from "react";
import BestDealsCard from "./BestDealsCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { bestDealsData } from "@/data/data";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const BestDeals = () => {
  const [showMore, setShowMore] = useState(false);

  // Example array to represent your cards, adjust as needed
  const cards = bestDealsData;
  const visibleCards = showMore ? cards : cards.slice(0, 5);

  return (
    <div className=" mt-10" id="bestDeal">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold text-gray-800">Best Deals</h1>
        <h3 className="text-lg">just for you</h3>
      </div>
      <div className="flex flex-wrap mx-auto justify-center gap-1">
        {visibleCards.map((card, index) => (
          <BestDealsCard key={card.id} imageUrl={card.img} />
        ))}
      </div>
      <div className="mt-4 flex justify-center ">
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
