"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { WhatsAppButton } from "./Navbar";

const Especialista = () => {
  return (
    <section id="especialista" className="relative bg-white text-[var(--primary-blue)] py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
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
          <span className="uppercase text-[#A69D24] text-sm tracking-[0.3em] mb-6 font-bold font-sans">
            O Especialista
          </span>
          
          <h2 className="text-5xl font-serif font-black leading-tight mb-8 tracking-tight">
            Expertise e <span className="italic font-bold text-[#A69D24]">Humanização</span>
          </h2>

          <div className="mb-8">
            <p className="text-2xl font-serif font-black text-[var(--primary-blue)] mb-1">Dr. Paulo Massahud</p>
            <span className="text-sm font-sans tracking-[0.2em] text-[var(--neutral-gray)] font-bold uppercase block">
              CRM 30.491 / RQE 56695
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

          <div className="mt-12 w-full">
            <WhatsAppButton 
              id="cta-especialista-whatsapp"
              variant="primary" 
              className="shadow-2xl"
            >
              Falar com a equipe do Dr. Paulo
            </WhatsAppButton>
          </div>

          {/* New Photo Below Text for Mobile/Desktop context */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full lg:hidden block"
          >
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/IMG_9999.webp" 
                  alt="Dr. Paulo Massahud" 
                  className="w-full aspect-[4/3] object-cover"
                />
             </div>
          </motion.div>
        </div>

        {/* Right Side: Doctor's Image */}
        <div className="w-full lg:w-[45%] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative group overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[var(--bg-soft-blue)] border border-[var(--neutral-silver)]/50 aspect-[4/5]">
            <img
              src="/images/IMG_7977.webp" 
              alt="Dr. Paulo Massahud"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant overlay / frame */}
            {/* Enhanced Contrast & Liquid Effect Overlay */}
            <div 
              className="absolute inset-x-6 bottom-6 lg:inset-y-auto lg:bottom-12 lg:right-12 lg:left-auto lg:w-[420px] p-8 lg:p-10 rounded-[2.5rem] overflow-hidden border border-white/40 shadow-[0_20px_60px_rgba(31,62,110,0.15)] group/card bg-white/40 backdrop-blur-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[1.5px] w-8 bg-[var(--accent-gold)]"></div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--primary-blue)] font-bold opacity-80">
                    Referência em Diagnósticos
                  </p>
                </div>
                
                <p className="text-[var(--primary-blue)] font-serif italic text-lg lg:text-xl leading-[1] font-semibold">
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
