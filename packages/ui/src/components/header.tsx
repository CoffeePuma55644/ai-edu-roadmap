import { Button } from "./button";
import { ThemeToggle } from "../theme/theme-toggle";
import { useAuth } from "@repo/auth";
import { LogOut, User, BookOpen } from "lucide-react";

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">
              AI-Edu-Roadmap
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {!user && (
            <>
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Fonctionnalités
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                Comment ça marche
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                Témoignages
              </a>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{user.email}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => signOut()}
                className="text-sm"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Déconnexion</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="/auth">Connexion</a>
              </Button>
              <Button size="sm" asChild>
                <a href="/auth">S'inscrire</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};