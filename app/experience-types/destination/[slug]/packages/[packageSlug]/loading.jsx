export default function Loading() {
  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center gap-8">
      {/* Elegant animated bar loader */}
      <div className="flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-px bg-white/30"
            style={{
              height: "40px",
              animation: `barPulse 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
      <p
        style={{ letterSpacing: "6px", fontSize: "10px" }}
        className="text-white/30 uppercase"
      >
        Curating your journey
      </p>
      <style jsx>{`
        @keyframes barPulse {
          0%, 100% { transform: scaleY(0.3); opacity: 0.2; }
          50% { transform: scaleY(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}