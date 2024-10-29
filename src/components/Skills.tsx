import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from 'react';

const skills = [
  { name: "Project Management", level: 95 },
  { name: "Construction Supervision", level: 90 },
  { name: "Power Transmission (up to 400kV)", level: 95 },
  { name: "Infrastructure Design", level: 85 },
  { name: "Tender Management", level: 90 }
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

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
    <section id="skills" className="py-20 bg-gray-50">
      <div id="skills-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-600">{skill.level}%</span>
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