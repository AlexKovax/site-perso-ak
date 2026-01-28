# Design System - Brutalist UI

Un design system minimaliste avec une esthétique brutaliste. Pensé pour être facilement déclinable et personnalisable.

## Principes de design

### Esthétique brutaliste
- **Bordures épaisses** : 2-3px, toujours noires
- **Ombres portées décalées** : effet de profondeur sans dégradé
- **Formes géométriques** : angles droits, rayons de bordure minimaux
- **Contrastes forts** : texte noir sur fond clair
- **Typographie affirmée** : titres en gras, hiérarchie visuelle claire

### Interactions
- **Hover lift** : les éléments interactifs "se soulèvent" au survol
- **Active press** : les éléments s'enfoncent au clic
- **Soulignement animé** : liens de navigation avec barre qui apparaît

---

## Tokens de design

### Couleurs

```css
:root {
  /* Fond */
  --color-bg: #FAFAFA;           /* Fond principal */
  --color-bg-alt: #F5F5F0;       /* Fond alternatif (code, cards subtle) */
  --color-white: #FFFFFF;        /* Blanc pur (cards) */

  /* Texte */
  --color-text: #1A1A1A;         /* Texte principal */
  --color-text-muted: #666666;   /* Texte secondaire */
  --color-border: #000000;       /* Bordures (toujours noir) */

  /* Accent - À PERSONNALISER */
  --color-accent: #9B59FF;           /* Couleur d'accent principale */
  --color-accent-hover: #8347E6;     /* Accent au survol (10% plus sombre) */
  --color-accent-secondary: #0066FF; /* Couleur secondaire (liens, focus) */
}
```

#### Variations de couleur d'accent

| Projet | Accent | Accent hover | Secondary |
|--------|--------|--------------|-----------|
| Original (violet) | `#9B59FF` | `#8347E6` | `#0066FF` |
| Corail | `#FF6B6B` | `#E65A5A` | `#4ECDC4` |
| Vert menthe | `#00D9A5` | `#00C294` | `#7C4DFF` |
| Orange | `#FF9500` | `#E68600` | `#007AFF` |
| Rose | `#FF2D92` | `#E62983` | `#00C7BE` |

### Typographie

```css
:root {
  /* Familles */
  --font-heading: 'Space Grotesk', sans-serif;  /* Titres */
  --font-body: 'Inter', sans-serif;             /* Corps de texte */
  --font-mono: 'JetBrains Mono', monospace;     /* Code */

  /* Échelle de tailles */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}
```

#### Hiérarchie typographique

| Élément | Font | Taille | Weight |
|---------|------|--------|--------|
| H1 | Space Grotesk | 3rem (5xl) | 700 |
| H2 | Space Grotesk | 1.875rem (3xl) | 700 |
| H3 | Space Grotesk | 1.5rem (2xl) | 700 |
| H4 | Space Grotesk | 1.25rem (xl) | 700 |
| Body | Inter | 1rem (base) | 400 |
| Small | Inter | 0.875rem (sm) | 400 |
| Code | JetBrains Mono | 0.9em | 400 |

### Espacements

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Effets brutalistes

```css
:root {
  /* Ombres décalées */
  --shadow-brutal: 4px 4px 0 var(--color-border);
  --shadow-brutal-sm: 2px 2px 0 var(--color-border);
  --shadow-brutal-lg: 6px 6px 0 var(--color-border);  /* Pour hover */

  /* Bordures */
  --border-brutal: 2px solid var(--color-border);
  --border-brutal-thick: 3px solid var(--color-border);

  /* Rayons */
  --radius-sm: 2px;
  --radius-md: 4px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
}
```

### Conteneurs

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
}
```

---

## Composants

### Button

Trois variantes, trois tailles.

```css
/* Base */
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-heading);
  font-weight: 600;
  text-decoration: none;
  border: var(--border-brutal);
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

/* Interaction hover - effet lift */
.button:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-lg);
}

