import { Metadata } from "next";
import SobreNosotrosClient from "./SobreNosotrosClient";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Nuestra Historia y Misión",
  description: "Conoce a Ukko Energy, una compañía ágil enfocada en desarrollar soluciones inteligentes para la eficiencia energética y la resiliencia climática.",
  alternates: {
    canonical: "https://ukkoenergy.com/sobre-nosotros",
  }
};

export default function SobreNosotros() {
  return <SobreNosotrosClient />;
}
