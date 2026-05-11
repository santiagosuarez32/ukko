import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 px-10 bg-carbon text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xs">
            <div className="relative h-20 w-56 mb-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-base w-full">
            <div className="flex flex-col gap-4">
               <div className="font-bold text-emerald mb-2 text-sm">Navegación</div>
               <Link href="/sobre-nosotros" className="text-white/60 hover:text-white transition-colors font-medium">Nosotros</Link>
               <Link href="/#unidades" className="text-white/60 hover:text-white transition-colors font-medium">Unidades de Negocio</Link>
               <Link href="/#metodologia" className="text-white/60 hover:text-white transition-colors font-medium">Metodología</Link>
               <Link href="/#clientes" className="text-white/60 hover:text-white transition-colors font-medium">Clientes</Link>
            </div>
            <div className="flex flex-col gap-4">
               <div className="font-bold text-emerald mb-2 text-sm">Contacto</div>
               <a href="mailto:contacto@ukkoenergy.com" className="text-white/60 hover:text-white transition-colors font-medium">contacto@ukkoenergy.com</a>
               <p className="text-white/40 text-sm leading-relaxed mt-2">
                 Buenos Aires, Argentina<br />
                 UKKO ENERGY SOLUTIONS
               </p>
            </div>
            <div className="flex flex-col gap-4">
               <div className="font-bold text-emerald mb-2 text-sm">Redes Sociales</div>
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
          <div className="text-white/40 text-xs font-medium">© 2026 Ukko Energy Solutions. Todos los derechos reservados.</div>
          <div className="flex gap-8 text-xs font-medium text-white/40">
             <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
