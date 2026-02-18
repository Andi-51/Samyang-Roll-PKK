import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"

const ProblemSolution = () => {

  useEffect(() => {
    AOS.init({
      once:true,
      offset:100,

    });
  }, []);

  return (
    <div className="bg-white border-y">
      <div className="max-w-[1240px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* PROBLEM */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            Pernah ngerasa gini?
          </h2>

          <ul className="space-y-4 text-gray-700 font-medium">
            <li data-aos="fade-right" data-aos-duration="300" data-aos-delay="100">❌ Laper tapi bosan jajanan yang itu-itu aja</li>
            <li data-aos="fade-right" data-aos-duration="300" data-aos-delay="200">❌ Pengen pedas, tapi ribet & kurang praktis</li>
            <li data-aos="fade-right" data-aos-duration="300" data-aos-delay="300">❌ Snack pedas tapi rasanya monoton</li>
          </ul>
        </div>

        {/* SOLUTION */}
        <div data-aos="zoom-in-left" data-aos-duration="600" data-aos-delay="400" className="bg-amber-500 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#32211b]">
            Samyang Rolls jawabannya
          </h2>

          <p className="text-[#32211b] font-medium leading-relaxed mb-6">
            Samyang Rolls hadir sebagai camilan modern dengan cita rasa pedas
            khas Korea. Mi Samyang berbumbu digulung dengan rice paper,
            menciptakan sensasi pedas, gurih, dan kenyal dalam satu gigitan.
          </p>

          <p className="font-semibold text-[#32211b]">
            🌶 Pedas • Praktis • Unik
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
