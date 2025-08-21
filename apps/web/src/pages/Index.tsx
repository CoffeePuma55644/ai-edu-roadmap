import { useAuth } from "@repo/auth";
import { LandingPage } from "@repo/ui/landing-page";
import { Header } from "@repo/ui/header";

const Index = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Header />
        <LandingPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenue sur votre plateforme d'apprentissage IA
        </h1>
        <p className="text-center text-muted-foreground">
          Vous êtes connecté ! Votre parcours d'apprentissage personnalisé vous attend.
        </p>
      </main>
    </div>
  );
};

export default Index;