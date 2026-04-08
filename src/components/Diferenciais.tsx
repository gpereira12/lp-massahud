import { HeartPulse, ShieldCheck, Zap, Smile, LucideIcon } from "lucide-react";
import { WhatsAppButton } from "./Navbar";

const DiferencialCard = ({ icon: Icon, title, description, index }: { icon: LucideIcon; title: string; description: string; index: number }) => (
  <div 
    className="bg-white border border-[var(--neutral-silver)]/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-[var(--accent-gold)] group animate-fade-in-up"
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    <div className="bg-[var(--bg-soft-blue)] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[var(--primary-blue)] group-hover:bg-[var(--accent-gold)] group-hover:text-white transition-all duration-500 shadow-sm">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-serif font-bold text-[var(--primary-blue)] mb-3 tracking-tight leading-tight">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed font-sans">{description}</p>
  </div>
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

const Diferenciais = () => {
  const data = [
    {
      icon: HeartPulse,
      title: "Atendimento Acolhedor",
      description: "Um olhar sensível que prioriza o seu bem-estar, garantindo que você se sinta ouvida e segura em cada etapa da sua jornada."
    },
    {
      icon: ShieldCheck,
      title: "Ética Profissional",
      description: "Compromisso inabalável com a verdade e a excelência médica, tratando cada diagnóstico com a transparência e o respeito necessários."
    },
    {
      icon: Zap,
      title: "Eficiência nos Processos",
      description: "Agilidade na entrega de laudos e organização precisa para que o seu tempo seja respeitado e as decisões sejam rápidas."
    },
    {
      icon: Smile,
      title: "Amor e Dedicação",
      description: "A medicina exercida com o coração, onde cada paciente é tratada de forma única, com a dedicação de quem ama cuidar da vida."
    }
  ];

  return (
    <section id="diferenciais" className="bg-[#FBFCFE] py-32 px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="uppercase text-[var(--accent-gold)] text-sm tracking-[0.3em] mb-6 font-bold font-sans block">
            Nossa Essência
          </span>
          <h2 className="text-4xl lg:text-6xl text-[var(--primary-blue)] font-serif font-bold tracking-tight leading-tight">
            Valores que guiam <br /><span className="italic font-light">nosso cuidado</span>
          </h2>
          <div className="h-1 w-24 bg-[var(--accent-gold)]/30 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {data.map((item, index) => (
            <DiferencialCard key={index} {...item} index={index} />
          ))}
        </div>

        <div className="mt-24 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>

          <WhatsAppButton variant="primary" className="text-lg px-12 py-5 shadow-2xl">
            Agendar exame agora
          </WhatsAppButton>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-slate-50/50 blur-[100px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default Diferenciais;
