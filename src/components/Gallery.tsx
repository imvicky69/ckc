"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/image1.png", alt: "Personal Mentorship Session" },
  { src: "/gallery/image2.png", alt: "Specialized Tutoring Lab" },
  { src: "/gallery/image3.png", alt: "Modern Coaching Space" }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Coaching Gallery</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Take a look inside our premium learning environments designed for focus and collaboration.
          </p>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className={`w-full h-full ${index === currentIndex ? "animate-fade-zoom" : ""}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
