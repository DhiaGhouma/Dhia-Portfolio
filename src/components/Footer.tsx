import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/DhiaGhouma', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/dhia-ghouma-725ab4212', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:ghoumadhia01@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Ghouma Dhia.</span>
            <span>{t('footer.rights')}</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t('footer.madeWith')}</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>{t('footer.by')} Dhia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
