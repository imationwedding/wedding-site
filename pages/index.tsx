import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-pink-600">Imation Wedding</h1>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="hover:text-pink-600">Főoldal</a></li>
            <li><a href="#about" className="hover:text-pink-600">Rólunk</a></li>
            <li><a href="#portfolio" className="hover:text-pink-600">Portfólió</a></li>
            <li><a href="#contact" className="hover:text-pink-600">Kapcsolat</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529634806980-3d3e1f1c1f5b')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white z-10"
        >
          Esküvői Videózás
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl text-white mt-4 z-10 max-w-xl"
        >
          Megörökítjük életed legszebb pillanatait, hogy újra és újra átélhesd őket.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 z-10 px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
        >
          Kapcsolatfelvétel
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Rólunk</h2>
        <p className="text-lg text-gray-600">
          Több éves tapasztalattal készítünk gyönyörű, érzelmekkel teli esküvői
          filmeket. Nemcsak rögzítjük a pillanatokat, hanem történetet mesélünk,
          amely örökre megmarad.
        </p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-10">Portfólió</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["ScMzIvxBSi4", "dQw4w9WgXcQ", "tgbNymZ7vqY"].map((id, i) => (
            <div key={i} className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Esküvői videó ${i + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Kapcsolat</h2>
        <p className="text-lg text-gray-600 mb-6">
          Vedd fel velünk a kapcsolatot, és beszéljük meg a részleteket!
        </p>
        <a
          href="mailto:info@imationwedding.hu"
          className="px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
        >
          Email küldése
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Imation Wedding – Minden jog fenntartva</p>
      </footer>
    </div>
  );
}
