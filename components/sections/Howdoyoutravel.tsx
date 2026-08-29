"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------- Types ---------- */
interface TravelItem {
  title: string;
  imageUrl: string;
  slug?: string; // 👈 routing key
  pos?: string;
}

/* ---------- Data ---------- */
const BY_TRAVELLER: TravelItem[] = [
  {
    title: "FAMILY ADVENTURES",
    imageUrl: "/images/Family.webp",
    slug: "family-holidays",
  },
  {
    title: "ROMANTIC ESCAPES",
    imageUrl: "/images/COUPLE.webp",
    slug: "romantic-holidays",
    pos: "object-[50%_70%]",
  },
  {
    title: "GROUP TRAVEL",
    imageUrl: "/images/GroupTour.webp",
    slug: "group-holidays",
    pos: "object-[50%_60%]",
  },
  {
    title: "HONEYMOON DREAMS",
    imageUrl: "/images/HONEYMOON.webp",
    slug: "honeymoon-holidays",
    pos: "object-[10%_90%]",
  },
  {
    title: "SELF TRAVEL",
    imageUrl: "/images/SOLO.webp",
    slug: "solo-holidays",
  },
];

const BY_MONTH: TravelItem[] = [
  { title: "JANUARY", imageUrl: "/images/month/January.webp", slug: "january" },
  {
    title: "FEBRUARY",
    imageUrl: "/images/month/February.webp",
    slug: "february",
  },
  { title: "MARCH", imageUrl: "/images/month/March.webp", slug: "march" },
  { title: "APRIL", imageUrl: "/images/month/April.webp", slug: "april" },
  { title: "MAY", imageUrl: "/images/month/May.webp", slug: "may" },
  { title: "JUNE", imageUrl: "/images/month/June.webp", slug: "june" },
  { title: "JULY", imageUrl: "/images/month/July.webp", slug: "july" },
  { title: "AUGUST", imageUrl: "/images/month/August.webp", slug: "august" },
  {
    title: "SEPTEMBER",
    imageUrl: "/images/month/Sept.webp",
    slug: "september",
  },
  { title: "OCTOBER", imageUrl: "/images/month/October.webp", slug: "october" },
  {
    title: "NOVEMBER",
    imageUrl: "/images/month/November.webp",
    slug: "november",
  },
  {
    title: "DECEMBER",
    imageUrl: "/images/month/December.webp",
    slug: "december",
  },
];

const BY_DESTINATION: TravelItem[] = [
  {
    title: "SWITZERLAND",
    imageUrl: "/images/dest/Swiz DP.webp",
    slug: "switzerland",
  },
  { title: "ITALY", imageUrl: "/images/dest/italy dp.webp", slug: "italy" },
  {
    title: "MALDIVES",
    imageUrl: "/images/dest/Maldives DP.webp",
    slug: "maldives",
  },
  { title: "JAPAN", imageUrl: "/images/dest/Japan DP.webp", slug: "japan" },
  { title: "GREECE", imageUrl: "/images/dest/Greece DP.webp", slug: "greece" },
  { title: "UNITED KINGDOM", imageUrl: "/images/dest/UK DP.webp", slug: "uk" },
  {
    title: "MOROCCO",
    imageUrl: "/images/dest/Morocco DP.webp",
    slug: "morocco",
  },
  {
    title: "TANZANIA",
    imageUrl: "/images/dest/Tanzania DP.webp",
    slug: "tanzania",
  },
  {
    title: "ICELAND",
    imageUrl: "/images/dest/Iceland DP.webp",
    slug: "iceland",
  },
  {
    title: "NEW ZEALAND",
    imageUrl: "/images/dest/Newz DP.webp",
    slug: "new-zealand",
  },
];

/* ---------- Component ---------- */
export default function HowDoYouTravel() {
  const [activeTab, setActiveTab] = useState<
    "traveller" | "destination" | "month"
  >("traveller");

  const data =
    activeTab === "traveller"
      ? BY_TRAVELLER
      : activeTab === "destination"
        ? BY_DESTINATION
        : BY_MONTH;

  const isMonthTab = activeTab === "month";

  const Wrapper = ({
    item,
    children,
    index,
    className,
  }: {
    item: TravelItem;
    children: React.ReactNode;
    index: number;
    className: string;
  }) => {
    if (!item.slug)
      return (
        <div key={index} className={className}>
          {children}
        </div>
      );

    // ← Decide which folder to use
    let basePath = "";
    if (activeTab === "traveller") basePath = "traveller";
    if (activeTab === "destination") basePath = "destination";
    if (activeTab === "month") basePath = "month";

    return (
      <Link
        key={index}
        href={`/experience-types/${basePath}/${item.slug}`} // ← dynamic path
        className={`${className} block cursor-pointer`}
      >
        {children}
      </Link>
    );
  };

  return (
    <section
      id="how-do-you-travel"
      className="bg-gray-50 pt-16 pb-5 lg:pb-0 px-4 sm:px-6 scroll-mt-[90px]"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-medium tracking-wider">
          DESIGNED AROUND YOU!
        </h2>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-8 text-lg tracking-widest flex-wrap">
          {[
            { id: "traveller", label: "TRAVEL STYLE" },
            { id: "destination", label: "TOP PICKS" },
            { id: "month", label: "BY SEASON" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative pb-2 ${
                activeTab === tab.id ? "text-black-600" : "text-black/70"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black/60" />
              )}
            </button>
          ))}
        </div>

        {/* GRID */}
        {isMonthTab ? (
          <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4">
            {data.map((item, index) => (
              <Wrapper
                key={index}
                item={item}
                index={index}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 30vw, 15vw"
                  loading="lazy"
                  className="object-cover "
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="lg:text-lg sm:text-sm font-bold tracking-widest text-white">
                    {item.title}
                  </p>
                </div>
              </Wrapper>
            ))}
          </div>
        ) : (
          <div className="mt-16">
            {/* Mobile */}
            <div className="md:hidden grid grid-cols-1 gap-10">
              {data.map((item, index) => (
                <Wrapper
                  key={index}
                  item={item}
                  index={index}
                  className="group relative w-full h-40 overflow-hidden"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 92vw"
                    loading="lazy"
                    className={`object-cover ${item.pos ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs font-semibold tracking-widest text-white text-center">
                      {item.title}
                    </p>
                  </div>
                </Wrapper>
              ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-5 gap-6">
              {data.map((item, index) => (
                <Wrapper
                  key={index}
                  item={item}
                  index={index}
                  className="group relative aspect-[5/9] overflow-hidden"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 20vw"
                    loading="lazy"
                    className="object-cover  
                  object-left"
                  />

                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/40 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="lg:text-lg sm:text-sm font-bold tracking-widest text-white text-center">
                      {item.title}
                    </span>
                  </div>
                </Wrapper>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
