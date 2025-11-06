import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from "../components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation('common');

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="text-9xl font-orbitron font-bold mb-4 glow-text">404</h1>
        <p className="text-2xl md:text-3xl font-orbitron mb-2 text-primary">Page non trouvée</p>
        <p className="text-lg text-muted-foreground mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="glow-card">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              {t('nav.home')}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Retour
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
