"use client";

export default function ReadyToStart() {
  return (
    <section 
      className="relative w-full py-12 lg:py-22 md:py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ready-bg.webp')" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
        <h1 className="text-5xl lg:text-6xl sm:text-5xl md:text-5xl font-medium tracking-wider font-alternate sm:mb-4">
          SO, READY TO START?
        </h1>

        <button
  className="
    block mx-auto mt-6
    relative overflow-hidden
    rounded-xs border border-black/70 bg-black
    px-4 sm:px-4 py-2 sm:py-3
    text-[11px] leading-[12px] font-bold tracking-[1.2px]
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
  <span className="relative z-10">GET IN TOUCH</span>
</button>

      </div>
    </section>
  );
}