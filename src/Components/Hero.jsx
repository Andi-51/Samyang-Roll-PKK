import Samyang3 from "../assets/Samyang3.png";
import { motion } from "framer-motion";

const heroTags = ["Rice paper wrap", "Pedas gurih", "Fresh made"];

const heroStats = [
  { value: "01", label: "signature product yang gampang diingat" },
  { value: "3x", label: "lebih standout dari snack biasa" },
  { value: "Hot", label: "visual dan rasa yang langsung kebaca" },
];

const Hero = () => {
  return (
    <section
      id="scrollKeAtas"
      className="relative overflow-x-clip px-3 pb-10 pt-6 text-[#fff7ef] sm:px-4 sm:pb-14"
    >
      <div className="section-shell grain-overlay overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#9f330c_0%,#cf5a17_34%,#f08a1d_68%,#ffd088_100%)] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_62%)]" />
        <div className="absolute right-[-10%] top-[18%] h-44 w-44 rounded-full bg-white/10 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-[-6%] left-[8%] h-36 w-36 rounded-full bg-[#ffd59d]/30 blur-3xl sm:h-52 sm:w-52" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
          <div className="mobile-safe">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="section-kicker text-[#9d3d0d]"
            >
              Korean heat, local favorite
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              className="section-title text-balance mt-6 max-w-3xl text-[clamp(3rem,8vw,6.5rem)]"
            >
              Pedas yang niat, tampil beda dari jualan snack biasa.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="text-balance mt-6 max-w-2xl text-base leading-7 text-[#fff2e4]/92 sm:text-lg"
            >
              Samyang Rolls menggabungkan mie Samyang berbumbu, rice paper yang
              chewy, dan presentasi yang lebih modern. Rasanya bukan cuma pedas,
              tapi punya karakter visual yang langsung bikin orang ingin coba.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#order"
                className="rounded-full bg-[#1f130d] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#fff6ee] transition hover:-translate-y-0.5 hover:bg-[#140b07]"
              >
                Order sekarang
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/18"
              >
                Lihat visual
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#fff3e8]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[26px] border border-white/12 bg-black/12 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="font-serif text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm leading-6 text-[#fff1e6]/88">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mobile-safe relative mx-auto w-full max-w-[31rem]"
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 0.8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[34px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,247,239,0.18),rgba(69,23,7,0.12))] p-4 shadow-[0_30px_80px_rgba(49,19,7,0.3)] backdrop-blur-sm sm:p-5"
            >
              <div className="overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,#ffd8aa_0%,#f5a341_42%,#b94612_100%)] px-4 pt-6 sm:px-6 sm:pt-8">
                <div className="mx-auto flex max-w-[24rem] justify-center">
                  <img
                    src={Samyang3}
                    alt="Samyang Rolls product hero"
                    className="h-auto w-full max-w-[19rem] object-contain drop-shadow-[0_20px_35px_rgba(80,23,7,0.45)] sm:max-w-[23rem]"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative mt-4 max-w-full rounded-[22px] border border-white/45 bg-[#fff7ef] px-4 py-3 text-[#31150d] shadow-xl sm:absolute sm:left-0 sm:top-6 sm:mt-0 sm:max-w-[11rem]"
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#b3591e]">
                Texture
              </p>
              <p className="mt-1 text-sm font-semibold leading-5">
                Luar chewy, dalamnya savory, finish pedas yang langsung naik.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="relative mt-3 max-w-full rounded-[22px] border border-black/5 bg-[#20110c] px-4 py-3 text-[#fff3e8] shadow-2xl sm:absolute sm:bottom-5 sm:right-0 sm:mt-0 sm:max-w-[12rem]"
            >
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#ffb46d]">
                Visual hook
              </p>
              <p className="mt-1 text-sm font-semibold leading-5">
                Bentuknya beda, jadi lebih gampang mencuri perhatian saat dipromosikan.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
