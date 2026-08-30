"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Section {
  title1: string;
  description1: string;
  image1: string;
}

interface Hotel {
  image: string;
  name: string;
  desc: string;
}

interface SimilarPackage {
  slug: string;
  packageSlug: string;
  heroImage: string;
  title: string;
  heroMeta: {
    country?: string;
    duration: string;
    headline: string;
  };
}

interface PackageType {
  title: string;
  heroImage: string;
  intro: string;
  heroMeta: {
    country: string;
    headline: string;
    when: string;
    duration: string;
    price: { label: string };
  };
  sections: Section[];
  hotels: Hotel[];
  similarPackages?: SimilarPackage[];
}

interface Props {
  pkg: PackageType | null;
}

export default function PackageClient({ pkg }: Props) {
  const similarPackages = pkg?.similarPackages ?? [];
  const [active, setActive] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // ✅ All hooks must come before any conditional return
  useEffect(() => {
    const sections = document.querySelectorAll(".story-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target as Element);
            setActive(index);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl tracking-widest text-gray-400">Package not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <Navbar appearance="home-scroll" />

      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setHeroLoaded(true)}
        />

        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 sm:px-16 lg:px-24">
          {/* Country tag */}
          <div className="mb-6">
            <span
              style={{ fontFamily: "'Brandon', sans-serif", letterSpacing: "4px", fontSize: "11px" }}
              className="text-white/60 uppercase"
            >
              {pkg.heroMeta.country}
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-wide mb-10">
            {pkg.heroMeta.headline}
          </h1>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 lg:gap-16 border-t border-white/20 pt-8">
            <div>
              <p className="text-white/40 text-[10px] tracking-[3px] uppercase mb-1">Duration</p>
              <p className="text-white text-sm tracking-widest">{pkg.heroMeta.duration}</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] tracking-[3px] uppercase mb-1">Price From</p>
              <p className="text-white text-sm tracking-widest italic">{pkg.heroMeta.price?.label}</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] tracking-[3px] uppercase mb-1">Best Time</p>
              <p className="text-white text-sm tracking-widest">{pkg.heroMeta.when}</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 sm:right-16 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[9px] tracking-[3px] uppercase rotate-90 origin-center mb-6">
            Scroll
          </span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <div className="pkg-scroll-line absolute top-0 left-0 w-full h-[40%] bg-white/60" />
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-start gap-6 mb-12">
          <div className="w-8 h-px bg-black/30 mt-3 shrink-0" />
          <p className="text-[10px] tracking-[4px] uppercase text-black/40">The Journey</p>
        </div>
        <div className="space-y-6 text-lg leading-[1.9] text-gray-600 font-light">
          {pkg.intro.split("\n").map((line, i) =>
            line.trim() ? <p key={i}>{line}</p> : null
          )}
        </div>
      </section>

      {/* ── STORY SECTIONS ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-32">

        {/* DESKTOP: Scroll-driven sticky layout */}
        <div className="hidden lg:grid grid-cols-[1fr_1px_1fr] gap-0">

          {/* Left scrolling text */}
          <div className="pr-16">
            {pkg.sections.map((section, index) => (
              <div
                key={index}
                className="story-section min-h-[90vh] flex flex-col justify-center py-20"
              >
                <div
                  className={`transition-all duration-500 ${
                    active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-40 translate-y-2"
                  }`}
                >
                  <p className="text-[10px] tracking-[4px] uppercase text-black/30 mb-6">
                    Chapter {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-light leading-tight tracking-wide text-gray-900 mb-8">
                    {section.title1}
                  </h2>
                  <div className="w-10 h-px bg-gray-300 mb-8" />
                  <div className="text-[15px] leading-[1.9] text-gray-500 font-light space-y-4">
                    {section.description1.split("\n").map((line, i) =>
                      line.trim() ? <p key={i}>{line}</p> : null
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="bg-gray-100" />

          {/* Right sticky image */}
          <div className="pl-16">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                {pkg.sections.map((section, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      active === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={section.image1}
                      alt={section.title1}
                      fill
                      sizes="45vw"
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Image counter */}
                <div className="absolute bottom-6 right-6 text-white/60 text-xs tracking-widest">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(pkg.sections.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: stacked cards */}
        <div className="lg:hidden space-y-20">
          {pkg.sections.map((section, index) => (
            <div key={index}>
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src={section.image1}
                  alt={section.title1}
                  fill
                  sizes="100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <p className="text-[9px] tracking-[4px] uppercase text-black/30 mb-4">
                Chapter {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-4">
                {section.title1}
              </h2>
              <div className="w-8 h-px bg-gray-300 mb-6" />
              <p className="text-sm leading-relaxed text-gray-500">{section.description1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOTELS ── */}
      <section className="bg-[#f5f3ef] py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-16 lg:mb-24">
            <div className="w-12 h-px bg-black/20" />
            <p className="text-[10px] tracking-[4px] uppercase text-black/40">Where You Stay</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 mb-16 lg:mb-24">
            Handpicked<br />Hotels
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pkg.hotels.map((hotel, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-white text-[10px] tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <p className="text-xs tracking-[3px] uppercase text-black/30 mb-2">Stay</p>
                <h3 className="text-xl font-light tracking-wide text-gray-900 mb-3">{hotel.name}</h3>
                <div className="w-6 h-px bg-gray-300 mb-4" />
                <p className="text-sm leading-relaxed text-gray-500 font-light">{hotel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMILAR JOURNEYS ── */}
      {similarPackages.length > 0 && (
        <section className="py-24 lg:py-32 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-8 h-px bg-black/20" />
                  <p className="text-[10px] tracking-[4px] uppercase text-black/40">You May Also Like</p>
                </div>
                <h2 className="text-4xl lg:text-5xl font-light tracking-wide text-gray-900 leading-tight">
                  Similar<br />Journeys
                </h2>
              </div>
              <p className="text-sm text-gray-400 italic lg:mb-2">More in {pkg.heroMeta.country}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPackages.map((trip) => (
                <Link
                  key={trip.packageSlug}
                  href={`/experience-types/destination/${trip.slug}/packages/${trip.packageSlug}`}
                  className="group relative overflow-hidden aspect-[3/4] block"
                >
                  <Image
                    src={trip.heroImage}
                    alt={trip.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-5 right-5">
                    <span className="text-[9px] tracking-[2px] uppercase text-white/70 border border-white/20 px-3 py-1 backdrop-blur-sm">
                      {trip.heroMeta?.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/40 text-[9px] tracking-[3px] uppercase mb-2">
                      {trip.heroMeta?.country}
                    </p>
                    <p className="text-white text-sm font-light tracking-wide leading-snug line-clamp-2 mb-4">
                      {trip.title}
                    </p>
                    <span className="inline-block text-[10px] tracking-[2px] uppercase text-white/60 border-b border-white/20 pb-px transition-all duration-300 group-hover:text-white group-hover:border-white/60">
                      View Journey →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/packages/PACKAGESCTA.webp"
          alt="Begin your journey"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6 z-10">
          <p className="text-[10px] tracking-[5px] uppercase text-white/50 mb-6">The next step</p>
          <h2 className="text-4xl lg:text-6xl font-light tracking-wide mb-10">Ready to Begin?</h2>
          <Link
            href="/enquiry"
            className="inline-block border border-white/40 px-10 py-4 text-[11px] tracking-[3px] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}