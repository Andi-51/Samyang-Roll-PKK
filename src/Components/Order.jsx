import { motion } from "framer-motion";

const Order = () => {
  const phoneNumber = "6283841218789";
  const message =
    "Halo kak. Saya dari kelas {kelas} tertarik untuk memesan Samyang Rolls.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="order" className="px-3 py-10 sm:px-4 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="section-shell overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#1d1009_0%,#5f250f_24%,#c04f14_62%,#f7b769_100%)] px-5 py-8 text-[#fff6ef] sm:px-8 sm:py-10 lg:px-10"
      >
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_65%)] lg:block" />
        <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div className="mobile-safe">
            <span className="section-kicker bg-white/14 text-[#ffd8b2]">Ready to sell</span>
            <h2 className="section-title text-balance mt-5 text-[clamp(2.2rem,5vw,4.8rem)]">
              Siap bikin orang berhenti scroll lalu langsung pesan.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#fff0e0]/88">
              Gunakan copy yang singkat, visual yang kuat, lalu arahkan ke WhatsApp
              supaya proses order tetap cepat dan tidak bikin orang mikir dua kali.
            </p>
          </div>

          <div className="mobile-safe rounded-[28px] border border-white/16 bg-white/10 p-4 backdrop-blur-md sm:p-5">
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-[#1b0f0a] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#fff7ef] transition hover:-translate-y-0.5 hover:bg-[#120906]"
            >
              Pesan Sekarang via WhatsApp
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#ffe9d2]/82">
              Pesan akan langsung membuka template chat agar calon pembeli tidak
              perlu mengetik dari nol.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Order;
