import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-8 bg-[#120b07] text-[#fff3e8]">
      <div className="section-shell px-1 py-12 sm:py-14">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.1fr_0.7fr_0.9fr]">
          <div className="mobile-safe">
            <div className="flex items-center gap-4">
              <div className="rounded-[22px] bg-gradient-to-br from-orange-500 to-amber-400 p-2.5 shadow-[0_18px_38px_rgba(255,149,59,0.2)]">
                <img src={Logo} alt="Logo Samyang Rolls" className="h-12 w-12 object-contain" />
              </div>
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#ffb46d]">
                  Samyang Rolls
                </p>
                <h2 className="font-serif text-3xl font-bold">Snack dengan karakter.</h2>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#d8c7ba] sm:text-base">
              Visual kuat, rasa pedas gurih, dan alur order yang singkat. Fokusnya
              sederhana: bikin produk terlihat lebih niat dan lebih meyakinkan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ffb46d]">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-3 text-[#d8c7ba]">
              <li><a href="#story" className="transition hover:text-white">Cerita</a></li>
              <li><a href="#features" className="transition hover:text-white">Kelebihan</a></li>
              <li><a href="#gallery" className="transition hover:text-white">Galeri</a></li>
              <li><a href="#order" className="transition hover:text-white">Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ffb46d]">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-[#d8c7ba]">
              <li><a href="https://wa.me/+6283841218789" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp Andi</a></li>
              <li><a href="https://wa.me/+6283134045038" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp Alda</a></li>
              <li><a href="https://wa.me/+6285777522410" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp Sindi</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-[#a99586]">
          © 2026 Samyang Rolls. Built to feel crafted, not generic.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
