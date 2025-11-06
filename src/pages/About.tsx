import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Building2, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation('common');
  const experiences = t('experiences', { returnObjects: true }) as Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    tech: string[];
  }>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>{t('nav.about')} - {t('hero.name')}</title>
        <meta name="description" content={t('about.profile')} />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-center glow-text">
              {t('about.title')}
            </h1>

            {/* Profile Section */}
            <Card className="card-gradient glow-card p-8 mb-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.profile')}
              </p>
            </Card>

            {/* Experience Timeline */}
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8 text-primary">
              {t('about.experience')}
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-gradient glow-card p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform">
                    {/* Accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />

                    <div className="ml-6">
                      {/* Company & Role */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-2xl font-orbitron font-semibold text-primary mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-lg text-foreground">
                            <Building2 className="h-5 w-5" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages & Interests */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="card-gradient glow-card p-6">
                <h3 className="text-2xl font-orbitron font-semibold text-primary mb-4">
                  {t('humanLanguages.title')}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{t('humanLanguages.arabic')}</li>
                  <li>{t('humanLanguages.french')}</li>
                  <li>{t('humanLanguages.english')}</li>
                </ul>
              </Card>

              <Card className="card-gradient glow-card p-6">
                <h3 className="text-2xl font-orbitron font-semibold text-secondary mb-4">
                  {t('interests.title')}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {(t('interests.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
