// app/page.tsx
import React from "react";

const videos = [
  {
    title: "Esküvői Videó 1",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Esküvői Videó 2",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Fejléc */}
      <header className="bg-pink-200 py-8 text-center">
        <h1 className="text-4xl font-bold">Esküvő Videós Szolgáltatás</h1>
        <p className="mt-2 text-lg">Örökítsd meg a nagy nap minden pillanatát!</p>
      </header>

      {/* Bemutatkozás */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Rólunk</h2>
        <p className="text-gray-700">
          Profi esküvői videós csapat vagyunk, akik a legszebb pillanatokat örökítik meg. 
          Legyen szó romantikus, vidám vagy elegáns videóról, mi minden stílusban a legjobbat nyújtjuk.
        </p>
      </section>

      {/* Videók */}
      <section className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Videó Galéria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="bg-white shadow rounded overflow-hidden">
              <video controls className="w-full h-auto">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-xl font-medium p-4">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Kapcsolat */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Kapcsolat</h2>
        <p className="mb-4">Írj nekünk az alábbi elérhetőségeken:</p>
        <p>Email: <a href="mailto:info@eskuvovideo.hu" className="text-pink-500">info@eskuvovideo.hu</a></p>
        <p>Telefon: <a href="tel:+36123456789" className="text-pink-500">+36 1 234 5678</a></p>
      </section>

      {/* Lábléc */}
      <footer className="bg-pink-200 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Esküvő Videós. Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}
