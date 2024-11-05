import { useLanguage } from '@/contexts/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-12 text-slate-900 dark:text-white">
          {t('experience.title')}
        </h2>
        <div className="relative">
          {/* Timeline Items */}
          <div className="absolute inset-0 border-l-2 border-gray-200 dark:border-gray-700"></div>
          <div className="flex flex-col space-y-10">
            <div className="relative">
              <div className="flex items-center justify-start space-x-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {t('experience.positions.position1.title')}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('experience.positions.position1.company')} - {t('experience.positions.position1.date')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{t('experience.positions.position1.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-start space-x-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {t('experience.positions.position2.title')}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('experience.positions.position2.company')} - {t('experience.positions.position2.date')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{t('experience.positions.position2.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-start space-x-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {t('experience.positions.position3.title')}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('experience.positions.position3.company')} - {t('experience.positions.position3.date')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{t('experience.positions.position3.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-start space-x-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {t('experience.positions.position4.title')}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('experience.positions.position4.company')} - {t('experience.positions.position4.date')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{t('experience.positions.position4.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-start space-x-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {t('experience.positions.position5.title')}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('experience.positions.position5.company')} - {t('experience.positions.position5.date')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{t('experience.positions.position5.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-start space-x-4">
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {t('experience.positions.position6.title')}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('experience.positions.position6.company')} - {t('experience.positions.position6.date')}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{t('experience.positions.position6.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
