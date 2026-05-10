export default function Features() {
  const features = [
    { title: "Soluciones Limpias", desc: "Tecnologías eólicas y solares avanzadas adaptadas a escala industrial y residencial.", color: "text-petroleum" },
    { title: "Red Inteligente", desc: "Sistemas inteligentes de distribución de energía que maximizan la eficiencia y reducen el desperdicio.", color: "text-emerald" },
    { title: "Impacto Global", desc: "Alianzas estratégicas en todo el mundo para acelerar la transición hacia el cero neto.", color: "text-ukko-blue" }
  ];

  return (
    <section className="features-section py-32 px-10 bg-white-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Impulsando la Sostenibilidad</h2>
          <div className="h-1.5 w-24 bg-teal mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div key={i} className="feature-card bg-white p-12 rounded-[40px] shadow-sm border border-carbon/5 hover:shadow-xl transition-all duration-500 group">
              <div className={`text-4xl mb-6 font-black ${item.color}`}>0{i+1}</div>
              <h3 className="text-2xl font-bold mb-4 text-carbon">{item.title}</h3>
              <p className="text-carbon/60 leading-relaxed font-medium">{item.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                Saber Más <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
