import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // WRAPPER NAVBAR
    <div
      className="
        sticky top-0 z-50
        bg-white md:bg-white/30
        md:backdrop-blur-md
        shadow-sm border-b border-black/5
      "
    >
      {/* CONTAINER */}
      <div className="flex justify-between items-center px-4 mx-auto max-w-[1240px] text-[#32211b] h-20">
        {/* LOGO / TITLE */}
        <motion.div initial={{ opacity:0 , x:-60 }} animate={{ opacity:1 , x:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.2 }}>
        <a href="#scrollKeAtas" className="cursor-pointer scroll-smooth">
        <div className="flex items-center gap-2" >
          <img src={Logo} alt="Logo" className="max-w-[80px] max-h-[80px] px-2" />
          <h1
            className={`
            font-bold transition-opacity duration-300
            text-2xl md:text-3xl
            ${nav ? "opacity-0 md:opacity-100" : "opacity-100"}
          `}
          >
            Samyang Roll
          </h1>
        </div>
        </a>
        </motion.div>
        {/* MENU DESKTOP */}
        <ul className="hidden md:flex font-semibold">
          <motion.li initial={{ opacity:0, y:-60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }} className="p-4 cursor-pointer hover:text-orange-600">
            <a href="#features">Kelebihan</a>
          </motion.li>
          <motion.li initial={{ opacity:0, y:-60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.25 }} className="p-4 cursor-pointer hover:text-orange-600 ">
            <a href="#gallery">Gallery</a>
          </motion.li>
          <motion.li initial={{ opacity:0, y:-60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }} className="p-4 cursor-pointer hover:text-orange-600">
            <a href="#order">Order</a>
          </motion.li>
        </ul>
        {/* HAMBURGER ICON */}
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-50"
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>
        {/* MOBILE MENU */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] h-full bg-white shadow-lg ease-in-out duration-300 z-40"
              : "fixed left-[-100%] top-0 w-[70%] h-full ease-in-out duration-300"
          }
        >
          <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="max-w-[80px] max-h-[80px] px-2" />
          <h1 className="text-3xl font-bold mx-0.5 my-5">Samyang Rolls</h1>
          </div>

          <ul className="uppercase p-4 font-semibold">
            <li className="p-4 border-b cursor-pointer">
              <a href="#features" onClick={handleNav}>Kelebihan</a>
            </li>
            <li className="p-4 border-b cursor-pointer">
              <a href="#gallery" onClick={handleNav}>Gallery</a>
            </li>
            <li className="p-4 cursor-pointer">
               <a href="#order" onClick={handleNav}>Order</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
