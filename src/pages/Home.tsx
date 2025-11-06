import { Hero } from '@/components/Hero';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Helmet>
        <title>{t('hero.name')} - {t('hero.title')}</title>
        <meta name="description" content={t('about.profile')} />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
