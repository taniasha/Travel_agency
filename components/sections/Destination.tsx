"use client";

import  Link  from "next/link";
import Image from "next/image";

interface Trip {
  imageUrl: string;
  packageSlug?: string;
  destinationSlug?: string;
  title: string;
  subtitle?: string;
  duration: string;
  priceFrom?: string;
  description: string;
  country?:string;
}

const TRIPS: Trip[] = [
  {
    country:"ITALY",
    destinationSlug: "italy",
    packageSlug:"ULTIMATE_ITALIAN_HONEYMOON",
    imageUrl: "/images/THEULTIMATEITALIANHONEYMOON-COVER.webp",
    title: "THE ULTIMATE ITALIAN HONEYMOON: VINTAGE ROMANCE, PRIVATE EXPERIENCES & COASTAL ELEGANCE",
    duration: "12 NIGHTS",
    priceFrom: "$15,900 per couple (excluding international flights)",
    description: "This extraordinary honeymoon journey is designed for couples seeking a seamless blend of romance, privacy, and timeless Italian elegance across the country’s most iconic destinations.",
  },
  {
    country:"NEW ZEALAND",
    destinationSlug:"new-zealand",
    packageSlug:"PRIVATE_HELI_JOURNEY_SOUTH_ISLAND",
    imageUrl: "/images/PRIVATEHELIJOURNEY-COVER.webp",
        title: "PRIVATE HELI JOURNEY: ALPINE WONDERS TO MARLBOROUGH INDULGENCE",
    duration: "10 NIGHTS",
    priceFrom: "$15,900 per person (excluding international flights)",
        description: "This extraordinary South Island journey is designed for travellers seeking the pinnacle of privacy, exclusivity, and immersive natural beauty—experienced through seamless helicopter transfers and handpicked luxury retreats.",
  },
  {
    country:"MOROCCO",
      destinationSlug:"morocco",
      packageSlug:"BEYOND_THE_ATLAS",
    imageUrl: "/images/BEYONDTHEATLAS-COVER.webp",
      title: "BEYOND THE ATLAS: MOROCCO’S HIDDEN DESERT KINGDOM",
        duration: "10 NIGHTS",
        priceFrom:"$11,400 per person (excluding international flights)",
        description: "This extraordinary journey ventures beyond Morocco’s well-known cities into the country’s most remote desert landscapes, ancient caravan routes, and hidden oasis valleys.",
   },
  {
    country:"JAPAN",
      destinationSlug:"japan",
      packageSlug:"YIN_YAG_JAPAN",
    imageUrl: "/images/YIN&YANGOFJAPAN-COVER.webp",
     title: "YIN & YANG OF JAPAN: Tokyo to Kyoto Slow Luxury",
        duration: "8 Nights",
        priceFrom: "$14,500 per person (excluding international flights)",
        description: "This journey explores the beautiful contrast that defines Japan — the vibrant energy of Tokyo and the serene traditions of Kyoto...",
       },
];

export default function DestinationSlider() {
  return (
    <section  id="journey"
      className=" sm:py-20 py-10 md:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Backdrop.webp')" }}
    >
      {/* Heading - Visible on md and below */}
      <div className="lg:hidden pt-5 px-4 sm:px-6 text-white mb-8">
        <h2 className="text-3xl sm:text-3xl font-medium tracking-[1.2] font-alternate font-extrabold">
          THE INSIDER'S 2026
        </h2>
        <p className="mt-4 sm:text-xl md:text-lg italic text-white/70">
          Exclusive access to the world's best-kept secrets...        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        {/* Horizontal Scroll */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-scroll ms-10 pb-6 px-4 sm:px-6 md:px-0 md:pr-8 lg:pr-10  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Blank Div - Only on lg */}
          {/* <div className="hidden lg:flex relative min-w-[10px] aspect-3/5 overflow-hidden shrink-0">
          </div> */}

          {/* Header - Only on lg */}
          <div className="hidden lg:flex relative min-w-[100px] aspect-5/5 overflow-hidden shrink-0">
            <div className="text-white flex flex-col mt-12 pb-8 px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[1.2] font-alternate">
                 THE INSIDER'S 2026
              </h2>
              <p className="mt-4 lg:text-xl sm:text-sm italic text-white/70">
                  Exclusive access to the world's best-kept secrets...              </p>
            </div>
          </div>

          {TRIPS.map((trip, index) => (
            <div
              key={index}
className="group relative min-w-[140px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[280px] aspect-[2/4] overflow-hidden shrink-0"            >
              {/* Image */}
              <Image
                src={trip.imageUrl}
                alt={trip.title}
                fill
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 280px"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Duration */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xs tracking-widest text-white font-extrabold">
                {trip.duration}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 transition-all duration-300">
                   <p className="mt-2 sm:mt-3 text-xs font-bold leading-5 mb-2 text-white/80">
                    {trip.country}
                  </p>
                <h1 className="font-brandon text-xxs sm:text-sm font-semibold tracking-widest text-white line-clamp-2 font-alternate font-bold">
                  {trip.title}
                </h1>

                {/* Hidden on default */}
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">

                  <p className="mt-2 sm:mt-3 text-xs leading-5 text-white/80">
                    {trip.description}
                  </p>

                  {trip.priceFrom && (
                    <p className="mt-2 text-xs italic text-white">
                      {trip.priceFrom}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link  href={`/experience-types/destination/${trip.destinationSlug}/packages/${trip.packageSlug}`}
                  className="
                  inline-block
                    mt-2 sm:mt-4
                    relative overflow-hidden
                    border border-white
                    px-3 sm:px-4 py-1 sm:py-2
                    text-xs tracking-widest text-white

                    transition-all duration-300 ease-out
                    hover:text-black hover:scale-[1.03]

                    before:absolute before:inset-0
                    before:bg-white
                    before:translate-y-full
                    before:transition-transform before:duration-300 before:ease-out
                    hover:before:translate-y-0
                  "
                >
                  <span className="relative z-10">EXPLORE TRIP</span>
                </Link>
              </div>
            </div>
          ))}
         
        </div>
      </div>







    </section>
  );
}