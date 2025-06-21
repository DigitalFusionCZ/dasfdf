'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = 'Kavárna U Kódu - Nejlepší káva v Praze';

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8D8741" /><stop offset="100%" stop-color="#659DBD" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="font-sans text-stone-800 bg-f4f1e8 leading-relaxed">
      {/* Navbar */}
      <nav className="bg-f4f1e8 py-4 px-6 fixed w-full z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-8d8741">Testovací Kavárna "U Kódu"</a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-stone-800 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#o-nas" className="hover:text-659dbd transition-colors duration-300">O nás</a>
            <a href="#kontakt" className="hover:text-659dbd transition-colors duration-300">Kontakt</a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-f4f1e8 bg-opacity-95 z-20 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 text-xl`}
        >
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-stone-800">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#o-nas" onClick={toggleMenu} className="hover:text-659dbd transition-colors duration-300">O nás</a>
          <a href="#kontakt" onClick={toggleMenu} className="hover:text-659dbd transition-colors duration-300">Kontakt</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511920170033-9137d57bc490?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
          <div className="absolute inset-0 bg-stone-900 opacity-60"></div>
          <div className="relative z-10 p-8 rounded-lg max-w-2xl bg-black bg-opacity-40">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-f4f1e8">Testovací Kavárna "U Kódu"</h1>
            <p className="text-xl md:text-2xl text-f4f1e8">Nejlepší káva pro vaše bugy.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-16 bg-f4f1e8 text-stone-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-8d8741">O nás</h2>
            <p className="text-lg leading-relaxed text-left">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 bg-8d8741 text-f4f1e8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Kontakt</h2>
            <div className="text-lg space-y-4">
              <p><strong>Email:</strong> test@kavarna.cz</p>
              <p><strong>Telefon:</strong> +420 777 123 456</p>
              <p><strong>Adresa:</strong> Bugfixová 1, 110 00 Praha 1</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-6 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6">
          Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-659dbd hover:underline">DigitalFusion</a>
        </div>
      </footer>

      {/* Inline Tailwind CSS Colors (for reference) */}
      <style jsx global>{`
        .bg-f4f1e8 { background-color: #F4F1E8; }
        .text-f4f1e8 { color: #F4F1E8; }
        .bg-8d8741 { background-color: #8D8741; }
        .text-8d8741 { color: #8D8741; }
        .bg-659dbd { background-color: #659DBD; }
        .text-659dbd { color: #659DBD; }
        .hover\:text-659dbd:hover { color: #659DBD; }
      `}</style>
    </div>
  );
}
