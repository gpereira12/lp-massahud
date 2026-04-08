"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const WhatsAppIcon = ({ className }: { className?: string }) => (
// ... (mantenha o resto)

  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const WhatsAppButton = ({ 
  children, 
  className = "", 
  variant = "primary",
  style = {},
  id = "" // Novo campo para rastreio
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: "primary" | "secondary" | "gold";
  style?: any;
  id?: string;
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-sans font-bold transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg group";
  
  const variants = {
    primary: "bg-[var(--primary-blue)] text-white hover:bg-[#1a355d] px-8 py-4 rounded-2xl",
    secondary: "bg-[var(--primary-blue)] text-white hover:bg-[#1a355d] px-8 py-4 rounded-2xl",
    gold: "bg-[var(--accent-gold)] text-[var(--primary-blue)] hover:bg-[#A69D24] px-8 py-4 rounded-2xl shadow-[#A69D24]/20",
  };

  return (
    <motion.a
      href="https://wa.me/553136435473?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame%20com%20o%20Dr.%20Paulo%20Massahud." 
      target="_blank"
      id={id} // Aplicando o ID para o GTM
      rel="noopener noreferrer"
      style={style}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:rotate-12" />
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Interpolation for the main container
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "94%"]);
  const navY = useTransform(scrollY, [0, 100], [0, 16]);
  const navBorderRadius = useTransform(scrollY, [0, 100], [0, 32]);
  const navHeight = useTransform(scrollY, [0, 100], [68, 60]);
  const navBg = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0.98)", "rgba(255, 255, 255, 0.85)"]);
  const navShadow = useTransform(scrollY, [0, 100], ["0 1px 2px 0 rgb(0 0 0 / 0.05)", "0 20px 50px rgba(17,35,62,0.15)"]);
  
  // Interpolation for internal elements
  const logoHeight = useTransform(scrollY, [0, 100], [32, 28]);
  const buttonScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const linkOpacity = useTransform(scrollY, [0, 100], [0.7, 1]);
  const buttonPaddingY = useTransform(scrollY, [0, 100], [12, 10]);
  const buttonPaddingX = useTransform(scrollY, [0, 100], [28, 24]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Especialista", href: "#especialista" },
    { name: "Exames", href: "#exames" },
    { name: "Clínica", href: "#clinica" },
    { name: "Dúvidas", href: "#faq" },
    { name: "Localização", href: "#mapa" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <motion.div 
        style={{
          width: navWidth,
          y: navY,
          borderRadius: navBorderRadius,
          height: navHeight,
          backgroundColor: navBg,
          boxShadow: navShadow,
        }}
        className="relative flex justify-between items-center pointer-events-auto border-b border-white/10 overflow-hidden px-4 sm:px-8 lg:px-12 backdrop-blur-2xl"
      >
        {/* Animated Liquid Background Overlay */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollY, [0, 100], [0, 0.6]),
            background: 'linear-gradient(-45deg, #11233E15, #C9C12C15, #ffffff, #11233E15)',
            backgroundSize: '400% 400%',
          }}
          className="absolute inset-0 animate-liquid-mesh -z-10 pointer-events-none"
        />

        <div className="flex items-center">
          <a href="/" className="relative block">
            {/* Full Logo - Desktop */}
            <motion.div style={{ height: logoHeight }} className="hidden sm:block relative w-48">
              <Image 
                src="/images/logos/logo-navbar.png" 
                alt="Massahud Diagnósticos" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain object-left"
              />
            </motion.div>
            {/* Symbol - Mobile */}
            <motion.div style={{ height: logoHeight }} className="sm:hidden block relative w-12">
              <Image 
                src="/images/logos/simbolo.png" 
                alt="M" 
                fill
                sizes="48px"
                className="object-contain object-left"
              />
            </motion.div>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              style={{ opacity: linkOpacity }}
              className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--primary-blue)] hover:text-[var(--accent-gold)] transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center">
          <motion.div style={{ scale: buttonScale }}>
            <WhatsAppButton 
              id="cta-nav-button"
              style={{ 
                paddingTop: buttonPaddingY, 
                paddingBottom: buttonPaddingY,
                paddingLeft: buttonPaddingX,
                paddingRight: buttonPaddingX 
              }}
              className="!text-[11px] !uppercase !tracking-widest !font-bold !shadow-none !rounded-xl"
            >
              <span className="hidden sm:inline">Agendar Exame</span>
              <span className="sm:hidden">Agendar</span>
            </WhatsAppButton>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
