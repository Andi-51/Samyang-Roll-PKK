import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [title,setTitle] = useState(true);

  const handleNav = () => {
    setNav(!nav);
    setTitle(!title);
  }

  // const handleTitle = () => {
  //   setTitle(!title);
  // }

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-b-xl shadow-sm">
      <div className="flex justify-between items-center px-4 mx-auto max-w-[1240px] text-[#32211b] h-24">
        <h1 className={!title ? "text-[#32211b] w-full text-3xl font-bold opacity-0" : "text-[#32211b] w-full text-3xl font-bold" }>
          Samyang Roll
        </h1>
        <ul className="md:flex hidden">
          <li className="p-4">test</li>
          <li className="p-4">test</li>
          <li className="p-4">test</li>
        </ul>
        <div>
          <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div> 
        <div
          className={
            !nav
              ? "fixed left-0 top-9 w-[60%] opacity-95 h-full z-50 ease-in-out duration-500"
              : "fixed left-[-100%] bg-[#306cc7]top-0 w-[60%] ease-in-out duration-400"
          }
        >
          <h1 className="text-[#32211b] w-full text-3xl font-bold m-5">Samyang Roll</h1>
          <ul className="uppercase p-4">
          <li className="p-4">test</li>
          <li className="p-4">test</li>
          <li className="p-4">test</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
