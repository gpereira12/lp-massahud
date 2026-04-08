import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { ANALYTICS_CONFIG } from "@/config/analytics";

const darkerGrotesque = localFont({
  src: [
    { path: "./fonts/DarkerGrotesque-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/DarkerGrotesque-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DarkerGrotesque-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DarkerGrotesque-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/DarkerGrotesque-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/DarkerGrotesque-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/DarkerGrotesque-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-massahud-serif",
});

const openSans = localFont({
  src: [
    { path: "./fonts/OpenSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/OpenSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/OpenSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/OpenSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/OpenSans-Semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/OpenSans-SemiboldItalic.ttf", weight: "600", style: "italic" },
    { path: "./fonts/OpenSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/OpenSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/OpenSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/OpenSans-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-massahud-sans",
});

export const metadata: Metadata = {
  title: "Massahud Diagnósticos | Dr. Paulo Massahud - Ultrassonografia em BH",
  description: "Especialista em ultrassonografia obstétrica e diagnóstica humanizada em Belo Horizonte. Tecnologia de ponta e cuidado acolhedor com o Dr. Paulo Massahud.",
  keywords: [
    "ultrassom bh", 
    "ultrassom obstétrico", 
    "dr paulo massahud", 
    "ultrassom morfológico bh", 
    "doppler obstétrico bh", 
    "clínica de ultrassom santa efigênia bh"
  ],
  authors: [{ name: "Dr. Paulo Massahud" }],
  icons: {
    icon: "/images/logos/simbolo.png",
    apple: "/images/logos/simbolo.png"
  },
  openGraph: {
    title: "Massahud Diagnósticos | Dr. Paulo Massahud",
    description: "Ultrassonografia humanizada e precisa em Belo Horizonte. Conheça nossa tecnologia e atendimento exclusivo.",
    url: "https://massahuddiagnosticos.com.br",
    siteName: "Massahud Diagnósticos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logos/logo-navbar.png", // Imagem que aparece no compartilhamento
        width: 1200,
        height: 630,
        alt: "Massahud Diagnósticos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massahud Diagnósticos | Dr. Paulo Massahud",
    description: "Ultrassonografia humanizada e precisa em Belo Horizonte.",
    images: ["/images/logos/logo-navbar.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${darkerGrotesque.variable} ${openSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[var(--primary-blue)] relative">
        {/* Google Tag Manager (Script Cabeçalho) */}
        {ANALYTICS_CONFIG.GTM_ID !== "GTM-XXXXXXX" && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${ANALYTICS_CONFIG.GTM_ID}');`,
            }}
          />
        )}

        {/* Google Analytics 4 & Ads (gtag.js) */}
        {ANALYTICS_CONFIG.GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ANALYTICS_CONFIG.GA_ID}');
                  ${ANALYTICS_CONFIG.ADS_ID !== "AW-XXXXXXXXXXX" ? `gtag('config', '${ANALYTICS_CONFIG.ADS_ID}');` : ""}
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel (Facebook) */}
        {ANALYTICS_CONFIG.FB_PIXEL_ID !== "XXXXXXXXXXXXXXX" && (
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${ANALYTICS_CONFIG.FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {/* Noscripts (Body) */}
        <noscript>
          {ANALYTICS_CONFIG.GTM_ID !== "GTM-XXXXXXX" && (
            <iframe 
              src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS_CONFIG.GTM_ID}`}
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
            />
          )}
          {ANALYTICS_CONFIG.FB_PIXEL_ID !== "XXXXXXXXXXXXXXX" && (
            <img 
              height="1" width="1" style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${ANALYTICS_CONFIG.FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          )}
        </noscript>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Physician",
                  "@id": "https://massahuddiagnosticos.com.br",
                  "name": "Massahud Diagnósticos - Dr. Paulo Massahud",
                  "url": "https://massahuddiagnosticos.com.br",
                  "logo": "https://massahuddiagnosticos.com.br/images/logos/logo-navbar.png",
                  "image": "https://massahuddiagnosticos.com.br/images/IMG_7973.webp",
                  "description": "Clínica de ultrassonografia especializada em exames obstétricos, ginecológicos e gerais com Doppler em Belo Horizonte.",
                  "telephone": "+553136435473",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Av. do Contorno, 3861 – Sala 202, Santa Efigênia",
                    "addressLocality": "Belo Horizonte",
                    "addressRegion": "MG",
                    "postalCode": "30110-017",
                    "addressCountry": "BR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -19.9283077,
                    "longitude": -43.9221151
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Saturday",
                      "opens": "08:00",
                      "closes": "13:00"
                    }
                  ],
                  "medicalSpecialty": ["Radiology", "Obstetrics and Gynecology"]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Os exames incluem o estudo com Doppler?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sim! Por ser um padrão de excelência da nossa clínica, todos os exames realizados já incluem o estudo com Doppler (estudo da circulação). Isso garante uma avaliação completa da saúde e do bem-estar do seu bebê, sem custos adicionais."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Posso levar acompanhantes para acompanhar o ultrassom?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sim. Acreditamos que o exame é um evento da família. Pai, avós ou acompanhante de sua escolha são convidados a assistir tudo em uma tela dedicada, com todo o conforto."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Como recebo os resultados dos exames?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Você sai da clínica com o laudo impresso e as melhores fotos em mãos. Também disponibilizamos as imagens digitais de alta qualidade para compartilhar com sua família."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
