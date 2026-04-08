"use client";

import React, { useState } from "react";
import { 
  Baby, Search, Dna, Microscope, Scan, Activity, HeartPulse, 
  Flower2, Shield, Layers, Droplets, Radio, LucideIcon, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppButton } from "./Navbar";

const ExamDetailCard = ({ 
  title, 
  description, 
  icon: Icon,
  index,
  delay,
  hasDoppler
}: { 
  title: string; 
  description: string; 
  icon: LucideIcon;
  index: number;
  delay: number;
  hasDoppler?: boolean;
}) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay }}
    className="relative group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(17,35,62,0.1)] hover:shadow-[0_30px_70px_rgba(17,35,62,0.15)] hover:border-[var(--primary-blue)]/20 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[220px] overflow-hidden"
  >
    {/* Decorative Number Watermark */}
    <span className="absolute -right-4 -bottom-6 text-[120px] font-serif font-black text-[var(--primary-blue)]/5 pointer-events-none group-hover:text-[var(--accent-gold)]/10 transition-colors duration-700">
      {(index + 1).toString().padStart(2, '0')}
    </span>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-all duration-500">
          <Icon className="w-7 h-7" />
        </div>
        {/* Doppler Badge - Only for categories with hasDoppler prop */}
        {hasDoppler && (
          <div className="bg-gradient-to-r from-[#A69D24]/10 to-[#C9C12C]/10 border border-[#C9C12C]/20 px-3 py-1 rounded-full flex items-center gap-2 group-hover:from-[var(--accent-gold)] group-hover:to-[var(--accent-gold)] transition-all duration-500">
            <Activity className="w-3 h-3 text-[var(--accent-gold)] group-hover:text-white" />
            <span className="text-[10px] font-bold text-[var(--accent-gold)] group-hover:text-white uppercase tracking-wider font-sans">
              + Doppler Incluso
            </span>
          </div>
        )}
      </div>

      <h4 className="text-[var(--primary-blue)] font-serif font-bold text-xl mb-3 leading-tight group-hover:text-[var(--accent-gold)] transition-colors">
        {title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed font-sans line-clamp-3 group-hover:text-slate-600 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

const Exames = () => {
  const [activeTab, setActiveTab] = useState<"baby" | "general">("baby");
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: "baby" | "general") => {
    setActiveTab(tabId);
    
    // Smooth scroll to the top of the tabs when clicked
    if (sectionRef.current) {
      const yOffset = -120; // Anchor offset to account for sticky nav/tabs
      const element = sectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleSetTab = (e: any) => {
      if (e.detail === "baby" || e.detail === "general") {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener('setExamTab', handleSetTab);
    return () => window.removeEventListener('setExamTab', handleSetTab);
  }, []);

  const gestacaoExams = [
    { title: "Obstétrico Convencional", icon: Baby, description: "Acompanhamento essencial do desenvolvimento fetal em todas as fases da gestação via Doppler.", hasDoppler: true },
    { title: "Obstétrico 1º Trimestre", icon: Search, description: "Confirmação de vitalidade e datação precisa logo nas primeiras semanas com análise circulatória.", hasDoppler: true },
    { title: "Translucência Nucal", icon: Dna, description: "Rastreamento genético vital com avaliação minuciosa do ducto venoso e osso nasal via Doppler.", hasDoppler: true },
    { title: "Morfológico 1º Trimestre", icon: Microscope, description: "Detecção precoce de malformações com estudo de artérias uterinas para predição de pré-eclâmpsia.", hasDoppler: true },
    { title: "Morfológico 2º Trimestre", icon: Scan, description: "O check-up fetal mais completo para avaliação de todos os órgãos e ecocardiografia funcional.", hasDoppler: true },
    { title: "Obstétrico com Doppler", icon: Activity, description: "Monitoramento hemodinâmico rigoroso para garantir que a nutrição do seu bebê esteja perfeita.", hasDoppler: true },
    { title: "Perfil Biofísico Fetal", icon: HeartPulse, description: "Avaliação da vitalidade fetal através de movimentos, tônus e dinâmica do fluxo sanguíneo.", hasDoppler: true }
  ];

  const generalExams = [
    { title: "Ultrassom Endovaginal", icon: Flower2, description: "Mapeamento detalhado do útero e ovários com Doppler colorido para diagnóstico de pólipos ou cistos.", hasDoppler: false },
    { title: "Mamas e Axilas", icon: Shield, description: "Prevenção com Doppler para avaliar a vascularização de nódulos, garantindo laudos mais precisos.", hasDoppler: false },
    { title: "Abdome Total", icon: Layers, description: "Estudo hemodinâmico de órgãos como fígado, rins e grandes vasos abdominais para diagnósticos seguros.", hasDoppler: false },
    { title: "Aparelho Urinário", icon: Droplets, description: "Análise funcional de rins e bexiga, detectando obstruções e calculose com auxílio do Doppler.", hasDoppler: false },
    { title: "Tireóide", icon: Radio, description: "Classificação precisa de nódulos através do estudo da vascularização central e periférica.", hasDoppler: false }
  ];

  const categories = [
    { id: "baby", label: "Exames gestacionais", icon: Baby },
    { id: "general", label: "Saúde Geral e Preventiva", icon: Activity }
  ];

  return (
    <section id="exames" className="bg-white pt-24 pb-16 px-6 lg:px-16 overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#11233E 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-[var(--accent-gold)]/10 px-6 py-2 rounded-full mb-8 border border-[var(--accent-gold)]/20 shadow-sm">
            <Activity className="w-4 h-4 text-[var(--accent-gold)] animate-pulse" />
            <span className="uppercase text-[var(--accent-gold)] text-xs tracking-widest font-black font-sans">
              Diferencial Doppler em 100% dos Exames Gestacionais
            </span>
          </div>
          <h2 className="text-[var(--primary-blue)] text-4xl lg:text-6xl font-serif font-normal tracking-tight mb-8">
            Conheça os exames <br /><span className="italic">feitos para você</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed text-lg">
            Combinamos tecnologia de última geração com um olhar acolhedor para garantir segurança e tranquilidade em cada imagem, cuidando de cada detalhe da sua saúde e do seu bebê.
          </p>
        </div>

        {/* Tab Selector - Sticky & Horizontal Scroll */}
        <div ref={sectionRef} className="sticky top-[70px] z-40 py-4 mb-16 bg-white/80 backdrop-blur-sm -mx-6 px-6 overflow-hidden">
          <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-md p-1.5 rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col sm:flex-row gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id as any)}
                className={`
                  relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 rounded-2xl sm:rounded-[2rem] text-xs sm:text-sm font-bold font-sans transition-all duration-500 whitespace-nowrap w-full
                  ${activeTab === cat.id ? "text-white" : "text-[var(--primary-blue)] hover:bg-white/80 active:scale-95"}
                `}
              >
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#A69D24] to-[#C9C12C] rounded-2xl sm:rounded-[2rem] shadow-lg shadow-[#A69D24]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <cat.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10 whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Exams Grid with Transition */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeTab === "baby" ? gestacaoExams : generalExams).map((exam, index) => (
                <ExamDetailCard 
                  key={exam.title} 
                  {...exam} 
                  index={index}
                  delay={index * 0.05} 
                />
              ))}
              
              {/* Special CTA Card - Mosaic Style */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="lg:col-span-1 bg-[var(--primary-blue)] rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-between min-h-[220px]"
              >
                <div className="relative z-10">
                  <h4 className="text-2xl font-serif italic mb-3 leading-tight">
                    Não encontrou <br />seu exame?
                  </h4>
                  <p className="text-blue-100/70 text-sm mb-6 font-sans">
                    Nossa equipe técnica pode confirmar disponibilidade e modalidades específicas para você.
                  </p>
                </div>
                <div className="relative z-10">
                  <WhatsAppButton 
                    id="cta-exames-disponibilidade"
                    className="!bg-white !text-[var(--primary-blue)] hover:!bg-slate-50 border-none !px-8 !py-4 !text-sm flex gap-2 items-center !shadow-none !rounded-xl w-full"
                  >
                    Consultar Disponibilidade
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </WhatsAppButton>
                </div>
                <Activity className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-1000 rotate-12" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Footer Section Action */}
        <div className="mt-12 mb-4 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <WhatsAppButton 
            id="cta-exames-agendar"
            variant="primary" 
            className="text-lg px-12 py-5 shadow-2xl"
          >
            Agendar Exame Agora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default Exames;
