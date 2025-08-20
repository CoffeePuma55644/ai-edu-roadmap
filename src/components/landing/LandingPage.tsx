import { ArrowRight, BookOpen, Brain, Target, Star, CheckCircle, Users, Clock, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const features = [
    {
      icon: Brain,
      title: "IA Personnalisée",
      description: "Notre intelligence artificielle analyse votre niveau et crée un parcours sur mesure"
    },
    {
      icon: Target,
      title: "Objectifs Clairs",
      description: "Définissez vos objectifs et suivez vos progrès avec des métriques précises"
    },
    {
      icon: Clock,
      title: "Flexibilité Totale",
      description: "Apprenez à votre rythme, quand vous voulez, où vous voulez"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Évaluez votre niveau",
      description: "Répondez à quelques questions pour que notre IA comprenne vos besoins et objectifs"
    },
    {
      step: "02", 
      title: "Recevez votre roadmap",
      description: "Obtenez un plan d'apprentissage personnalisé avec des étapes progressives"
    },
    {
      step: "03",
      title: "Apprenez et progressez",
      description: "Suivez votre parcours, déverrouillez du contenu et atteignez vos objectifs"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Frontend",
      content: "Grâce à AI-Edu-Roadmap, j'ai pu maîtriser React en 3 mois. Le parcours personnalisé m'a fait gagner un temps énorme !",
      rating: 5
    },
    {
      name: "Thomas Martin",
      role: "Data Scientist",
      content: "L'approche personnalisée m'a permis de me concentrer sur ce qui compte vraiment pour ma carrière. Excellent !",
      rating: 5
    },
    {
      name: "Sophie Leroy",
      role: "Product Manager",
      content: "Interface intuitive et contenu de qualité. J'ai enfin trouvé une plateforme qui s'adapte à mon emploi du temps.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Plateforme d'apprentissage intelligente
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Votre <span className="bg-gradient-primary bg-clip-text text-transparent">parcours d'apprentissage</span><br />
              personnalisé par l'IA
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformez votre façon d'apprendre avec des roadmaps personnalisées, 
              des objectifs clairs et un suivi intelligent de vos progrès.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onGetStarted}
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-learning text-lg px-8 py-6"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:bg-accent/50 text-lg px-8 py-6"
              >
                Voir la démo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>Gratuit pour commencer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>Pas de carte bancaire</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>Accès immédiat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pourquoi choisir AI-Edu-Roadmap ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une approche révolutionnaire de l'apprentissage qui s'adapte à vous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-learning transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comment ça fonctionne ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trois étapes simples pour transformer votre apprentissage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-6 shadow-learning">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez des milliers d'apprenants qui ont transformé leur carrière
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-learning transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-border/50 bg-gradient-primary/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Prêt à transformer votre apprentissage ?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Rejoignez la révolution de l'apprentissage personnalisé et atteignez vos objectifs plus rapidement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onGetStarted}
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-learning text-lg px-8 py-6"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Commencer maintenant
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>+10,000 utilisateurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  <span>4.9/5 étoiles</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};