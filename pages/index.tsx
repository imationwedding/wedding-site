{/* Hero with Parallax */}
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

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    transition={{ duration: 1 }}
    className="z-20"
  >
    <h1 className="text-5xl md:text-7xl font-bold text-white">
      Esküvői Videózás
    </h1>
  </motion.div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    transition={{ delay: 0.5, duration: 1 }}
    className="z-20 max-w-xl"
  >
    <p className="text-lg md:text-2xl text-white mt-4">
      Megörökítjük életed legszebb pillanatait, hogy újra és újra átélhesd őket.
    </p>
  </motion.div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 1, duration: 1 }}
    className="z-20"
  >
    <a
      href="#contact"
      className="mt-6 px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition transform hover:scale-105 inline-block"
    >
      Kapcsolatfelvétel
    </a>
  </motion.div>
</section>
