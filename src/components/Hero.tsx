import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Dhia_Ghouma_CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-4 glow-text"
          >
            {t('hero.name')}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-semibold mb-4 text-primary"
          >
            {t('hero.title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-secondary mb-8"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => navigate('/projects')}
              className="group relative overflow-hidden glow-card px-8 py-6 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="group px-8 py-6 text-lg border-primary hover:bg-primary/10"
            >
              <span className="flex items-center gap-2">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                {t('hero.downloadCV')}
              </span>
            </Button>
          </motion.div>

          {/* Floating animation indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="inline-flex flex-col items-center gap-2 animate-float">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-primary rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
