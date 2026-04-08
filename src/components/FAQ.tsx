"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WhatsAppButton } from "./Navbar";

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-[var(--neutral-silver)]/20 py-6 last:border-0 group">
    <button
      className="w-full flex justify-between items-center text-left gap-4"
      onClick={onClick}
    >
      <h3 className={`text-xl font-medium transition-colors duration-500 ${isOpen ? "text-[var(--accent-gold)]" : "text-[var(--primary-blue)] group-hover:text-[var(--accent-gold)]"}`}>
        {question}
      </h3>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-[var(--neutral-silver)]/30 flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-[var(--accent-gold)] border-[var(--accent-gold)] text-white rotate-180" : "text-[var(--primary-blue)] bg-white"}`}>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"}`}>
      <p className="text-slate-600 leading-relaxed text-lg pb-4 max-w-3xl">
        {answer}
      </p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Os exames incluem o estudo com Doppler?",
      answer: "Sim! Por ser um padrão de excelência da nossa clínica, 100% dos exames gestacionais já incluem o estudo com Doppler (estudo da circulação). Isso garante uma avaliação completa da saúde e do bem-estar do seu bebê, sem custos adicionais. Para exames de saúde geral, o Doppler é realizado conforme indicação clínica."
    },
    {
      question: "O agendamento é rápido e humanizado?",
      answer: "Totalmente. Nosso atendimento pelo WhatsApp é direto e acolhedor. Aqui você fala com pessoas que entendem sua urgência e buscam o melhor horário para você, sem burocracias frias."
    },
    {
      question: "Posso levar acompanhantes para compartilhar este momento?",
      answer: "Com certeza. Acreditamos que o exame é um evento da família. O pai, avós ou acompanhante de sua escolha são convidados a assistir tudo em uma tela dedicada, com todo o conforto e atenção que vocês merecem."
    },
    {
      question: "Como e quando recebo os resultados dos exames?",
      answer: "Você sai da clínica com o laudo impresso e as melhores fotos em mãos. Além disso, disponibilizamos a opção para gravar seus ultrassons (consulte valor da gravação) para que você possa compartilhar com sua família e guardar esse registro para sempre."
    },
    {
      question: "O Dr. Paulo Massahud atende casos de alta complexidade?",
      answer: "Sim. O Dr. Paulo é referência em medicina fetal e diagnósticos complexos. Se você recebeu um encaminhamento por alguma alteração ou apenas quer a segurança de um especialista, nossa clínica é o lugar certo para o seu cuidado."
    },
    {
      question: "Quais são as formas de pagamento e convênios?",
      answer: "Nossa clínica realiza exclusivamente atendimentos particulares para garantir a agilidade e o tempo necessário para um diagnóstico minucioso. Aceitamos pagamentos em Dinheiro, Pix e cartões de Débito/Crédito."
    }
  ];

  return (
    <section id="faq" className="bg-[var(--bg-soft-blue)] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[var(--primary-blue)] text-4xl lg:text-5xl font-normal text-center mb-16 tracking-tight animate-fade-in-up">
          Ficou alguma dúvida?
        </h2>

        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-[var(--neutral-silver)]/10 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <WhatsAppButton 
            id="cta-faq-whatsapp"
            variant="primary" 
            className="text-lg px-12 py-5 shadow-2xl"
          >
            Falar com suporte pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
