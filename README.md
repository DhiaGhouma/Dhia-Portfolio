# Portfolio Professionnel - Ghouma Dhia

Portfolio professionnel futuriste et multilingue d'un ingénieur en informatique, développé avec React, TypeScript, et une multitude de technologies modernes.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## 🌟 Caractéristiques

- **Design Tech/Futuriste** : Interface élégante avec effets de glow néon, animations parallax, et fond étoilé animé
- **Multi-langues** : Support complet de 5 langues (Français, Anglais, Arabe, Allemand, Espagnol) avec React-i18next
- **Modes Dark/Black** : Toggle entre mode sombre et mode noir pur (OLED-friendly) avec persistance localStorage
- **Animations fluides** : Framer Motion pour des transitions et animations élégantes
- **Responsive** : Design adaptatif pour tous les appareils (mobile, tablette, desktop)
- **SEO optimisé** : Meta tags dynamiques avec React Helmet Async
- **Fond animé** : Particules étoilées interactives avec react-tsparticles
- **Support RTL** : Bascule automatique en mode RTL pour l'arabe

## 🎨 Design System

### Palette de couleurs
- **Primary (Cyan néon)** : `hsl(180, 100%, 50%)` - #00FFFF
- **Secondary (Violet électrique)** : `hsl(271, 76%, 53%)` - #8A2BE2
- **Background Dark** : `hsl(217, 33%, 8%)` - #0f1419
- **Background Black** : `hsl(0, 0%, 0%)` - #000000

### Typographies
- **Titres** : Orbitron (Google Fonts) - Font tech/futuriste
- **Corps de texte** : Poppins (Google Fonts) - Font moderne et lisible

## 📁 Structure du projet

```
src/
├── components/
│   ├── ui/                 # Composants shadcn-ui
│   ├── Navbar.tsx          # Navigation principale avec langue et thème
│   ├── Footer.tsx          # Pied de page avec liens sociaux
│   ├── Hero.tsx            # Section hero de la page d'accueil
│   └── StarryBackground.tsx # Fond animé de particules
├── pages/
│   ├── Home.tsx            # Page d'accueil avec Hero
│   ├── About.tsx           # À propos et expériences
│   ├── Projects.tsx        # Portfolio de projets avec filtres
│   ├── Skills.tsx          # Compétences techniques
│   ├── Education.tsx       # Formation académique
│   ├── Contact.tsx         # Formulaire de contact
│   └── NotFound.tsx        # Page 404
├── contexts/
│   └── ThemeContext.tsx    # Gestion du thème Dark/Black
├── locales/
│   ├── fr/common.json      # Traductions françaises
│   ├── en/common.json      # Traductions anglaises
│   ├── ar/common.json      # Traductions arabes
│   ├── de/common.json      # Traductions allemandes
│   └── es/common.json      # Traductions espagnoles
├── i18n/
│   └── config.ts           # Configuration i18next
├── index.css               # Styles globaux et design system
└── App.tsx                 # Composant racine
```

## 🚀 Installation et lancement

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/DhiaGhouma/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:8080`

### Build de production

```bash
# Créer un build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. Installer Vercel CLI :
```bash
npm install -g vercel
```

2. Déployer :
```bash
vercel
```

### Netlify

1. Créer un `netlify.toml` à la racine :
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Déployer via Netlify CLI ou interface web

## 🔧 Technologies utilisées

### Core
- **React 18.3.1** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **React Router 6** - Routing

### UI/UX
- **Tailwind CSS** - Styles utility-first
- **shadcn/ui** - Composants UI élégants
- **Framer Motion** - Animations
- **react-tsparticles** - Fond animé
- **Lucide React** - Icônes modernes

### Internationalisation
- **react-i18next** - Gestion des traductions
- **i18next** - Framework i18n

### SEO & Meta
- **React Helmet Async** - Meta tags dynamiques

### Formulaires & UI
- **React Hook Form** - Gestion de formulaires
- **Zod** - Validation de schémas

## 📝 Personnalisation

### Ajouter une nouvelle langue

1. Créer un nouveau fichier dans `src/locales/{code}/common.json`
2. Copier la structure depuis `fr/common.json`
3. Traduire tous les champs
4. Ajouter la langue dans `src/components/Navbar.tsx` :

```typescript
const languages = [
  // ...autres langues
  { code: 'nouveau', flag: '🏴', name: 'Nom' },
];
```

5. Importer dans `src/i18n/config.ts`

### Modifier les couleurs

Éditer `src/index.css` pour changer les couleurs du design system :

```css
:root {
  --primary: 180 100% 50%;   /* Cyan néon */
  --secondary: 271 76% 53%;  /* Violet électrique */
  /* etc... */
}
```

### Ajouter un projet

Éditer les fichiers de traduction dans `src/locales/{lang}/common.json` :

```json
{
  "projects": {
    "items": [
      {
        "title": "Nouveau Projet",
        "description": "Description du projet",
        "tech": ["React", "Node.js"],
        "category": "fullstack",
        "github": "https://github.com/...",
        "demo": "https://demo.com"
      }
    ]
  }
}
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Ghouma Dhia**
- Email : ghoumadhia01@gmail.com
- GitHub : [@DhiaGhouma](https://github.com/DhiaGhouma)
- LinkedIn : [dhia-ghouma-725ab4212](https://linkedin.com/in/dhia-ghouma-725ab4212)
- Portfolio : [dhiaghouma.vercel.app](https://dhiaghouma.vercel.app)

## 🙏 Remerciements

- [shadcn/ui](https://ui.shadcn.com/) pour les composants UI
- [Lucide](https://lucide.dev/) pour les icônes
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [tsParticles](https://particles.js.org/) pour le fond animé

---

⭐ N'hésitez pas à star le projet si vous l'aimez !
