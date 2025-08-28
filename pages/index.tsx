import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax függvény
  const parallaxStyle = (speed: number) => ({
    transform: `translateY(${offsetY * speed}px)`,
  });

  // Animációk
  const fadeInUp: Variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  // Videók ID-i
  const portfolioVideos = ["ScMzIvxBSi4", "dQw4w9WgXcQ", "tgbNymZ7vqY"];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-pink-600">Imation Wedding</h1>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="hover:text-pink-600 transition">Főoldal</a></li>
            <li><a href="#about" className="hover:text-pink-600 transition">Rólunk</a></li>
            <li><a href="#portfolio" className="hover:text-pink-600 transition">Portfólió</a></li>
            <li><a href="#contact" className="hover:text-pink-600 transition">Kapcsolat</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529634806980-3d3e1f1c1f5b')",
            ...parallaxStyle(0.3),
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white z-20"
        >
          Esküvői Videózás
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-white mt-4 z-20 max-w-xl"
        >
          Megörökítjük életed legszebb pillanatait, hogy újra és újra átélhesd őket.
        </motion.p>
        <motion.a
          href="#contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 z-20 px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition transform hover:scale-105"
        >
          Kapcsolatfelvétel
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 px-6 md:px-20 text-center max-w-4xl mx-auto overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
            ...parallaxStyle(0.2),
          }}
        />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-6 relative z-10"
        >
          Rólunk
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 relative z-10"
        >
          Több éves tapasztalattal készítünk gyönyörű, érzelmekkel teli esküvői filmeket.
          Nemcsak rögzítjük a pillanatokat, hanem történetet mesélünk, amely örökre megmarad.
        </motion.p>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="relative py-20 px-6 md:px-20 bg-gray-50 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517841905240-472988babdf9')",
            ...parallaxStyle(0.15),
          }}
        />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-10 relative z-10"
        >
          Portfólió
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {portfolioVideos.map((id, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Esküvői videó ${i + 1}`}
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-6 md:px-20 text-center max-w-4xl mx-auto overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517849845537-4d257902454a')",
            ...parallaxStyle(0.1),
          }}
        />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-6 relative z-10"
        >
          Kapcsolat
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-6 relative z-10"
        >
          Vedd fel velünk a kapcsolatot, és beszéljük meg a részleteket!
        </motion.p>
        <motion.a
          href="mailto:info@imationwedding.hu"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition transform hover:scale-105 relative z-10"
        >
          Email küldése
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Imation Wedding – Minden jog fenntartva</p>
      </footer>
    </div>
  );
}
