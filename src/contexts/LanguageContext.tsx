import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, getTranslation } from '../translations';

// Define the shape of our context
interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: Language[];
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * LanguageProvider component that manages the application's language state
 * and provides translation functionality to all child components
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize language from localStorage or browser preference
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0] as Language;
    if (Object.keys(translations).includes(browserLang)) {
      return browserLang;
    }
    
    return 'en'; // Default to English
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    // Update document language for accessibility
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const setLanguage = (lang: Language) => {
    if (Object.keys(translations).includes(lang)) {
      setCurrentLanguage(lang);
    } else {
      console.warn(`Language ${lang} is not supported`);
    }
  };

  // Translation function that components will use
  const t = (key: string): string => {
    return getTranslation(currentLanguage, key);
  };

  const value = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages: Object.keys(translations) as Language[],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
