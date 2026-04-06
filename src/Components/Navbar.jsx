import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Logo.png";

const navItems = [
  { label: "Cerita", href: "#story" },
  { label: "Kelebihan", href: "#features" },
  { label: "Galeri", href: "#gallery" },
  { label: "Order", href: "#order" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", nav);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [nav]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="section-shell soft-panel flex min-h-18 items-center justify-between rounded-[26px] px-4 py-3 text-[#32211b] sm:px-6"
      >
        <a href="#scrollKeAtas" className="mobile-safe flex min-w-0 items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500 via-amber-400 to-orange-700 p-2.5 warm-shadow">
            <img src={Logo} alt="Logo Samyang Rolls" className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#9d5a27]">
              Street Snack
            </p>
            <h1 className="truncate font-serif text-xl font-bold sm:text-2xl">
              Samyang Rolls
            </h1>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 * index }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#5f402e] transition hover:bg-white hover:text-[#20110c]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setNav((prev) => !prev)}
          aria-label={nav ? "Tutup menu" : "Buka menu"}
          aria-expanded={nav}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-[#32211b] md:hidden"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {nav && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup menu"
              className="fixed inset-0 z-40 bg-[#1d120a]/45 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNav(false)}
            />
            <motion.aside
              initial={{ x: "-100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-3 left-3 z-50 w-[min(86vw,22rem)] rounded-[28px] border border-white/40 bg-[#fff6ed] p-5 shadow-2xl md:hidden"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 p-2">
                  <img src={Logo} alt="Logo Samyang Rolls" className="h-11 w-11 object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#9d5a27]">
                    Crispy Heat
                  </p>
                  <h2 className="truncate font-serif text-2xl font-bold">Samyang Rolls</h2>
                </div>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setNav(false)}
                    className="block rounded-2xl border border-black/6 bg-white px-4 py-4 text-base font-semibold text-[#41271b] transition hover:border-orange-300 hover:bg-orange-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
