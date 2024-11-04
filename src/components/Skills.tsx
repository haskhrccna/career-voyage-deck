import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const { t } = useLanguage();

  const skills = [
    { name: t('skills.items.projectManagement'), level: 95 },
    { name: t('skills.items.constructionSupervision'), level: 90 },
    { name: t('skills.items.powerTransmission'), level: 95 },
    { name: t('skills.items.infrastructureDesign'), level: 85 },
    { name: t('skills.items.tenderManagement'), level: 90 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div id="skills-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-slate-800 p-6 rounded-lg shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <Progress
                value={animated ? skill.level : 0}
                className="transition-all duration-1000 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;