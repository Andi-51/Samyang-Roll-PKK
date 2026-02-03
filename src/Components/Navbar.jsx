import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

  const [Nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='bg-white/30 backdrop-blur-md rounded-b-xl shadow-sm'>
    <div className='flex justify-between items-center px-4 mx-auto max-w-[1240px] text-[#32211b] h-24'>
        <h1 className='text-[#32211b] w-full text-3xl font-bold '>Samyang Roll</h1>
        <ul className='md:flex hidden'>
          <li className='p-4'>test</li>
          <li className='p-4'>test</li>
          <li className='p-4'>test</li>
        </ul>
        <div>
          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
          </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar