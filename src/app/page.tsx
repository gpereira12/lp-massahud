import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Especialista from "@/components/Especialista";
import Exames from "@/components/Exames";
import Transition from "@/components/Transition";
import Diferenciais from "@/components/Diferenciais";
import Clinica from "@/components/Clinica";
import FAQ from "@/components/FAQ";
import Mapa from "@/components/Mapa";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-[var(--accent-gold)] selection:text-[var(--primary-blue)]">
      <Navbar />
      <Hero />
      <Especialista />
      <Exames />
      <Transition />
      <Diferenciais />
      <Clinica />
      <FAQ />
      <Mapa />
      <Footer />
    </main>
  );
}
