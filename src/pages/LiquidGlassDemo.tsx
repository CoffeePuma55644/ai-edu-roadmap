import React from 'react';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent, GlassCardFooter } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { GlassInput } from '@/components/ui/GlassInput';
import { GlassToolbar } from '@/components/ui/GlassToolbar';
import { 
  GlassSheet, 
  GlassSheetTrigger, 
  GlassSheetContent, 
  GlassSheetHeader, 
  GlassSheetTitle, 
  GlassSheetDescription 
} from '@/components/ui/GlassSheet';
import { Home, Menu, Search } from 'lucide-react';

const LiquidGlassDemo: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-fixed bg-center text-white p-4 md:p-8"
      style={{ backgroundImage: "url('/assets/wallpaper/demo-wallpaper.jpg')" }}
    >
      {/* Add the SVG filters to the DOM */}
      <div dangerouslySetInnerHTML={{ __html: `<svg width='0' height='0' style='position:absolute'><filter id='liquidRefraction'><feImage xlink:href='/assets/normal/liquid-soft.png' result='map'/><feGaussianBlur in='SourceGraphic' stdDeviation='0.5' result='src'/><feDisplacementMap in='src' in2='map' scale='18' xChannelSelector='R' yChannelSelector='G'/></filter></svg>` }} />

      <GlassToolbar>
        <div className="flex items-center">
          <Home className="mr-2" />
          <h1 className="text-xl font-bold">Liquid Glass</h1>
        </div>
        <div className="flex items-center space-x-4">
          <GlassButton variant="ghost" size="icon"><Menu /></GlassButton>
        </div>
      </GlassToolbar>

      <main className="mt-24 flex flex-col items-center">
        <GlassCard 
          variant="lens" 
          className="w-full max-w-4xl mb-8"
          style={{'--glass-opacity-dark': 0.25, '--glass-opacity-light': 0.3}}
        >
          <GlassCardHeader>
            <GlassCardTitle>Bienvenue dans le futur du Design</GlassCardTitle>
            <p className="text-violet-200">Démonstration du Design System "Liquid Glass iOS 26"</p>
          </GlassCardHeader>
          <GlassCardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Composants Interactifs</h4>
              <GlassInput icon={<Search size={16} />} placeholder="Rechercher..." />
              <div className="flex space-x-2">
                <GlassButton variant="primary">Action Primaire</GlassButton>
                <GlassButton variant="secondary">Secondaire</GlassButton>
              </div>
              <GlassSheet>
                <GlassSheetTrigger asChild>
                  <GlassButton variant="primary">Ouvrir le panneau latéral</GlassButton>
                </GlassSheetTrigger>
                <GlassSheetContent side="right">
                  <GlassSheetHeader>
                    <GlassSheetTitle>Panneau Latéral</GlassSheetTitle>
                    <GlassSheetDescription>
                      Ce panneau utilise aussi l'effet Liquid Glass.
                    </GlassSheetDescription>
                  </GlassSheetHeader>
                </GlassSheetContent>
              </GlassSheet>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Variantes Visuelles</h4>
              <GlassPanel variant="lite" className="p-4 mb-4 rounded-glass-card">
                <p>Variante <span className='font-bold'>Lite</span> (CSS Backdrop Filter)</p>
              </GlassPanel>
              <GlassPanel variant="lens" className="p-4 rounded-glass-card">
                <p>Variante <span className='font-bold'>Lens</span> (SVG Refraction)</p>
                 <p className="text-xs text-violet-300">Assurez-vous que le fond est visible pour voir l'effet.</p>
              </GlassPanel>
            </div>
          </GlassCardContent>
        </GlassCard>
      </main>
    </div>
  );
};

export default LiquidGlassDemo;