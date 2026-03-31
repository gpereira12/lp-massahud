"use client";

import React from "react";
import { Quote } from "lucide-react";
import { WhatsAppButton } from "./Navbar";

const TestimonialCard = ({ quote, author }: { quote: string; author: string }) => (
  <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-700 animate-fade-in-up group">
    <Quote className="w-8 h-8 text-[var(--accent-gold)] mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
    <p className="text-lg text-white/90 leading-relaxed mb-6 italic font-serif">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[var(--accent-gold)] flex items-center justify-center text-[var(--primary-blue)] font-bold text-sm shadow-lg">
        {author.charAt(0)}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-white tracking-widest uppercase text-[10px]">{author}</span>
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Paciente</span>
      </div>
    </div>
  </div>
);

const Clinica = () => {
  const testimonials = [
    {
      quote: "O doutor é um profissional fora da curva, daqueles que são cada vez mais raros hoje em dia. Durante o procedimento, confesso que fiquei muito tensa... Quando tudo terminou, senti um grande alívio. Indico a clínica com toda certeza.",
      author: "Kamila Ferrari"
    },
    {
      quote: "Médico sensacional!!! Super atencioso e cuidadoso o tempo todo, atendimento excelente e com um valor ótimo. Indico de olhos fechados. Muito obrigada Dr. Paulo!",
      author: "Ohana Izabela"
    },
    {
      quote: "Dr. Paulo sem dúvidas tem o dom da profissão. Todos os ultrassons que realizei com ele tornaram minha gestação algo mais leve. Ele é humano, agradável, um profissional excelente.",
      author: "Loren Costa"
    },
    {
      quote: "Atendimento maravilhoso! Médico extremamente atencioso, explica tudo com muito carinho e paciência. Saí de lá super tranquila e confiante. Recomendo de coração!!",
      author: "Thay vital"
    },
    {
      quote: "Experiência incrível! O Dr. Paulo é extremamente técnico e ao mesmo tempo humano. Tirou todas as minhas dúvidas com clareza e me deixou muito segura. Recomendo para todas as futuras mamães.",
      author: "Mariana Godoy"
    }
  ];

  return (
    <section id="clinica" className="bg-[var(--primary-blue)] text-white py-24 px-6 lg:px-16 overflow-hidden relative">
      {/* Decorative radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1 - Row 1 & 2: Main Image spans two rows */}
          <div className="lg:row-span-2 animate-fade-in-up">
            <div className="relative group h-full">
              <div className="absolute -inset-4 bg-[var(--accent-gold)]/10 rounded-[3rem] blur-2xl group-hover:bg-[var(--accent-gold)]/20 transition-all duration-1000"></div>
              <div className="relative h-full min-h-[400px] max-h-[630px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/IMG_8935.webp" 
                  alt="Ambiente acolhedor da Clínica Massahud"
                  className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="inline-block px-4 py-1 rounded-full bg-[var(--accent-gold)] text-[var(--primary-blue)] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    Infraestrutura Moderna
                  </span>
                  <h3 className="text-3xl font-serif leading-tight">Ambiente pensado no acolhimento</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Row 1: Intro Text */}
          <div className="flex flex-col justify-center animate-fade-in-up p-4" style={{ animationDelay: '0.1s' }}>
            <span className="uppercase text-[var(--accent-gold)] text-sm tracking-[0.3em] mb-6 font-bold font-sans">
              Nossa Clínica
            </span>
            <h2 className="text-4xl font-serif font-black mb-6 tracking-tight leading-tight">
              Cuidado especializado <br />
              em cada detalhe.
            </h2>
            <p className="text-lg text-white/70 font-sans leading-relaxed">
              Infraestrutura moderna e equipe especializada para o seu cuidado. Oferecemos um espaço sereno e seguro para seus diagnósticos por imagem.
            </p>
          </div>

          {/* Column 2 - Row 2: First Testimonial (Aligns with bottom of image) */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <TestimonialCard {...testimonials[1]} />
          </div>

          {/* Row 3: Pairs of Testimonials */}
          <div className="animate-fade-in-up flex h-full" style={{ animationDelay: '0.3s' }}>
            <TestimonialCard {...testimonials[0]} />
          </div>
          <div className="animate-fade-in-up flex h-full" style={{ animationDelay: '0.35s' }}>
            <TestimonialCard {...testimonials[2]} />
          </div>

          {/* Row 4: Final Pair of Testimonials */}
          <div className="animate-fade-in-up flex h-full" style={{ animationDelay: '0.4s' }}>
            <TestimonialCard {...testimonials[4]} />
          </div>
          <div className="animate-fade-in-up flex h-full" style={{ animationDelay: '0.45s' }}>
            <TestimonialCard {...testimonials[3]} />
          </div>

          {/* CTA Footer aligned to the right side of the grid */}
          <div className="lg:col-span-2 flex justify-center mt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <WhatsAppButton variant="primary" className="w-full lg:w-auto text-lg px-12 py-5 shadow-2xl">
              Agendar minha visita
            </WhatsAppButton>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clinica;
