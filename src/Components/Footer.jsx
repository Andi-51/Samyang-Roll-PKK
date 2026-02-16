import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white py-16">
      <div className="grid md:grid-cols-3 mx-auto px-6 gap-4">
        <div className="flex flex-col items-center text-center">

          <div className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="max-w-[80px] max-h-[80px]" />
            <h1 className="font-bold text-2xl md:text-3xl">Samyang Rolls</h1>
          </div>
          <p className="mt-4 text-neutral-400">
            Sensasi pedas yang bikin nagih dan beda dari yang lain.
          </p>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl">Navigasi</h1>
            <ul className="text-neutral-400 mt-4">
                <li className="py-1"><a href="#features">Kelebihan</a></li>
                <li className="py-1"><a href="#gallery">Gallery</a></li>
                <li className="py-1"><a href="#order">Order</a></li>
            </ul>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-white text-xl">Kontak Kami</h1>
            <ul className="text-neutral-400 mt-4">
                <li className="py-1"><a href="https://wa.me/+6283841218789" target="_blank" rel="noopener noreferrer">Whatsapp (Andi)</a></li>
                <li className="py-1"><a href="https://wa.me/+6283134045038" target="_blank" rel="noopener noreferrer" >Whatsapp (Alda)</a></li>
                <li className="py-1"><a href="https://wa.me/+6285777522410" target="_blank" rel="noopener noreferrer" >Whatsapp (Sindi)</a></li>
            </ul>
        </div>

      </div>
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-sm">
  © 2026 Samyang Rolls. All rights reserved.
</div>

    </div>
  );
};

export default Footer;
