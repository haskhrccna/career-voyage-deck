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
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      id: 3,
      title: t('experience.positions.position3.title'),
      company: t('experience.positions.position3.company'),
      date: t('experience.positions.position3.date'),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 4,
      title: t('experience.positions.position4.title'),
      company: t('experience.positions.position4.company'),
      date: t('experience.positions.position4.date'),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      id: 5,
      title: t('experience.positions.position5.title'),
      company: t('experience.positions.position5.company'),
      date: t('experience.positions.position5.date'),
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780"
    },
    {
      id: 6,
      title: t('experience.positions.position6.title'),
      company: t('experience.positions.position6.company'),
      date: t('experience.positions.position6.date'),
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      id: 7,
      title: t('experience.positions.position7.title'),
      company: t('experience.positions.position7.company'),
      date: t('experience.positions.position7.date'),
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5"
    },
    {
      id: 8,
      title: t('experience.positions.position8.title'),
      company: t('experience.positions.position8.company'),
      date: t('experience.positions.position8.date'),
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      id: 9,
      title: t('experience.positions.position9.title'),
      company: t('experience.positions.position9.company'),
      date: t('experience.positions.position9.date'),
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5"
    },
    {
      id: 10,
      title: t('experience.positions.position10.title'),
      company: t('experience.positions.position10.company'),
      date: t('experience.positions.position10.date'),
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
    }
  ];

  return (
    <section id="experience" className="py-10 bg-slate-800">
      <div className="sticky top-0 bg-slate-800/90 px-6 py-3 z-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">{t('experience.title')}</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
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
                      <div className="flex items-center text-blue-400 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {experience.company}
                      </div>
                      {experience.description && (
                        <p className="text-gray-300 text-sm">{experience.description}</p>
                      )}
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