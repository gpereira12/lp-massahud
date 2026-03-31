"use client";

import React from "react";
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/553136435473?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Paulo%20Massahud.";

  return (
    <footer className="bg-[var(--primary-blue)] text-white py-20 px-6 lg:px-16 overflow-hidden relative border-t border-white/10 italic-serif">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-12 animate-fade-in-up">
          <img 
            src="/images/logos/logo-footer.png" 
            alt="Massahud Diagnósticos" 
            className="h-32 w-auto brightness-0 invert"
          />
        </div>

        {/* Navigation Links - Horizontal */}
        <nav className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-xs font-sans font-bold uppercase tracking-widest text-white/70">
            <li><a href="#especialista" className="hover:text-[var(--accent-gold)] transition-colors">O Especialista</a></li>
            <li><a href="#exames" className="hover:text-[var(--accent-gold)] transition-colors">Exames</a></li>
            <li><a href="#clinica" className="hover:text-[var(--accent-gold)] transition-colors">A Clínica</a></li>
            <li><a href="#faq" className="hover:text-[var(--accent-gold)] transition-colors">Dúvidas</a></li>
            <li><a href="#mapa" className="hover:text-[var(--accent-gold)] transition-colors">Localização</a></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a 
            href="https://www.instagram.com/massahuddiagnosticos/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-500"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/massahuddiagnosticos" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-500"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a 
            id="cta-footer-whatsapp"
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--primary-blue)] transition-all duration-500"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 w-full max-w-5xl animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          <div className="flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3">Localização</p>
            <a 
              id="cta-footer-address"
              href="https://www.google.com/maps/place/Massahud+Diagn%C3%B3sticos+Ltda/@-19.9283077,-43.9205385,17z/data=!4m6!3m5!1s0xa6996255b40aad:0xdc5d6c977a1cd3e2!8m2!3d-19.9283077!4d-43.9205385!16s%2Fg%2F11st_h59yx?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 leading-relaxed font-sans font-medium hover:text-[var(--accent-gold)] transition-colors"
            >
              Av. do Contorno, 3861 – Sala 202, <br /> Santa Efigênia – Belo Horizonte/MG
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3">Atendimento</p>
            <p className="text-sm text-white/80 leading-relaxed font-sans font-medium cursor-default">
              Segunda a Sexta: 08h às 18h <br /> Sábado: 08h às 13h
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3">Contato Direto</p>
            <p className="text-sm text-white/80 leading-relaxed font-sans font-medium hover:text-[var(--accent-gold)] transition-colors">
              <a id="cta-footer-phone" href="tel:3136435473">(31) 3643-5473</a>
            </p>
          </div>
        </div>

        {/* Disclaimer / Credentials */}
        <div className="max-w-2xl border-t border-white/10 pt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-[var(--neutral-silver)]/60 font-sans text-sm mb-6 leading-relaxed">
            Dr. Paulo Massahud – CRM 12.345 / RQE 6.789 <br />
            As informações contidas neste site têm caráter informativo e não substituem a consulta médica.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] font-sans uppercase tracking-[0.2em] text-white/30 font-bold">
            <p>© {currentYear} Massahud Diagnósticos. <br /> Todos os direitos reservados.</p>
            <span className="hidden md:block opacity-30">|</span>
            <p>
              Desenvolvido por{" "}
              <a 
                href="https://dev-gabriel-pereira-gp.web.app/criacao-de-landing-pages" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 hover:text-[var(--accent-gold)] transition-colors"
              >
                Gabriel Pereira
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
