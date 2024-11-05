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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">{t('certifications.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="bg-slate-800 p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.date}</p>
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