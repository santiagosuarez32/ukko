import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-24 px-10 bg-carbon text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xs">
            <div className="relative h-12 w-40 mb-6">
              <Image
                src="/logo.png"
                alt="Logo de Ukko Energy"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/50 leading-relaxed font-medium">
              Liderando la transición global hacia las energías renovables con tecnología de vanguardia y prácticas sostenibles.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-base">
            <div className="flex flex-col gap-4">
               <div className="font-bold text-emerald mb-2 uppercase text-xs tracking-widest">Navegación</div>
               <a href="#about-us" className="text-white/60 hover:text-white transition-colors font-medium">Nosotros</a>
               <a href="#unidades" className="text-white/60 hover:text-white transition-colors font-medium">Unidades de Negocio</a>
               <a href="#metodologia" className="text-white/60 hover:text-white transition-colors font-medium">Metodología</a>
               <a href="#clientes" className="text-white/60 hover:text-white transition-colors font-medium">Clientes</a>
            </div>
            <div className="flex flex-col gap-4">
               <div className="font-bold text-emerald mb-2 uppercase text-xs tracking-widest">Contacto</div>
               <a href="mailto:contacto@ukkoenergy.com" className="text-white/60 hover:text-white transition-colors font-medium">contacto@ukkoenergy.com</a>
               <p className="text-white/40 text-sm leading-relaxed mt-2">
                 Buenos Aires, Argentina<br />
                 UKKO ENERGY SOLUTIONS
               </p>
            </div>
            <div className="flex flex-col gap-4">
               <div className="font-bold text-emerald mb-2 uppercase text-xs tracking-widest">Redes Sociales</div>
               <a href="#" className="text-white/60 hover:text-white transition-colors font-medium flex items-center gap-2">
                 LinkedIn
               </a>
               <a href="#" className="text-white/60 hover:text-white transition-colors font-medium flex items-center gap-2">
                 YouTube
               </a>
               <a href="#" className="text-white/60 hover:text-white transition-colors font-medium flex items-center gap-2">
                 Instagram
               </a>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">© 2026 UKKO ENERGY SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</div>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
             <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
