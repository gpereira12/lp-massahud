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
          <div className="lg:col-span-2 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            
            {/* Google Evaluation Badge - Moved from Hero/Diferenciais */}
            <a 
              href="https://www.google.com/maps/place/Massahud+Diagn%C3%B3sticos+Ltda/@-19.9283077,-43.9205385,17z/data=!4m8!3m7!1s0xa6996255b40aad:0xdc5d6c977a1cd3e2!8m2!3d-19.9283077!4d-43.9205385!9m1!1b1!16s%2Fg%2F11st_h59yx?hl=pt-BR&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all border border-white/10 group order-2 lg:order-1 w-fit mx-auto lg:mx-0"
            >
              <GoogleIcon className="w-6 h-6" />
              <div className="flex flex-col">
                <div className="flex gap-0.5 text-[#FBBC05] mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Avaliação 5.0 no Google
                </span>
              </div>
            </a>

            <WhatsAppButton variant="gold" className="w-full lg:w-auto text-lg px-12 py-5 shadow-2xl shadow-[var(--accent-gold)]/20 order-1 lg:order-2">
              Agendar exame agora
            </WhatsAppButton>
          </div>

        </div>
      </div>
    </section>
  );
};

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

export default Clinica;