/* Interaction active - effet press */
.button:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}
```

#### Variantes

| Variante | Background | Usage |
|----------|------------|-------|
| `primary` | `--color-accent` | Action principale |
| `secondary` | `--color-white` | Action secondaire |
| `outline` | transparent | Action tertiaire, navigation |

#### Tailles

| Taille | Padding | Font size |
|--------|---------|-----------|
| `sm` | `--space-2` / `--space-4` | `--text-sm` |
| `md` | `--space-3` / `--space-6` | `--text-base` |
| `lg` | `--space-4` / `--space-8` | `--text-lg` |

### Card

Container avec effet d'ombre brutaliste.

```css
.card {
  background-color: var(--color-white);
  border: var(--border-brutal);
  box-shadow: var(--shadow-brutal);
}

/* Variante interactive - même effet que button */
.card.interactive:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-lg);
}
```

#### Variantes

| Variante | Background | Shadow | Usage |
|----------|------------|--------|-------|
| `default` | blanc | `--shadow-brutal` | Card standard |
| `highlight` | `--color-accent` | `--shadow-brutal` | Mise en avant |
| `subtle` | `--color-bg-alt` | `--shadow-brutal-sm` | Card discrète |

#### Zones

```css
.card-header  { padding: var(--space-4) var(--space-6); border-bottom: var(--border-brutal); }
.card-body    { padding: var(--space-6); }
.card-footer  { padding: var(--space-4) var(--space-6); border-top: var(--border-brutal); }
```

### Navigation Link

Lien avec soulignement animé.

```css
.navLink {
  font-family: var(--font-heading);
  font-weight: 500;
  text-decoration: none;
  color: var(--color-text);
  position: relative;
}

.navLink::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--color-accent);
  transition: width var(--transition-base);
}

.navLink:hover::after,
.navLink.active::after {
  width: 100%;
}
```

---

## Mode sombre

Pour implémenter un mode sombre, remplacer les variables de couleur :

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1A1A1A;
    --color-bg-alt: #2D2D2D;
    --color-text: #FAFAFA;
    --color-text-muted: #A0A0A0;
    --color-border: #FAFAFA;
    --color-white: #2D2D2D;

    /* L'accent peut rester identique ou être ajusté */
    --color-accent: #9B59FF;
    --color-accent-hover: #B07FFF;
  }
}
```

### Avec toggle manuel

```css
[data-theme="dark"] {
  --color-bg: #1A1A1A;
  --color-bg-alt: #2D2D2D;
  --color-text: #FAFAFA;
  --color-text-muted: #A0A0A0;
  --color-border: #FAFAFA;
  --color-white: #2D2D2D;
}
```

```js
// Toggle
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}
```

---

## Patterns d'interaction

### Effet Lift (survol)

```css
.interactive:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-border);
}
```

### Effet Press (clic)

```css
.interactive:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}
```

### Focus visible

```css
:focus-visible {
  outline: 2px solid var(--color-accent-secondary);
  outline-offset: 2px;
}
```

### Sélection de texte

```css
::selection {
  background-color: var(--color-accent);
  color: var(--color-text);
}
```

---

## Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## Responsive

### Breakpoints

| Nom | Valeur | Usage |
|-----|--------|-------|
| Mobile | `max-width: 768px` | Navigation empilée, tailles réduites |

### Adaptations mobiles

```css
@media (max-width: 768px) {
  html {
    font-size: 15px;  /* Base légèrement réduite */
  }

  h1 {
    font-size: var(--text-4xl);  /* 5xl → 4xl */
  }

  h2 {
    font-size: var(--text-2xl);  /* 3xl → 2xl */
  }

  .container {
    padding: 0 var(--space-4);  /* Padding réduit */
  }
}
```

---

## Checklist pour nouveau projet

1. **Copier `variables.css`** et ajuster les couleurs d'accent
2. **Copier `global.css`** pour le reset et les styles de base
3. **Importer les fonts** Google Fonts dans le HTML
4. **Réutiliser les composants** Button et Card
5. **Appliquer les patterns** d'interaction (lift, press)
6. **(Optionnel)** Ajouter le support du mode sombre
