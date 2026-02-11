import { Flame, Utensils, Clock } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-orange-200 h-full gap-t-20 p-10 flex flex-col justify-center items-center">
        <div className="flex items-center h-fit flex-col">
        <h1 className="font-bold text-3xl my-2">Kenapa harus Samyang Rolls?</h1>
        <p className="text-gray-700 text-center">Karena Samyang Rolls memiliki perpaduan rasa pedas khas Korea dengan sentuhan yang bikin nagih</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="bg-white p-4 m-4 rounded-lg shadow-lg flex flex-col items-center">
                <Flame size={48} className="text-amber-500 mb-2"/>
                <h1 className="font-bold text-xl my-2">Pedas yang Autentik</h1>
                <p className="text-center text-gray-700">Rasa pedas yang bikin candu hingga menggoyangkan lidah</p>
            </div>
            <div className="bg-white p-4 m-4 rounded-lg shadow-lg flex flex-col items-center">
                <Utensils size={48} className="text-amber-500 mb-2"/>
                <h1 className="font-bold text-xl my-2">Unik & Modern</h1>
                <p className="text-center text-gray-700">Mie yang digulung menggunakan rice paper, menghasilkan texture yang kenyal dan berbeda dari yang lain</p>
            </div>
            <div className="bg-white p-4 m-4 rounded-lg shadow-lg flex flex-col items-center">
                <Clock size={48} className="text-amber-500 mb-2"/>
                <h1 className="font-bold text-xl my-2">Praktis & Cepat</h1>
                <p className="text-center text-gray-700">Siap dinikmati dimana pun tanpa ribet, cocok untuk cemilan segala waktu</p>
            </div>
        </div>
    </div>
  );
};

export default Features;
