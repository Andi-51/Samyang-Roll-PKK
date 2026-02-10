import React from "react";
import Samyang from "../assets/Samyang.jpg";

const Hero = () => {
  return (
    <div className="h-screen w-[100%] bg-amber-500 flex items-center justify-between">
      <div className="ml-12">
        <h1 className="font-bold text-6xl">Samyang Rolls</h1>
        <h2 className="font-semibold text-4xl my-4">Pedas & Gurih!</h2>
        <button className="border-[2px] rounded-2xl border-gray-300 shadow-black p-3 bg-white font-semibold text-xl justify-center hover:translate-y-[-2px] mt-8" >
          Order Sekarang!
        </button>
      </div>
      <div className="mr-12">
        <img src={Samyang} alt="Samyang Image" className="border-4 rounded-[120px]"/>
      </div>
    </div>
  );
};

export default Hero;
