import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t } = useTranslation('common');
  const projects = t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tech: string[];
    category: string;
    github: string;
    demo?: string;
  }>;

  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'fullstack', 'ai'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Helmet>
        <title>{t('projects.title')} - {t('hero.name')}</title>
        <meta name="description" content={t('projects.title')} />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-center glow-text">
              {t('projects.title')}
            </h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  variant={filter === cat ? 'default' : 'outline'}
                  className={`capitalize ${filter === cat ? 'glow-border' : ''}`}
                >
                  {cat === 'all' ? t('projects.filterAll') : cat}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-gradient glow-card h-full flex flex-col p-6 group hover:scale-105 transition-transform">
                    {/* Project Title */}
                    <h3 className="text-xl font-orbitron font-semibold text-primary mb-3 group-hover:glow-text transition-all">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover/btn:text-primary transition-colors" />
                          {t('projects.viewGithub')}
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group/btn"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:text-primary transition-colors" />
                            {t('projects.viewDemo')}
                          </a>
                        </Button>
                      )}
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

export default Projects;
