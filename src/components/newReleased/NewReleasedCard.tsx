import Image from "next/image";
import React from "react";
interface Prop {
  bgColor: string;
  image: string;
  desc: string;
}
const NewReleasedCard = ({ bgColor, image, desc }: Prop) => {
  // Map of colors to Tailwind classes
  const colorClasses: Record<string, string> = {
    yellow: "bg-yellow-400",
    blue: "bg-blue-400",
    red: "bg-red-400",
    green: "bg-green-400",

    // Add more colors as needed
  };

  // Get the appropriate class or default to yellow if the color is not found
  const bgClass = colorClasses[bgColor] || colorClasses.yellow;

  return (
    <div
      className={`relative w-64 h-40 text-center flex ${bgClass} rounded-lg`}
    >
      <div className="w-1/3  text-left ml-3 flex items-end mb-3">
        <p className="flex flex-col">
          <span className="text-white text-xs">{desc}</span>
          <span className="text-xs text-white">30,000 MMK</span>
        </p>
      </div>

      <div className="relative w-2/3 h-full">
        <Image
          src={image}
          alt="image"
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }} // Optional: adjust image position
        />
      </div>
    </div>
  );
};

export default NewReleasedCard;
