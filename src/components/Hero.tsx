import Image from "next/image";

interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 overflow-hidden">
      {/* Background with smoother non-linear easing mask */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.98) 65%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.6) 84%, rgba(0,0,0,0.3) 92%, rgba(0,0,0,0.1) 97%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.98) 65%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.6) 84%, rgba(0,0,0,0.3) 92%, rgba(0,0,0,0.1) 97%, transparent 100%)' 
        }}
      >
        <Image
          src="/hero-3.png"
          alt="Fondo de Energía Renovable"
          fill
          unoptimized
          className="object-cover object-[center_40%] opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center mb-10 -translate-y-4">
        {/* Subheadline */}
        <span className="hero-subheadline text-sm font-normal tracking-[-0.02em] text-white mb-4 inline-block border border-white px-3 py-1.5 rounded-full bg-transparent translate-x-0 translate-y-8 z-20 relative">
          Liderando la transición energética
        </span>

        {/* Headline */}
        <h1 className="hero-title text-5xl md:text-8xl font-semibold mb-8 leading-[1.1] tracking-[-0.02em] drop-shadow-2xl overflow-visible py-4">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap mr-4">
              {word.split("").map((char, charIdx) => (
                <span key={charIdx} className="inline-block reveal-char title-gradient pb-6 mb-[-1.5rem]">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Description Text */}
        <p className="hero-text text-base md:text-[18px] text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-[1.6] tracking-[-0.02em] drop-shadow-md">
          Suministramos soluciones de energía sostenible de clase mundial para impulsar un mañana más limpio, brillante y eficiente para la industria global.
        </p>

        {/* 2 CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-6 mb-6">
          <button className="ukko-button w-56 py-3.5 rounded-full font-medium tracking-normal text-[18px] leading-[1.2] shadow-xl">
            Agendar Reunión
          </button>
          <button className="w-56 py-3.5 rounded-full font-medium tracking-normal text-[18px] leading-[1.2] border-2 border-white/50 text-white hover:bg-white hover:text-ukko-blue transition-all">
            Conocer Servicios
          </button>
        </div>

        {/* Stats / Counters */}
        <div className="hero-stats grid grid-cols-1 md:grid-cols-3 gap-12 w-full border-t border-white/20 pt-6">
          <div className="stat-item">
            <div className="text-4xl font-black gradient-text mb-1 tracking-[-0.02em]"><span id="counter-years">0</span>+</div>
            <div className="text-[18px] font-medium tracking-normal text-white leading-[1.2]">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-black gradient-text mb-1 tracking-[-0.02em]"><span id="counter-business">0</span></div>
            <div className="text-[18px] font-medium tracking-normal text-white leading-[1.2]">Unidades de Negocio</div>
          </div>
          <div className="stat-item">
            <div className="text-4xl font-black gradient-text mb-1 tracking-[-0.02em]">ISO + GHG</div>
            <div className="text-[18px] font-medium tracking-normal text-white leading-[1.2]">Normas Internacionales</div>
          </div>
        </div>
      </div>
    </section>
  );
}
