import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Award } from 'lucide-react';

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      id: 1,
      title: "HashiCorp Certified: Terraform Associate (003)",
      date: "Nov 2023"
    },
    {
      id: 2,
      title: "Project Management Professional (PMP)",
      date: "June 2023"
    },
    {
      id: 3,
      title: "Microsoft Azure Fundamentals",
      date: "May 2022"
    },
    {
      id: 4,
      title: "AWS Certified Developer Associate",
      date: "April 2022"
    },
    {
      id: 5,
      title: "Cisco Certified DevNet Associate",
      date: "Jan 2022"
    },
    {
      id: 6,
      title: "AWS Certified Solutions Architect – Associate",
      date: "Nov 2021"
    },
    {
      id: 7,
      title: "PCAP – Certified Associate in Python Programming",
      date: "Sep 2021"
    },
    {
      id: 8,
      title: "MCSE (Microsoft Certified Systems Engineer)",
      date: "2001"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">{t('certifications.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 
                hover:from-slate-700 hover:to-slate-600
                transition-all duration-300 transform 
                hover:scale-105 hover:shadow-2xl cursor-pointer
                border border-slate-600 hover:border-blue-400"
            >
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0 
                  transition-all duration-300 group-hover:rotate-12 
                  hover:text-blue-300" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 
                    transition-all duration-300 hover:text-blue-300">
                    {cert.title}
                  </h3>
                  <p className="text-base text-gray-300 transition-colors 
                    duration-300 group-hover:text-gray-200">
                    {cert.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;