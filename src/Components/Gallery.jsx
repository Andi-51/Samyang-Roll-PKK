import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery1 from "../assets/Gallery1.jpeg";
import Gallery2 from "../assets/Gallery2.jpeg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  const images = [Gallery1, Gallery2];

  return (
    <section id="gallery" className="px-3 py-10 sm:px-4 sm:py-14">
      <div className="section-shell grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mobile-safe"
        >
          <span className="section-kicker text-[#8e4f23]">Brand visual</span>
          <h2 className="section-title text-balance mt-5 text-[clamp(2.2rem,5vw,4.2rem)] text-[#26150d]">
            Tampilan produk perlu terasa real, hangat, dan menggoda.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5d4739]">
            Galeri ini dibuat seperti editorial makanan: fokus ke tekstur,
            warna hangat, dan framing yang membuat produk terlihat lebih niat.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="soft-panel rounded-[24px] p-4">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#b3591e]">
                Angle
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5d4739]">
                Fokus pada gulungan, saus, dan detail permukaan supaya rasa bisa terlihat.
              </p>
            </div>
            <div className="soft-panel rounded-[24px] p-4">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#b3591e]">
                Mood
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5d4739]">
                Tone hangat dan sedikit kontras memberi kesan lebih crafted, bukan template.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mobile-safe overflow-hidden rounded-[34px] border border-[#5f3b1c]/10 bg-[#fff7f0] p-3 shadow-[0_24px_60px_rgba(90,50,18,0.12)] sm:p-4"
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-1">
                <div className="relative h-[260px] overflow-hidden rounded-[26px] bg-[#f0dfce] sm:h-[360px]">
                  <img
                    src={img}
                    alt={`Galeri Samyang Rolls ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(17,8,4,0.55)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/70">
                      Frame {index + 1}
                    </p>
                    <p className="mt-2 max-w-xs font-serif text-2xl font-bold">
                      Detail yang bikin snack ini kelihatan lebih premium.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
