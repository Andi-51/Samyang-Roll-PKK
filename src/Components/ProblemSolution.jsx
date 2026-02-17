import React from "react";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  return (
    <div className="bg-white border-y" >
      <div className="max-w-[1240px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* PROBLEM */}
        <div>
          <motion.div initial={{ opacity:0, x:-80 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:1.2, delay:0.2 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Pernah ngerasa gini?
            </h2>
          </motion.div>

          <ul className="space-y-4 text-gray-700 font-medium">
            <motion.div initial={{ opacity:0, x:-80 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.4 }}>
              <li>❌ Laper tapi bosan jajanan yang itu-itu aja</li>
            </motion.div>
            <motion.div initial={{ opacity:0, x:-80 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.6 }}>
              <li>❌ Pengen pedas, tapi ribet & kurang praktis</li>
            </motion.div>
            <motion.div initial={{ opacity:0, x:-80 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8, delay:0.8 }}>
              <li>❌ Snack pedas tapi rasanya monoton</li>
            </motion.div>
          </ul>
        </div>

        {/* SOLUTION */}
        <motion.div initial={{ opacity:0, x:80 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:1.2, delay:1 }} className="overflow-x-hidden">
          <div className="bg-amber-500 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#32211b]">
              Samyang Rolls jawabannya
            </h2>

            <p className="text-[#32211b] font-medium leading-relaxed mb-6">
              Samyang Rolls hadir sebagai camilan modern dengan cita rasa pedas khas
              Korea. Mi Samyang berbumbu digulung dengan rice paper, menciptakan
              sensasi pedas, gurih, dan kenyal dalam satu gigitan.
            </p>

            <p className="font-semibold text-[#32211b]">
              🌶 Pedas • Praktis • Unik
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemSolution;
