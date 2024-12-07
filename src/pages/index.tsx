import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const IndexPage: React.FC = () => {
  // Use our language context for translations
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-6">
        {t('home.welcome')}
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Main content card */}
        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t('home.subtitle')}
          </h2>
          <p className="text-slate-300">
            Visualize and plan your professional growth with our interactive tools and resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
