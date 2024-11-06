import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Prop {
  imageUrl: string;
}
const AdvertisementSection = ({ imageUrl }: Prop) => {
  return (
    <div className="relative h-80 w-full flex items-center justify-between">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="advertisement"
        fill
        objectFit="cover"
        className="absolute inset-0 object-cover"
      />

      {/* Left arrow button */}

      {/* Text overlay */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white p-4 rounded space-y-2 z-10">
        <div className="text-4xl font-bold">The Best Look</div>
        <div className="text-5xl font-extrabold">Anytime Anywhere</div>
        <div className="text-lg font-medium">Starts from 10,000 MMK</div>
        <Link href={"#bestDeal"}>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded">
            View
          </button>
        </Link>
      </div>

      {/* Right arrow button */}
    </div>
  );
};

export default AdvertisementSection;
