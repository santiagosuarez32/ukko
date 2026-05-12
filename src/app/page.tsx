import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Ukko Energy | Eficiencia Energética y Gestión de Emisiones",
  description: "Descubre cómo Ukko Energy impulsa la transición energética global con soluciones inteligentes en descarbonización, energía renovable y gestión de emisiones.",
  alternates: {
    canonical: "https://ukkoenergy.com",
  }
};

export default function Home() {
  return <HomeClient />;
}
