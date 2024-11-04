import { Briefcase, Calendar } from 'lucide-react';
import { Card } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    title: "Principal Resident Engineer-Electrical",
    company: "AECOM Middle East",
    date: "2024 - Present",
    description: "Infrastructure and Landscaping Works Al Noud (Al Khrair) Al Ain",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475" // Circuit board image representing electrical engineering
  },
  {
    id: 2,
    title: "Project Manager",
    company: "Mott MacDonald Consultant",
    date: "2022",
    description: "Coordinated with EtihadWE (previously FEWA) and main contractors for power infrastructure projects across UAE. Managed design compliance, electrical safety, and project execution in North, Central, West and East areas.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81" // Group of people around screens - project management
  },
  {
    id: 3,
    title: "Senior Project Manager",
    company: "AL BARRAK cont.",
    date: "Previous Position",
    description: "Led the Supply and installation of 132kV Cables in Shakhbout city, Abu Dhabi UAE. Managed multiple high-voltage cable installation projects including 400kV cable routes in Qatar.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" // People with laptops representing project management
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

          {/* Experience cards */}
          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
                
                {/* Card */}
                <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'mr-auto md:mr-8' : 'ml-auto md:ml-8'}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.date}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                      <div className="flex items-center mb-4 text-blue-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {experience.company}
                      </div>
                      <p className="text-gray-600">{experience.description}</p>
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