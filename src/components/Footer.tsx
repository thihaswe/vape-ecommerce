import Image from "next/image";
import ReplayIcon from "@mui/icons-material/Replay";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React, { useState } from "react";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
const Footer = () => {
  return (
    <div>
      <div className="lg:mx-24 flex my-16 flex-wrap sm:mx-3 md:mx-5 md:gap-0 gap-5">
        {/* customer service */}
        <div className="flex flex-col md:w-1/4 mb-4 ">
          <h1 className="text-xl mb-4">Customer Service</h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm flex gap-2">
              <GppMaybeIcon />
              <span>Terms & Privacy Policy</span>
            </p>
            <p className="text-sm flex gap-2">
              <ReplayIcon />
              <span>Return Policy</span>
            </p>
          </div>
        </div>

        {/* {language} */}
        <div className="flex flex-col md:w-1/4 mb-4">
          <h1 className="text-xl mb-4">Language</h1>
          <div>
            {/* <label className="flex items-center"> */}
            <input
              type="radio"
              name="language"
              value="maynamr"
              className="mr-2"
            />
            Myanmar (Unicode)
            {/* </label> */}
            <br />
            {/* <label className="flex items-center"> */}
            <input
              type="radio"
              value="zawgyi"
              name="language"
              className="mr-2"
            />
            Myanmar (Zawgyi Code)
            {/* </label> */}
            <br />
            {/* <label className="flex items-center"> */}
            <input
              type="radio"
              value="english"
              name="language"
              className="mr-2"
              defaultChecked
            />
            English
            {/* </label> */}
          </div>
        </div>

        {/* {contact us} */}

        <div className="flex flex-col md:w-1/4 mb-4">
          <h1 className="text-xl mb-4">Contact Us</h1>
          <div className="gap-2 flex flex-col w-4/5">
            <p className="text-sm flex gap-2">
              <LocationOnIcon className="mr-2" />
              <span>
                Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
                Tsp, Yangon.
              </span>
            </p>
            <p className="text-sm flex gap-2">
              <LocalPhoneIcon className="mr-2" />
              <span>09-458489458</span>
            </p>
          </div>
        </div>

        {/* download our app */}
        <div className="flex flex-col md:w-1/4 mb-4">
          <h1 className="text-xl mb-4">Download Our App</h1>
          <div className="relative w-1/2 h-36">
            <Image src={"/vape-ecommerce.png"} alt={"our app"} fill />
          </div>
        </div>

        {/*Payment */}
        <div className="flex flex-col md:w-1/4 mb-4 h-24">
          <h1 className="text-xl mb-4">Payment</h1>
          <div className="flex w-full h-full gap-2 items-center">
            <div className="relative w-2/6 h-16">
              <Image src={"/kpay.png"} alt={"kpay"} fill />
            </div>
            <div className="relative w-2/6 h-[75px]">
              <Image src={"/wave_pay.png"} alt={"wave"} fill />
            </div>
          </div>
        </div>

        {/* follow us on */}
        <div className="flex flex-col md:w-1/4">
          <h1 className="text-xl mb-4">Follow Us On</h1>
          <div className="flex gap-2">
            <div className="relative w-1/6 h-8">
              <Image src={"/facebook.png"} alt={"fb"} fill />
            </div>
            <div className="relative w-1/6 h-8">
              <Image src={"/instagram.png"} alt={"instagram"} fill />
            </div>
            <div className="relative w-1/6 h-8">
              <Image src={"/viber.png"} alt={"viber"} fill />
            </div>
            <div className="relative w-1/6 h-8">
              <Image src={"/telegram.png"} alt={"telegram"} fill />
            </div>
            <div className="relative w-1/6 h-8">
              <Image src={"/twitter.png"} alt={"twitter"} fill />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-10">
        &copy; CopyRight 2023 C by D., Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
