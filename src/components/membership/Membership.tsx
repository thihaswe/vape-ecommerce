import Image from "next/image";
import Link from "next/link";
import React from "react";

const Membership = () => {
  return (
    <div className="flex flex-col lg:h-80 gap-1 mt-5 md:flex-row">
      {/* Main Membership Banner Section */}
      <div className="md:w-3/5 bg-gray-800 text-white p-6 rounded-lg relative flex items-center w-full">
        <div className="absolute inset-0">
          {/* Background Image */}
          <Image
            src="https://dummyvapesofficials.com/wp-content/uploads/2024/02/Dummy_Disposable_Vapes_69_Black_Berry_Ice-1-300x300.webp"
            alt="Membership Program"
            layout="fill"
            objectFit="cover"
            className="rounded-lg opacity-70"
          />
        </div>
        <div className="relative z-10">
          {/* <div className="text-4xl">hhlsdajflsajfd</div> */}
          <h2 className="text-3xl font-bold">Membership Program</h2>
          <p className="text-lg mt-2">
            Be a Vape Pi member and get our special exclusive offers
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-full">
            View
          </button>
        </div>
      </div>

      {/* Right Side Smaller Cards */}
      <div className="md:w-2/5 flex gap-1 ">
        {/* {part 2} */}
        <Link href={"#devices"} className="cursor-pointer  w-1/2">
          <div className="w-full bg-gray-800 text-white p-4 rounded-lg flex flex-col justify-between h-full">
            <div className="relative h-2/3 w-full">
              <Image
                src="https://dummyvapesofficials.com/wp-content/uploads/2024/02/ElfBar-Aro-Skit-Ice-k-300x300.webp"
                alt="Devices"
                fill
                className="mx-auto"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-2">Devices</h3>
              <p className="text-sm">Find the best for you here!</p>
            </div>
          </div>
        </Link>

        {/* part 3 */}
        <div className="flex flex-col w-1/2 gap-1">
          <div className="bg-gray-800 text-white p-4 rounded-lg  justify-between h-1/2">
            <Link href={"#pods"} className="cursor-pointer">
              <Image
                src={
                  "https://dummyvapesofficials.com/wp-content/uploads/2024/02/Dummy_Vapes_Limited_Edition_24k_Gold-1-300x300.webp"
                }
                alt="Pods"
                width={40}
                height={40}
                className="mx-auto"
              />
              <div>
                <h3 className="text-lg font-semibold mt-2">Pods</h3>
                <p className="text-sm">Variety of choices available</p>
              </div>
            </Link>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col justify-between h-1/2">
            <Link href={"#disposable"} className="cursor-pointer">
              <Image
                src="https://dummyvapesofficials.com/wp-content/uploads/2024/02/E-Liquid_Alien_Invasion_Grape_Dragon_Fruit-1-300x300.webp"
                alt="Disposable"
                width={40}
                height={40}
                className="mx-auto"
              />
              <div>
                <h3 className="text-lg font-semibold mt-2">Disposable</h3>
                <p className="text-sm">Easy, clean & superb flavor</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
