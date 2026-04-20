"use client";

import React from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Mapa = () => {
  return (
    <section id="mapa" className="bg-white py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Map iframe */}
        <div className="w-full lg:w-1/2 animate-fade-in-up">
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-[var(--neutral-silver)]/20 relative group">
            <iframe 
              title="Localização da clínica Massahud no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.054322589417!2d-43.92211512398505!3d-19.928307681454523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6996255b40aad%3A0xdc5d6c977a1cd3e2!2sMassahud%20Diagn%C3%B3sticos%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1711910000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white/50 rounded-3xl"></div>
          </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl lg:text-5xl font-normal text-[var(--primary-blue)] mb-10 tracking-tight">
            Fácil acesso para o seu conforto
          </h2>
          
          <div className="space-y-8 w-full">
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-soft-blue)] flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--neutral-gray)] font-bold mb-1">Endereço</p>
                <p className="text-xl text-slate-700 leading-tight">Av. do Contorno, 3861 – Sala 202, Santa Efigênia – Belo Horizonte/MG</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-soft-blue)] flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--neutral-gray)] font-bold mb-1">Contato</p>
                <p className="text-xl text-slate-700 leading-tight">(31) 3643-5473</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-soft-blue)] flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--neutral-gray)] font-bold mb-1">Horário de Agendamento</p>
                <p className="text-xl text-slate-700 leading-tight">Segunda a Sexta 08:00h às 18:00h</p>
              </div>
            </div>
          </div>

          <div className="mt-12 w-full">
            <a 
              href="https://www.google.com/maps/place/Massahud+Diagn%C3%B3sticos+Ltda/@-19.9283077,-43.9205385,17z/data=!4m8!3m7!1s0xa6996255b40aad:0xdc5d6c977a1cd3e2!8m2!3d-19.9283077!4d-43.9205385!9m1!1b1!16s%2Fg%2F11st_h59yx?hl=pt-BR&entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[var(--primary-blue)] font-bold uppercase tracking-widest text-xs border-b-2 border-[var(--primary-blue)] pb-2 hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300"
            >
              Abrir no Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;
