import React from "react";
import Samyang2 from "../assets/Samyang2.png";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-amber-500 flex items-center">
      <div className="mx-auto max-w-[1240px] w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-6xl">Samyang Rolls</h1>
          <h2 className="font-semibold text-2xl md:text-4xl my-4">
            Pedas & Gurih!
          </h2>
          <button
            className="
            border-2 border-gray-300 bg-white
            rounded-2xl px-6 py-3 mt-2
            font-semibold text-lg
            hover:-translate-y-1 transition
          "
          >
            Order Sekarang!
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Samyang2}
            alt="Samyang Image"
            className="max-w-[300px] md:max-w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
