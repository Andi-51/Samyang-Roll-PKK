import React from "react";
import Samyang3 from "../assets/Samyang3.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-500 to-orange-600 flex items-center text-white" id="scrollKeAtas">
      <div className="mx-auto max-w-[1240px] w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT */}
        <div className="text-center md:text-left">
          <motion.div initial={{ opacity:0, y:-80 }} animate={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.2 }}>
            <h1 className="font-bold text-4xl lg:text-6xl">Samyang Rolls</h1>
          </motion.div>
          <motion.div initial={{ opacity:0, x:-80 }} animate={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.25 }}>
            <h2 className="font-semibold text-2xl lg:text-4xl my-4">
              Pedas & Gurih!
            </h2>
          </motion.div>
          <div className="mt-8 md:w-fit">
          <motion.div initial={{ opacity:0, y:80 }} animate={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.3 }} whileHover={{ y:-4, transition:{ duration:0.1, delay:0 } }} className="md:w-fit">
            <a href="#order" className="bg-white rounded-full px-6 py-3 mt-4 font-semibold text-lg hover:-translate-y-1 transition text-orange-500 md:w-fit">
              Order Sekarang!
            </a>
          </motion.div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <motion.div initial={{ opacity:0, x:80 }} animate={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.4, delay:0.6 }} className="overflow-x-hidden">
          <img
            src={Samyang3}
            alt="Samyang Image"
            className="max-w-[300px] md:max-w-[450px]"
          />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
