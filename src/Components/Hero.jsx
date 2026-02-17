import React from "react";
import Samyang3 from "../assets/Samyang3.png";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-500 to-orange-600 flex items-center text-white" id="scrollKeAtas">
      <div className="mx-auto max-w-[1240px] w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-4xl lg:text-6xl">Samyang Rolls</h1>
          <h2 className="font-semibold text-2xl lg:text-4xl my-4">
            Pedas & Gurih!
          </h2>
          <div className="mt-8">
          <a href="#order" className="bg-white rounded-full px-6 py-3 mt-4 font-semibold text-lg hover:-translate-y-1 transition text-orange-500">
            Order Sekarang!
          </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Samyang3}
            alt="Samyang Image"
            className="max-w-[300px] md:max-w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
