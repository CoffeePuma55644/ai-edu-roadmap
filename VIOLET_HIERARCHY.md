# 🎨 Hiérarchie des Couleurs Violet - Guide de Design

## 📋 Vue d'ensemble

Cette interface utilise **uniquement les nuances de violet** pour créer une hiérarchie visuelle cohérente et élégante. Chaque couleur a un rôle spécifique dans l'interface.

## 🎯 Hiérarchie des Couleurs

### 🌟 **Violet-1 à Violet-4** - Arrière-plans et Surfaces

- **Violet-1** : Arrière-plan principal (le plus subtil)
- **Violet-2** : Cartes et conteneurs
- **Violet-3** : Champs de saisie et surfaces interactives
- **Violet-4** : Éléments d'accent légers

### 🔗 **Violet-5 à Violet-8** - Éléments Intermédiaires

- **Violet-5** : États de survol subtils
- **Violet-6** : Bordures principales
- **Violet-7** : Focus rings et états actifs
- **Violet-8** : Boutons secondaires

### ⚡ **Violet-9 à Violet-10** - Actions Primaires

- **Violet-9** : Boutons principaux, liens actifs (couleur signature)
- **Violet-10** : États de survol des actions primaires

### 📝 **Violet-11 à Violet-12** - Texte

- **Violet-11** : Texte secondaire, descriptions
- **Violet-12** : Texte principal (contraste maximum)

### 🌫️ **Couleurs Alpha (Violet-a1 à Violet-a12)**

- Utilisées pour les superpositions, ombres et effets de transparence
- Créent des transitions fluides et des effets de profondeur

## 🎨 Mapping des Éléments d'Interface

### 📱 **Arrière-plans**

```css
--background: var(--violet-1); /* Page principale */
--card: var(--violet-2); /* Cartes */
--muted: var(--violet-2); /* Zones discrètes */
```

### 🎯 **Actions et Interactions**

```css
--primary: var(--violet-9); /* Boutons principaux */
--secondary: var(--violet-3); /* Boutons secondaires */
--accent: var(--violet-4); /* Éléments mis en valeur */
```

### 📝 **Texte et Contenu**

```css
--foreground: var(--violet-12); /* Texte principal */
--muted-foreground: var(--violet-11); /* Texte secondaire */
```

### 🔲 **Bordures et Délimitations**

```css
--border: var(--violet-6); /* Bordures générales */
--ring: var(--violet-7); /* Focus states */
```

## 🌙 **Adaptations Mode Sombre**

En mode sombre, la hiérarchie reste la même mais les nuances s'adaptent :

- Les arrière-plans deviennent plus sombres (violet-1 = #110e1f)
- Les textes deviennent plus clairs (violet-12 = #e0dcff)
- Les éléments interactifs gardent leur intensité

## ✨ **Avantages de cette Approche**

### 🎯 **Cohérence Visuelle**

- Toute l'interface utilise la même palette
- Transitions naturelles entre les éléments
- Harmonie colorimétrique parfaite

### 🎭 **Hiérarchie Claire**

- 12 niveaux de priorité visuelle
- Progression logique du plus subtil au plus intense
- Facilite la lecture et la navigation

### ♿ **Accessibilité**

- Contrastes optimisés selon les standards WCAG
- Violet-12/Violet-1 offrent le contraste maximum
- Progressions naturelles pour tous les utilisateurs

### 🔄 **Flexibilité**

- Facile d'ajuster l'intensité d'un élément
- Possibilité d'utiliser les variantes alpha pour des effets subtils
- Système évolutif et maintenable

## 📚 **Exemples d'Usage**

### 🏠 **Page d'Accueil**

- Arrière-plan : `violet-1`
- Cartes de contenu : `violet-2`
- Boutons CTA : `violet-9`
- Texte principal : `violet-12`

### 📋 **Formulaires**

- Champs de saisie : `violet-3`
- Labels : `violet-11`
- Bouton de validation : `violet-9`
- Messages d'aide : `violet-11`

### 🎛️ **Navigation**

- Arrière-plan sidebar : `violet-2`
- Liens inactifs : `violet-11`
- Lien actif : `violet-9`
- Séparateurs : `violet-6`

## 🎨 **Code d'Exemple**

```css
/* Carte avec hiérarchie violet */
.violet-card {
  background: var(--violet-2);
  border: 1px solid var(--violet-6);
  border-radius: var(--radius);
}

.violet-card h2 {
  color: var(--violet-12);
}

.violet-card p {
  color: var(--violet-11);
}

.violet-card .primary-btn {
  background: var(--violet-9);
  color: var(--violet-contrast);
}

.violet-card .secondary-btn {
  background: var(--violet-3);
  color: var(--violet-11);
}
```

Cette hiérarchie garantit une interface élégante, cohérente et accessible ! 🚀
