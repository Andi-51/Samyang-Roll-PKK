import { useEffect } from "react";
import { Flame, Utensils, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {

    useEffect(() => {
        AOS.init({
           once:true,
           offset:150,

        });
    }, []);

  return (
    <div className="bg-orange-50 py-16 md:py-24 px-4 gap-t-20 p-10 flex flex-col justify-center items-center" id="features">
        <div className="flex items-center h-fit flex-col">
            <div>
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-2 text-center">Kenapa harus Samyang Rolls?</h1>
            </div>
            <div>
                <p className="text-gray-700 text-center max-w-xl md:max-w-2xl lg:max-w-3xl mb-8">Karena Samyang Rolls memiliki perpaduan rasa pedas khas Korea dengan sentuhan yang bikin nagih</p>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div data-aos="flip-right" data-aos-duration="500" data-aos-delay="200" className="bg-white p-4 rounded-lg shadow-xl flex flex-col items-center">
                <Flame size={48} className="text-amber-500 mb-2"/>
                <h1 className="font-bold text-xl my-2">Pedas yang Autentik</h1>
                <p className="text-center text-gray-700">Rasa pedas yang bikin candu hingga menggoyangkan lidah</p>
            </div>
            <div data-aos="flip-right" data-aos-duration="500" data-aos-delay="400"  className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center">
                <Utensils size={48} className="text-amber-500 mb-2"/>
                <h1 className="font-bold text-xl my-2">Unik & Modern</h1>
                <p className="text-center text-gray-700">Mie yang digulung menggunakan rice paper, menghasilkan texture yang kenyal dan berbeda dari yang lain</p>
            </div>
            <div data-aos="flip-right" data-aos-duration="500" data-aos-delay="600"  className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center">
                <Clock size={48} className="text-amber-500 mb-2"/>
                <h1 className="font-bold text-xl my-2">Praktis & Cepat</h1>
                <p className="text-center text-gray-700">Siap dinikmati dimana pun tanpa ribet, cocok untuk cemilan segala waktu</p>
            </div>
        </div>
    </div>
  );
};

export default Features;
