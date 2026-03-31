/**
 * CENTRAL DE IDs DE MARKETING - MASSAHUD DIAGNÓSTICOS
 * Edite os campos abaixo com os IDs reais recebidos das plataformas.
 */

export const ANALYTICS_CONFIG = {
  // Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX", 

  // Google Analytics 4
  GA_ID: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",

  // Google Ads
  ADS_ID: process.env.NEXT_PUBLIC_ADS_ID || "AW-XXXXXXXXXXX",

  // Meta Pixel / Facebook Pixel
  FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "XXXXXXXXXXXXXXX",
};
