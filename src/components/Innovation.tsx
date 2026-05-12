import { LiquidReveal } from "@/components/ui/LiquidReveal";

export default function Innovation() {
  return (
    <section className="innovation-section py-32 px-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="w-full lg:w-1/2 innovation-content">
          <span className="text-base md:text-lg font-bold tracking-tight text-ukko-blue mb-8 inline-block border border-ukko-blue/20 px-6 py-2 rounded-full bg-ukko-blue/5 backdrop-blur-sm">
            Nuestro Compromiso
          </span>
          <h2 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight tracking-tighter text-ukko-blue">INNOVACIÓN <br/>PARA EL PLANETA</h2>
          <p className="text-carbon/70 text-xl mb-10 leading-relaxed font-medium">
            En Ukko Energy, creemos que la tecnología es la clave para desbloquear un futuro neutro en carbono. Nuestros equipos de investigación y desarrollo superan constantemente los límites del almacenamiento de energía y la eficiencia renovable.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-12">
             <div>
                <div className="text-4xl font-black text-petroleum mb-2">95%</div>
                <div className="text-xs font-bold tracking-[0.2em] text-teal">Tasa de Eficiencia</div>
             </div>
             <div>
                <div className="text-4xl font-black text-petroleum mb-2">24/7</div>
                <div className="text-xs font-bold tracking-[0.2em] text-teal">Monitoreo Inteligente</div>
             </div>
          </div>
          <button className="text-sm font-bold tracking-widest bg-carbon text-white px-8 py-3.5 rounded-full hover:bg-ukko-blue transition-colors shadow-lg">
            Nuestra Tecnología
          </button>
        </div>
        <div className="w-full lg:w-1/2 relative h-[600px]">
           <div className="innovation-image relative w-full h-full rounded-[60px] overflow-hidden shadow-2xl">
              <LiquidReveal
                src="/ukko_innovation.webp"
                alt="Centro de Innovación Energética"
                fill
                containerClassName="w-full h-full"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ukko-blue/10 mix-blend-overlay"></div>
           </div>
        </div>
      </div>
    </section>
  );
}
