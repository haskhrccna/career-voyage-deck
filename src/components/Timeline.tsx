import { Briefcase, Calendar } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 1,
      title: t('experience.positions.position1.title'),
      company: t('experience.positions.position1.company'),
      date: t('experience.positions.position1.date'),
      description: t('experience.positions.position1.description'),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: 2,
      title: t('experience.positions.position2.title'),
      company: t('experience.positions.position2.company'),
      date: t('experience.positions.position2.date'),
      description: t('experience.positions.position2.description'),
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 3,
      title: t('experience.positions.position3.title'),
      company: t('experience.positions.position3.company'),
      date: t('experience.positions.position3.date'),
      description: t('experience.positions.position3.description'),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">{t('experience.title')}</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
                <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'mr-auto md:mr-8' : 'ml-auto md:ml-8'} bg-slate-700`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-2 text-sm text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.date}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{experience.title}</h3>
                      <div className="flex items-center mb-4 text-blue-400">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {experience.company}
                      </div>
                      <p className="text-gray-300">{experience.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;