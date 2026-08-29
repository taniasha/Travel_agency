"use client";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [fadeIn, setFadeIn] = useState(false);

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    if (videoRef.current) {
      // Try to play video immediately
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setFadeIn(true))
          .catch(() => {
            // fallback: still fade in even if autoplay blocked
            setFadeIn(true);
          });
      } else {
        setFadeIn(true);
      }
    }
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.jpeg')" }}
    >
      {/* Desktop Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 hidden h-full w-full object-cover md:block transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"
          }`}
        src="/videos/new-video.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/banner.jpeg"
      />

      {/* Mobile Video */}
      <video className="absolute inset-0 block h-full w-full object-cover object-[50%_65%] md:hidden"
        src="/videos/new-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/banner.jpeg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="max-w-4xl text-5xl sm:text-5xl md:text-5xl lg:text-[55px] font-medium tracking-widest font-alternate ">
          MOMENTS THAT MOVE YOU
        </h1>
        {/* <p className=" my-8 text-xs sm:text-sm md:text-sm tracking-widest text-white/90 font-brandon">
          AWARD-WINNING LUXURY TRAVEL EXPERTS CRAFTING BESPOKE JOURNEYS FOR DISCERNING
          TRAVELLERS SINCE 2005
        </p> */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button onClick={() => {
            const el = document.getElementById("journey");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
            className="
  relative overflow-hidden
  rounded-xs border border-white/70

  px-3 py-4
  sm:px-5 sm:py-3
  lg:px-3 lg:py-3

  text-[13px] leading-[12px] font-bold tracking-[1.2px]
  text-white

  transition-colors duration-300 ease-in-out
  hover:text-black
 cursor-pointer
  before:absolute before:inset-0
  before:bg-white
  before:opacity-0
  before:transition-opacity before:duration-300 before:ease-in-out
  hover:before:opacity-100
"

          >
            <span className="relative z-10" >
              JOURNEYS THAT INSPIRE</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={handleScroll} />
    </section>
  );
}

const ScrollIndicator: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-0 mt-2 cursor-pointer left-1/2 z-10 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-all duration-300"
      aria-label="Scroll to content"
    >
      <span className="text-xs sm:text-sm text-white uppercase tracking-widest mt-4 font-brandon">
        More
      </span>
      <div className="w-[2px] h-12 bg-white animate-pulse-scale origin-top"></div>
      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scaleY(0.2);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2.5s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};
