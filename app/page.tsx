import React from "react";

const parallaxStyle = (speed: number) => ({
  backgroundAttachment: "fixed",
  backgroundPosition: `center ${speed * 100}px`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export default function Page() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529634806980-3d3e1f1c1f5b')",
        ...parallaxStyle(0.3),
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Wedding</h1>
      </div>
    </main>
  );
}
