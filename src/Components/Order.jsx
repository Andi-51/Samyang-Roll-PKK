import React from "react";

const Order = () => {
  const phoneNumber = "6283841218789";

  const message = "Halo admin 👋. Saya dari kelas {kelas} tertarik untuk memesan Samyang Rolls.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-gradient-to-b from-orange-500 to-orange-600">
      <div className="py-12">
        <div className=" flex flex-col items-center">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center">
            Siap rasakan pedasnya samyang rolls?
          </h1>
          <p className="text-white w-fit text-center py-4 mb-2">
            Sekali coba, pasti nagih. Jangan cuma lihat fotonya — waktunya
            rasakan pedasnya sekarang juga!
          </p>
        </div>
        <div className="flex justify-center ">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Order Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Order;
