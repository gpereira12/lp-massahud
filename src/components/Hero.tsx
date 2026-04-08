"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Baby, Activity } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

// GoogleRatingBadge removido para integração inline com o CTA



const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  return (
    <section 
      ref={targetRef}
      className="min-h-screen flex items-center bg-white relative overflow-hidden px-6 lg:px-16 pt-32 pb-20"
    >


      {/* Background Layer: Dr. Paulo & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/images/IMG_7973.webp" 
            alt="Dr. Paulo Massahud"
            className="w-full h-full object-cover object-[75%] lg:object-[95%_25%]"
          />
        </motion.div>

        {/* Dynamic Gradient Overlay for Text Legibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
          aria-hidden="true"
        />


      </div>

      <div className="max-w-7xl mx-auto w-full relative z-40 flex flex-col items-center lg:items-start justify-center h-full">
        {/* Layer 3 & 4: Text Narrative & Actions */}
        <div className="w-full lg:w-[65%] flex flex-col items-center lg:items-start justify-center h-full gap-y-8 pt-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl lg:text-6xl font-serif font-bold text-[var(--primary-blue)] leading-[1.1] lg:leading-[0.9] mb-6 tracking-tight text-center lg:text-left"
            >
              A segurança que você e sua <br className="hidden lg:block" /> família precisam para cuidar da sua <br className="hidden lg:block" />
              <span className="text-[var(--accent-gold)] italic font-light">saúde e da sua gestação.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base lg:text-lg text-[var(--neutral-gray)] font-sans leading-relaxed max-w-xl text-center lg:text-left"
            >
              Referência em Saúde do seu Bebê e diagnósticos de alta complexidade. O Dr. Paulo Massahud aplica o mais alto rigor técnico e tecnologia de última geração para assegurar laudos precisos e um acompanhamento minucioso de cada etapa gestacional, priorizando a segurança clínica indispensável para você e seu bebê.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-100 px-4 py-2 rounded-full mb-2 w-fit mx-auto lg:mx-0"
          >
            <div className="flex gap-0.5 text-[#FBBC05]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5" />
              ))}
            </div>
            <span className="text-[10px] font-bold text-[var(--primary-blue)] uppercase tracking-wider">
              Clínica Nota 5.0 no Google
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6"
          >
            <a
              id="cta-hero-gestacional"
              href="#exames"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.hash = 'exames';
                  window.dispatchEvent(new CustomEvent('setExamTab', { detail: 'baby' }));
                }
              }}
              className="bg-[var(--primary-blue)] text-white px-8 lg:px-10 py-5 rounded-2xl font-sans font-extrabold flex items-center gap-3 shadow-xl hover:shadow-2xl hover:bg-[#1a355d] hover:scale-105 active:scale-95 transition-all duration-500 group"
            >
              <Baby className="w-5 h-5 transition-transform group-hover:rotate-12 text-[var(--accent-gold)]" />
              <span>Exames Gestacionais</span>
            </a>

            <a
              id="cta-hero-geral"
              href="#exames"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.hash = 'exames';
                  window.dispatchEvent(new CustomEvent('setExamTab', { detail: 'general' }));
                }
              }}
              className="bg-white text-[var(--primary-blue)] border-2 border-[var(--primary-blue)]/10 px-8 lg:px-10 py-5 rounded-2xl font-sans font-extrabold flex items-center gap-3 shadow-md hover:shadow-lg hover:border-[var(--primary-blue)]/30 hover:scale-105 active:scale-95 transition-all duration-500 group"
            >
              <Activity className="w-5 h-5 transition-transform group-hover:scale-110 text-[var(--accent-gold)]" />
              <span>Saúde Geral e Preventiva</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-50" />

      {/* Floating Service Badge - Flutuando à direita embaixo */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-8 right-6 z-[100] hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[var(--primary-blue)]/20 px-5 py-3 rounded-2xl shadow-2xl"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)] animate-pulse" />
        <span className="text-[10px] font-sans font-black text-[var(--primary-blue)] uppercase tracking-widest whitespace-nowrap">
          Atendimento Particular • Não atendemos convênios
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
