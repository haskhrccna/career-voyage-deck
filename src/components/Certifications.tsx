import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Award } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { pmpCertification, otherCertifications } from '@/data/certificateData';

const Certifications = () => {
  const { t } = useLanguage();

  const CertificationCard = ({ cert }: { cert: typeof pmpCertification }) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card 
          className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 
            hover:from-slate-700 hover:to-slate-600
            transition-all duration-300 transform 
            hover:scale-105 hover:shadow-2xl cursor-pointer
            border border-slate-600 hover:border-blue-400"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0 
                transition-all duration-300 group-hover:rotate-12 
                hover:text-blue-300" />
              <div>
                <h3 className="text-lg font-bold text-white mb-3 
                  transition-all duration-300 hover:text-blue-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-300 transition-colors 
                  duration-300 group-hover:text-gray-200">
                  {cert.date}
                </p>
              </div>
            </div>
            <img 
              src={cert.imageUrl} 
              alt={cert.title}
              className="w-24 h-24 object-contain mx-auto rounded-lg"
            />
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-slate-800 border-slate-700">
        <div className="flex flex-col gap-2">
          <img 
            src={cert.imageUrl} 
            alt={cert.title}
            className="rounded-lg w-full h-auto"
          />
          <p className="text-sm text-gray-300">{cert.title}</p>
          <p className="text-xs text-gray-400">Issued: {cert.date}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-16 text-white">
          {t('certifications.title')}
        </h2>
        
        {/* PMP Certification in first row */}
        <div className="mb-6 max-w-xl mx-auto">
          <CertificationCard cert={pmpCertification} />
        </div>

        {/* Other certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCertifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;