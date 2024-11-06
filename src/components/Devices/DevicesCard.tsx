import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

const DevicesCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className=" p-2 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image with background color */}
      <div className="relative w-28 h-32  bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          // src="https://dummyvapesofficials.com/wp-content/uploads/2024/02/Disposable_Vapes_69_Mango.avif"
          alt="Best Deal"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Product Details */}
      <div className="text-center text-white">
        <p className="text-blue-100 text-sm">Refreshing Mint</p>
        <p className="text-xs">$30000MMK</p>
        <p className="flex justify-center text-sm">
          <StarIcon className="text-yellow-500 w-5 h-5" />
          <span className="text-yellow-500 font-semibold">600 points</span>
        </p>
      </div>
    </div>
  );
};

export default DevicesCard;
