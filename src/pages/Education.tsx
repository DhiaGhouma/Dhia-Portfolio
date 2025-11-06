import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const { t } = useTranslation('common');
  const educationItems = t('education.items', { returnObjects: true }) as Array<{
    degree: string;
    school: string;
    fullName?: string;
    period: string;
    location: string;
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>{t('education.title')} - {t('hero.name')}</title>
        <meta name="description" content={t('education.title')} />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center glow-text">
              {t('education.title')}
            </h1>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto space-y-8"
            >
              {educationItems.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-gradient glow-card p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:animate-glow-pulse">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-2xl font-orbitron font-semibold text-primary mb-2 group-hover:glow-text transition-all">
                          {edu.degree}
                        </h2>
                        
                        <p className="text-xl font-semibold text-foreground mb-1">
                          {edu.school}
                        </p>
                        
                        {edu.fullName && (
                          <p className="text-sm text-muted-foreground mb-4">
                            {edu.fullName}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
