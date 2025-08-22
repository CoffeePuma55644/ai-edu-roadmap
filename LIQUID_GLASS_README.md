# Design System: Liquid Glass iOS 26

Ce document explique comment utiliser le système de composants "Liquid Glass" implémenté dans ce projet.

## 1. Principe de Base

Le design system est basé sur un composant principal, `GlassPanel`, qui fournit l'effet visuel de verre dépoli et translucide. Tous les autres composants de ce système (`GlassCard`, `GlassButton`, etc.) sont des spécialisations de ce `GlassPanel`.

L'effet est contrôlé via des props sur les composants React.

## 2. Installation

Pour que les styles fonctionnent, assurez-vous que les fichiers suivants sont correctement importés dans votre application, idéalement dans le point d'entrée principal (`src/main.tsx` ou `src/App.tsx`):

1.  **CSS Core** : Contient tous les styles pour l'effet de verre.
    ```javascript
    import '@/styles/liquid-glass.css';
    ```

2.  **Filtres SVG** : Nécessaire pour la variante `lens`. Le composant `SvgInjector` est utilisé pour charger dynamiquement les filtres SVG dans le DOM.
    ```javascript
    import SvgInjector from '@/components/ui/SvgInjector';

    // Dans votre composant App
    <SvgInjector svgUrl="/src/styles/glass.svg" />
    ```

## 3. Composants Disponibles

Voici la liste des composants que vous pouvez utiliser :

-   `<GlassPanel>`: Le conteneur de base.
-   `<GlassCard>`: Pour afficher du contenu en modules. Inclut des sous-composants `GlassCardHeader`, `GlassCardTitle`, `GlassCardContent`, etc.
-   `<GlassButton>`: Bouton interactif avec variantes `primary`, `secondary`, `ghost`.
-   `<GlassInput>`: Champ de saisie.
-   `<GlassToolbar>`: Barre de navigation supérieure.
-   `<GlassSheet>`: Panneau latéral ou modale, basé sur Radix UI Dialog pour l'accessibilité.

## 4. Comment Utiliser les Composants

### Exemple avec une Carte

```tsx
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from '@/components/ui/GlassCard';

function MyComponent() {
  return (
    <GlassCard variant="lens" blur={20}>
      <GlassCardHeader>
        <GlassCardTitle>Titre de la Carte</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent>
        <p>Contenu de la carte avec un effet de verre et de réfraction.</p>
      </GlassCardContent>
    </GlassCard>
  );
}
```

### Props de Configuration

Tous les composants "Glass" acceptent les props suivantes pour personnaliser l'effet :

-   `variant`: `"lite" | "lens" | "pro"`
    -   `lite`: (Défaut) Effet de base utilisant `backdrop-filter`. Très performant.
    -   `lens`: Ajoute un effet de réfraction locale via un filtre SVG. Plus gourmand.
    -   `pro`: Placeholder pour une future implémentation WebGL. Agit comme `lens` pour le moment.
-   `blur`: `number` (défaut: `22`). L'intensité du flou en pixels.
-   `saturation`: `number` (défaut: `1.32`). Le niveau de saturation des couleurs derrière le verre.
-   `contrast`: `number` (défaut: `1.1`). Le contraste des couleurs.
-   `opacity`: `number`. L'opacité de la surface du verre (de `0` à `1`).
-   `highlightAmount`: `number` (défaut: `1`). L'intensité des reflets dynamiques (de `0` à `1`).
-   `refractionScale`: `number` (défaut: `18`). Uniquement pour la variante `lens`. Contrôle l'intensité de la distorsion.

## 5. Personnalisation

### Arrière-plan

L'effet "Liquid Glass" est plus impressionnant sur un fond coloré ou une image. Pour définir un fond global, vous pouvez l'appliquer au `body` ou à un conteneur principal dans votre CSS ou directement sur un élément, comme dans la page de démo :

```tsx
<div 
  className="bg-cover bg-fixed bg-center"
  style={{ backgroundImage: "url('/assets/wallpaper/demo-wallpaper.jpg')" }}
>
  {/* ... vos composants ... */}
</div>
```

### Tailwind

Les arrondis des composants sont définis dans `tailwind.config.ts` et peuvent y être modifiés :

-   `rounded-glass-card`: 24px
-   `rounded-glass-button`: 16px

## 6. Accessibilité

Le système respecte les préférences utilisateur :

-   `@media (prefers-reduced-transparency: reduce)`: La transparence est désactivée et remplacée par un fond opaque avec un léger grain.
-   `@media (prefers-reduced-motion: reduce)`: Les animations de reflets sont désactivées.