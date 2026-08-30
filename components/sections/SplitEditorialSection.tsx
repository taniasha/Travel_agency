import Image from "next/image";
import type { JSX } from "react";

export default function SplitEditorialSection(): JSX.Element {
  return (
    <section className="w-full bg-[#E3D3C9]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {/* Image */}
        <div className="relative w-full h-[70vh] md:h-[70vh] lg:h-[90vh] lg:m-10 sm:m-6">
          <Image
            src="/images/tree.webp"
            alt="Quiet travel moment"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-bottom"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Text on image */}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15 z-10" />

          {/* Text on image */}
          <div className="absolute inset-0 z-20 flex items-start justify-center p-6 md:p-12">
            <div className="text-white text-xl md:text-xl leading-relaxed max-w-md space-y-0 text-center">
              <p className="">"Quiet morning journeys and</p>

              <p className="text-center">starlit evenings.</p>

              <p className="">Moments that linger long after</p>

              <p className="text-center">they end.</p>

              <p className="">
                Travel that feels considered,
                <br />
                intentional, and perhaps even
                <br />
                harder to put into words. "
              </p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-8 lg:py-16 sm:py-0 md:py-15">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-wider font-alternate mb-6">
              OUR WAY OF TRAVELLING
            </h2>

            <p className="text-md text-gray-700 leading-relaxed mb-6">
              At ISKY, we don't start with an itinerary — we start with you. How
              you like to move through the world. What makes a place feel right.
              We build journeys around your rhythm: the right pace, the perfect
              stays, the details that matter. Travel that's thoughtful,
              seamless, and unmistakably yours.
            </p>

            <button
              className="
    relative overflow-hidden 
    border border-black bg-black rounded-xs
    px-4 py-3
    text-[11px] font-bold tracking-[1.2px]
    text-white
    transition-colors duration-300 ease-in-out
    hover:text-black
    before:absolute before:inset-0
    before:bg-white
    before:opacity-0
    before:transition-opacity before:duration-300
    hover:before:opacity-100
  "
            >
              <span className="relative z-10">EXPLORE OUR APPROACH</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
