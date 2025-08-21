import React, { useState } from 'react';
import { Dashboard } from '@/components/Dashboard';
import { LearningInterfaceLiquidGlass } from '@/components/LearningInterfaceLiquidGlass';
import { HeaderLiquidGlass } from '@/components/layout/HeaderLiquidGlass';
import { Theme } from '@radix-ui/themes';

type DemoView = 'dashboard' | 'learning' | 'header';

export const LiquidGlassDemo = () => {
  const [currentView, setCurrentView] = useState<DemoView>('dashboard');

  const handleBack = () => {
    setCurrentView('dashboard');
  };

  const handleGoToLearning = () => {
    setCurrentView('learning');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'learning':
        return <LearningInterfaceLiquidGlass onBack={handleBack} />;
      case 'header':
        return (
          <div style={{ minHeight: '100vh' }}>
            <HeaderLiquidGlass showAuth={true} />
            <div className="liquid-glass-bg" style={{ padding: '24px' }}>
              <div className="liquid-glass-card" style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Header Liquid Glass Demo</h2>
                <p style={{ color: '#A0A0A0', marginBottom: '24px' }}>
                  Ceci est une démonstration du header avec le style Liquid Glass. 
                  Vous pouvez voir l'effet de verre translucide et les animations fluides.
                </p>
                <button 
                  className="liquid-button-primary"
                  onClick={() => setCurrentView('dashboard')}
                >
                  Retour au Dashboard
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div style={{ minHeight: '100vh' }}>
            <HeaderLiquidGlass showAuth={true} />
            <Dashboard onBack={handleBack} />
            
            {/* Demo Navigation */}
            <div style={{
              position: 'fixed',
              bottom: '24px',
              left: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 1000
            }}>
              <button
                onClick={handleGoToLearning}
                className="liquid-button-secondary"
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '14px'
                }}
              >
                Voir Learning Interface
              </button>
              <button
                onClick={() => setCurrentView('header')}
                className="liquid-button-ghost"
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '14px'
                }}
              >
                Demo Header
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <Theme appearance="dark" accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">
      {renderCurrentView()}
    </Theme>
  );
};

export default LiquidGlassDemo;
