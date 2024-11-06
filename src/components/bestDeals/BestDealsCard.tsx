import React from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

interface Prop {
  imageUrl: string;
}
const BestDealsCard = ({ imageUrl }: Prop) => {
  return (
    <div className="w-52 p-2 hover:shadow-xl  rounded-lg transition-shadow duration-300 relative h-70  bg-gray-200">
      {/* Product Image with background color */}
      <div className="relative h-36 w-full overflow-hidden">
        <Image src={imageUrl} alt="Best Deal" layout="fill" objectFit="cover" />
      </div>

      {/* Product Details */}
      <div className="text-center">
        <p className="">Refreshing Mint</p>
        <p className="">$30000MMK</p>
        <p className=" text-sm line-through">$30000MMK</p>
        <p className="flex justify-center">
          <StarIcon className="text-yellow-500 w-5 h-5" />
          <span className="text-yellow-500 font-semibold">600 points</span>
        </p>
      </div>
      <div className="absolute top-0 h-5 bg-red-500 right-0 left-0 w-fit px-3 mx-auto">
        25% off
      </div>
    </div>
  );
};

export default BestDealsCard;
