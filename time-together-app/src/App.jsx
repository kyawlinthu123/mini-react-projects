import { useEffect, useState } from "react";

const startDate = new Date("2025-01-28T19:32:00");

function App() {
  const [elapsed, setElapsed] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "/images/pic1.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
  ];

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-pink-100 overflow-hidden">
      {/* Background images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="absolute rounded-2xl shadow-lg opacity-70"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 80 + 5}%`,
            width: "150px",
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        />
      ))}

      {/* Counter */}
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold text-red-600 drop-shadow-lg">
          We've been together for
        </h1>
        <p className="mt-4 text-4xl font-mono text-gray-800">{elapsed}</p>
      </div>
    </div>
  );
}

export default App;
