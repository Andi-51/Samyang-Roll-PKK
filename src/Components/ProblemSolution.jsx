import { motion } from "framer-motion";
import { AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

const problems = [
  "Laper, tapi jajanan yang ada terasa terlalu biasa dan gampang dilupakan.",
  "Ingin camilan pedas yang praktis, bukan yang ribet disiapkan atau cepat bikin enek.",
  "Butuh produk yang lebih menarik diposting dan gampang dipromosikan ke teman kelas.",
];

const solutionCards = [
  {
    icon: Sparkles,
    title: "Look lebih premium",
    copy: "Tampilan gulungannya lebih rapi dan lebih menarik di kamera.",
  },
  {
    icon: CheckCircle2,
    title: "Mudah dipahami",
    copy: "Sekali lihat, orang langsung tahu ini snack pedas dengan twist unik.",
  },
  {
    icon: Sparkles,
    title: "Lebih memorable",
    copy: "Nama, visual, dan rasa saling mendukung jadi brand recall lebih kuat.",
  },
];

const ProblemSolution = () => {
  return (
    <section id="story" className="px-3 py-10 sm:px-4 sm:py-14">
      <div className="section-shell grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="soft-panel mobile-safe rounded-[34px] p-6 sm:p-8"
        >
          <span className="section-kicker text-[#8e4f23]">Masalah pasar</span>
          <h2 className="section-title text-balance mt-5 text-[clamp(2.2rem,5vw,4.4rem)] text-[#26150d]">
            Orang gampang tertarik kalau snack-nya punya rasa dan bentuk yang kuat.
          </h2>
          <div className="mt-8 space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 rounded-[24px] border border-[#5f3b1c]/8 bg-[#fff8f3] p-4"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#d66c27]" />
                <p className="text-sm leading-6 text-[#5c4637] sm:text-base">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mobile-safe overflow-hidden rounded-[34px] bg-[#20110b] p-1"
        >
          <div className="h-full rounded-[30px] bg-[linear-gradient(160deg,#2a150b_0%,#4c220d_26%,#ab4b11_62%,#ffbf75_140%)] p-6 text-[#fff6ee] sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-kicker bg-white/14 text-[#ffd7b1]">Solusi produk</span>
              <span className="rounded-full border border-white/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                Made to stand out
              </span>
            </div>

            <h2 className="section-title text-balance mt-5 text-[clamp(2.2rem,5vw,4.1rem)]">
              Samyang Rolls memberi alasan yang jelas untuk beli dan repost.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#ffefe2]/86">
              Kombinasi mie Samyang, rice paper, dan presentasi yang rapi
              menciptakan snack yang terasa lebih modern. Produk ini tidak cuma
              enak, tapi juga punya cerita visual yang lebih mudah dijual.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {solutionCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
                  >
                    <Icon className="h-5 w-5 text-[#ffca8d]" />
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#ffe9d5]/82">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
