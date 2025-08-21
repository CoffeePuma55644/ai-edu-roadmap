import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { 
  Brain, 
  Target, 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Star,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

export const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Personnalisée",
      description: "Algorithmes adaptatifs qui s'ajustent à votre style d'apprentissage"
    },
    {
      icon: Target,
      title: "Objectifs Ciblés",
      description: "Définissez vos objectifs et suivez vos progrès en temps réel"
    },
    {
      icon: Zap,
      title: "Apprentissage Rapide",
      description: "Méthodes optimisées pour accélérer votre progression"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Évaluez vos compétences",
      description: "Notre IA analyse votre niveau actuel et identifie vos forces et axes d'amélioration"
    },
    {
      number: "02", 
      title: "Recevez votre roadmap",
      description: "Un parcours personnalisé est généré avec des étapes claires et des ressources adaptées"
    },
    {
      number: "03",
      title: "Apprenez et progressez",
      description: "Suivez votre roadmap, complétez les modules et adaptez votre parcours en temps réel"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Développeuse Full-Stack",
      content: "Cette plateforme a révolutionné ma façon d'apprendre. L'IA comprend vraiment mes besoins.",
      rating: 5
    },
    {
      name: "Marc Dubois",
      role: "Data Scientist",
      content: "Les roadmaps personnalisées m'ont fait gagner des mois de formation. Incroyablement efficace.",
      rating: 5
    },
    {
      name: "Lisa Wong",
      role: "Product Manager",
      content: "Interface intuitive et contenu de qualité. Je recommande vivement !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Votre parcours d'apprentissage
              <span className="text-gradient block mt-2">
                personnalisé par l'IA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez une nouvelle façon d'apprendre avec des roadmaps adaptatifs,
              du contenu personnalisé et un suivi intelligent de vos progrès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-4 shadow-elegant hover:shadow-glow transition-smooth">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-glow/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{animationDelay: '4s'}} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir 
              <span className="text-gradient"> AI-Edu-Roadmap</span> ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme révolutionnaire qui s'adapte à vous
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trois étapes simples pour transformer votre apprentissage
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center mb-16 last:mb-0">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="text-6xl md:text-8xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground text-center md:text-left leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rejoignez des milliers d'apprenants qui ont transformé leur parcours
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-gradient-primary rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à transformer votre apprentissage ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez des milliers d'apprenants et découvrez votre potentiel avec l'IA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
              <div className="absolute top-12 right-8 w-6 h-6 border-2 border-white rounded-full" />
              <div className="absolute bottom-8 left-12 w-4 h-4 border-2 border-white rounded-full" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};