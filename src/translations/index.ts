// This file serves as our translation dictionary for multiple languages.
// Each language has its own namespace of translations, organized by feature area.

export const translations = {
  en: {
    navigation: {
      home: "Home",
      contact: "Contact",
    },
    home: {
      welcome: "Welcome to Career Voyage Deck",
      subtitle: "Visualize and plan your professional growth",
      exploreButton: "Explore Now",
    },
    contact: {
      title: "Contact Us",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Send Message",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send message. Please try again.",
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      retry: "Retry",
    },
  },
  es: {
    navigation: {
      home: "Inicio",
      contact: "Contacto",
    },
    home: {
      welcome: "Bienvenido a Career Voyage Deck",
      subtitle: "Visualiza y planifica tu crecimiento profesional",
      exploreButton: "Explorar Ahora",
    },
    contact: {
      title: "Contáctanos",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      submitButton: "Enviar Mensaje",
      successMessage: "¡Mensaje enviado con éxito!",
      errorMessage: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    },
    common: {
      loading: "Cargando...",
      error: "Se produjo un error",
      retry: "Reintentar",
    },
  },
};

// Type definitions for our translations to ensure type safety
export type Language = keyof typeof translations;
export type TranslationKeys = keyof typeof translations.en;

// Helper type to get nested keys for type checking
export type NestedTranslationKeys<T> = {
  [K in keyof T]: T[K] extends object
    ? `${string & K}.${string & keyof T[K]}`
    : K;
}[keyof T];

/**
 * Gets a translation by key, handling nested paths
 * @param lang The current language
 * @param key The translation key (can be nested using dot notation)
 * @returns The translated string or the key if not found
 */
export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let current: any = translations[lang];
  
  for (const k of keys) {
    if (current[k] === undefined) {
      console.warn(`Translation missing for key: ${key} in language: ${lang}`);
      return key;
    }
    current = current[k];
  }
  
  return current;
}
