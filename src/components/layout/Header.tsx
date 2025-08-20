import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { BookOpen, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onAuthClick?: () => void;
  showAuth?: boolean;
}

export const Header = ({ onAuthClick, showAuth = true }: HeaderProps) => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-learning">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="space-y-0">
            <h1 className="text-xl font-bold tracking-tight">
              AI-Edu-Roadmap
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Apprentissage intelligent
            </p>
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-sm">
                <p className="font-medium">{user.email}</p>
              </div>
              <Button
                variant="outline"
                onClick={signOut}
                className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Se déconnecter</span>
              </Button>
            </div>
          ) : (
            showAuth && onAuthClick && (
              <Button
                onClick={onAuthClick}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
              >
                Se connecter
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
};