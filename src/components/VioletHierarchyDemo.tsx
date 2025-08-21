import React from 'react';

/**
 * Composant de démonstration de la hiérarchie violet
 * Montre comment utiliser les 12 nuances de violet de manière cohérente
 */
const VioletHierarchyDemo = () => {
  return (
    <div className="min-h-screen bg-violet-1 p-8">
      {/* Header avec titre principal */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-violet-12 mb-2">
          Hiérarchie des Couleurs Violet
        </h1>
        <p className="text-violet-11 text-lg">
          Démonstration de l'utilisation des 12 nuances de violet dans l'interface
        </p>
      </header>

      {/* Grille de démonstration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {/* Carte 1: Arrière-plans */}
        <div className="bg-violet-2 border border-violet-6 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-violet-12 mb-4">
            Arrière-plans et Surfaces
          </h2>
          <div className="space-y-3">
            <div className="bg-violet-1 p-3 rounded border border-violet-4">
              <span className="text-violet-11 text-sm">Violet-1: Arrière-plan principal</span>
            </div>
            <div className="bg-violet-2 p-3 rounded border border-violet-4">
              <span className="text-violet-11 text-sm">Violet-2: Cartes et conteneurs</span>
            </div>
            <div className="bg-violet-3 p-3 rounded border border-violet-4">
              <span className="text-violet-11 text-sm">Violet-3: Surfaces interactives</span>
            </div>
          </div>
        </div>

        {/* Carte 2: Boutons et Actions */}
        <div className="bg-violet-2 border border-violet-6 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-violet-12 mb-4">
            Boutons et Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full bg-violet-9 text-violet-contrast py-2 px-4 rounded hover:bg-violet-10 transition-colors">
              Bouton Principal (Violet-9)
            </button>
            <button className="w-full bg-violet-3 text-violet-11 py-2 px-4 rounded hover:bg-violet-4 transition-colors">
              Bouton Secondaire (Violet-3)
            </button>
            <button className="w-full bg-violet-a2 text-violet-11 py-2 px-4 rounded border border-violet-6 hover:bg-violet-a3 transition-colors">
              Bouton Ghost (Violet-a2)
            </button>
          </div>
        </div>

        {/* Carte 3: Texte et Hiérarchie */}
        <div className="bg-violet-2 border border-violet-6 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-violet-12 mb-4">
            Hiérarchie du Texte
          </h2>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-violet-12">
              Titre Principal (Violet-12)
            </h3>
            <p className="text-violet-11">
              Texte secondaire et descriptions en Violet-11 pour une lisibilité optimale.
            </p>
            <p className="text-violet-9 font-medium">
              Liens et éléments actifs en Violet-9
            </p>
            <p className="text-sm text-violet-10">
              Métadonnées et informations subtiles en Violet-10
            </p>
          </div>
        </div>

        {/* Carte 4: Formulaires */}
        <div className="bg-violet-2 border border-violet-6 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-violet-12 mb-4">
            Éléments de Formulaire
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-violet-11 mb-2">
                Nom d'utilisateur
              </label>
              <input 
                type="text" 
                placeholder="Entrez votre nom"
                className="w-full bg-violet-3 border border-violet-6 text-violet-12 placeholder-violet-10 px-3 py-2 rounded focus:border-violet-7 focus:ring-2 focus:ring-violet-a4 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-violet-11 mb-2">
                Email
              </label>
              <input 
                type="email" 
                placeholder="votre@email.com"
                className="w-full bg-violet-3 border border-violet-6 text-violet-12 placeholder-violet-10 px-3 py-2 rounded focus:border-violet-7 focus:ring-2 focus:ring-violet-a4 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Carte 5: États et Notifications */}
        <div className="bg-violet-2 border border-violet-6 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-violet-12 mb-4">
            États et Notifications
          </h2>
          <div className="space-y-3">
            <div className="bg-violet-a2 border border-violet-a4 p-3 rounded">
              <span className="text-violet-11 text-sm">Information (Violet-a2)</span>
            </div>
            <div className="bg-violet-a3 border border-violet-a5 p-3 rounded">
              <span className="text-violet-11 text-sm">Attention (Violet-a3)</span>
            </div>
            <div className="bg-violet-4 border border-violet-6 p-3 rounded">
              <span className="text-violet-12 text-sm">Succès (Violet-4)</span>
            </div>
          </div>
        </div>

        {/* Carte 6: Progression et Indicateurs */}
        <div className="bg-violet-2 border border-violet-6 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-violet-12 mb-4">
            Progression et Indicateurs
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-violet-11 mb-2">
                <span>Progression</span>
                <span>75%</span>
              </div>
              <div className="bg-violet-4 rounded-full h-2">
                <div 
                  className="bg-violet-9 h-2 rounded-full transition-all duration-300"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-violet-9 rounded-full"></div>
              <span className="text-violet-11 text-sm">Indicateur actif</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-violet-6 rounded-full"></div>
              <span className="text-violet-11 text-sm">Indicateur inactif</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer avec palette */}
      <footer className="mt-12 p-6 bg-violet-2 border border-violet-6 rounded-lg">
        <h3 className="text-lg font-semibold text-violet-12 mb-4">
          Palette Complète Violet
        </h3>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <div key={num} className="text-center">
              <div 
                className={`bg-violet-${num} w-12 h-12 rounded border border-violet-6 mb-1`}
                title={`Violet-${num}`}
              ></div>
              <span className="text-xs text-violet-11">{num}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default VioletHierarchyDemo;
