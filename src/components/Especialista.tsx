"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "./Navbar";

const Especialista = () => {
  return (
    <section id="especialista" className="relative bg-white text-[var(--primary-blue)] py-24 px-6 lg:px-16 overflow-hidden">
      {/* Max Intensity Background Liquid Mesh */}
      <div 
        className="absolute inset-0 opacity-80 pointer-events-none -z-10 animate-liquid-mesh"
        style={{ 
          background: 'radial-gradient(circle at 10% 20%, var(--accent-gold)/30 0%, transparent 50%), radial-gradient(circle at 90% 80%, var(--primary-blue)/15 0%, transparent 60%), radial-gradient(circle at 50% 50%, #ffffff 0%, #F4F7FA 100%)',
          backgroundSize: '300% 300%',
        }}
      />
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none -z-10 animate-liquid-mesh [animation-direction:reverse] [animation-duration:15s]"
        style={{ 
          background: 'radial-gradient(circle at 80% 20%, var(--accent-gold)/20 0%, transparent 40%), radial-gradient(circle at 20% 80%, var(--primary-blue)/10 0%, transparent 40%)',
          backgroundSize: '400% 400%',
        }}
      />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Text/Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start animate-fade-in-up">
          <span className="uppercase text-[var(--accent-gold)] text-sm tracking-[0.3em] mb-6 font-bold font-sans">
            O Especialista
          </span>
          
          <h2 className="text-5xl font-serif font-black leading-tight mb-8 tracking-tight">
            Expertise e <span className="italic font-bold text-[var(--accent-gold)]">Humanização</span>
          </h2>

          <div className="mb-8">
            <p className="text-2xl font-serif font-black text-[var(--primary-blue)] mb-1">Dr. Paulo Massahud</p>
            <span className="text-sm font-sans tracking-[0.2em] text-[var(--neutral-gray)] font-bold uppercase block">
              CRM 12.345 / RQE 6.789
            </span>
          </div>

          <div className="space-y-6 text-lg text-slate-700 leading-relaxed max-w-xl font-sans">
            <p>
              Com mais de duas décadas de atuação, o Dr. Paulo Massahud tornou-se referência em diagnósticos por imagem em Minas Gerais. Sua abordagem une o rigor técnico da medicina diagnóstica ao acolhimento necessário para transformar cada exame em uma experiência de segurança e conexão.
            </p>
            <p className="font-medium text-[var(--primary-blue)]">
              Sua missão é dar voz às imagens, trazendo tranquilidade para o coração de quem espera por respostas fundamentais.
            </p>
          </div>

          <div className="mt-12">
            <WhatsAppButton 
              id="cta-especialista-whatsapp"
              variant="primary" 
              className="shadow-2xl"
            >
              Falar com a equipe do Dr. Paulo
            </WhatsAppButton>
          </div>
        </div>

        {/* Right Side: Doctor's Image */}
        <div className="w-full lg:w-[45%] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative group overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[var(--bg-soft-blue)] border border-[var(--neutral-silver)]/50 aspect-[4/5]">
            <img
              src="/images/IMG_7977.webp" 
              alt="Dr. Paulo Massahud"
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant overlay / frame */}
            {/* Enhanced Contrast & Liquid Effect Overlay */}
            <div className="absolute inset-x-8 bottom-8 p-8 rounded-[2rem] overflow-hidden border border-white/30 shadow-2xl group/card">
              {/* Liquid Backdrop Animation */}
              <motion.div 
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 120, 0],
                  borderRadius: ["30%", "50%", "30%"]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-[var(--accent-gold)]/50 via-white/80 to-[var(--primary-blue)]/20 blur-3xl -z-10"
              />
              
              {/* Main Backdrop Blur & Glass Effect */}
              <div className="absolute inset-0 bg-white/75 backdrop-blur-[100px] -z-10" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="drop-shadow-sm"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--primary-blue)] font-bold mb-3">
                  Referência em Diagnósticos
                </p>
                <div className="h-[2px] w-12 bg-[var(--accent-gold)] mb-4"></div>
                <p className="text-[var(--primary-blue)] font-serif italic text-base lg:text-lg leading-relaxed font-medium">
                  "Cuidando da vida em seus primeiros momentos."
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Especialista;
