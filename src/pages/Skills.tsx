import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Code, Database, Brain, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const { t } = useTranslation('common');
  const categories = t('skills.categories', { returnObjects: true }) as Record<string, string>;
  const items = t('skills.items', { returnObjects: true }) as Record<string, string[]>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconMap: Record<string, any> = {
    languages: Code,
    databases: Database,
    aiml: Brain,
    tools: Wrench,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Helmet>
        <title>{t('skills.title')} - {t('hero.name')}</title>
        <meta name="description" content={t('skills.title')} />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-12 text-center glow-text">
              {t('skills.title')}
            </h1>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-8"
            >
              {Object.keys(categories).map((key) => {
                const Icon = iconMap[key];
                const skillList = items[key] || [];

                return (
                  <motion.div key={key} variants={itemVariants}>
                    <Card className="card-gradient glow-card p-6 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-orbitron font-semibold text-primary">
                          {categories[key]}
                        </h2>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="px-3 py-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
