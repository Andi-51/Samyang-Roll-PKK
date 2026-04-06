import { Flame, Clock3, Sparkles, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const featureCards = [
  {
    icon: Flame,
    title: "Pedas yang berlapis",
    copy: "Bukan sekadar pedas numpang lewat. Ada rasa gurih yang bikin sensasi akhirnya tetap enak, bukan cuma menyengat.",
    style: "bg-[#2a160d] text-[#fff3e6] lg:col-span-2",
    iconStyle: "text-[#ffb35d]",
  },
  {
    icon: Sparkles,
    title: "Bentuknya khas",
    copy: "Roll yang rapi memberi kesan lebih niat dan lebih gampang menarik perhatian saat dipajang atau dipromosikan.",
    style: "bg-[#fff7f1] text-[#2c160d]",
    iconStyle: "text-[#d26a21]",
  },
  {
    icon: Clock3,
    title: "Cepat disantap",
    copy: "Cocok untuk jam istirahat, nongkrong, atau jualan event karena gampang dipegang dan tidak terasa merepotkan.",
    style: "bg-[#fff7f1] text-[#2c160d]",
    iconStyle: "text-[#d26a21]",
  },
  {
    icon: BadgeCheck,
    title: "Punya identitas",
    copy: "Nama produk, warna, dan karakter rasa saling nyambung sehingga brand-nya terasa lebih serius, bukan generik.",
    style: "bg-[linear-gradient(145deg,#f6b35d_0%,#f08a1d_100%)] text-[#23120b] lg:col-span-2",
    iconStyle: "text-[#6c2805]",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-3 py-10 sm:px-4 sm:py-14">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mb-8 max-w-3xl"
        >
          <span className="section-kicker text-[#8e4f23]">Why it works</span>
          <h2 className="section-title text-balance mt-5 text-[clamp(2.2rem,5vw,4.5rem)] text-[#24140c]">
            Dibuat supaya terasa lebih berani, lebih rapi, dan lebih gampang dijual.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5d4739]">
            Nilai jual Samyang Rolls ada di pertemuan antara rasa pedas yang
            familiar dan format produk yang jauh lebih menarik secara visual.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className={`mobile-safe warm-shadow rounded-[30px] p-6 sm:p-7 ${feature.style}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`rounded-2xl border border-current/10 bg-white/10 p-3 ${feature.iconStyle}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[0.7rem] font-black uppercase tracking-[0.2em] opacity-65">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-bold sm:text-[2rem]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 opacity-85 sm:text-base">
                  {feature.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
