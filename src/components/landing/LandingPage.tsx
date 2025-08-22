import { ArrowRight, BookOpen, Brain, Target, Star, CheckCircle, Users, Clock, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input'; // Import Input

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  // For now, we'll keep the other sections, but the focus is the hero.
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

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center space-y-8">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            What do you want to learn?
          </h1>
          
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with AI-driven learning paths tailored just for you. 
            Start your journey now.
          </p>
          
          <div className="w-full max-w-xl">
            <Input 
              type="search"
              placeholder="Search for a subject, like 'Quantum Physics' or 'React'..." 
              className="h-14 text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
              <Button onClick={onGetStarted} size="lg" variant="default">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="glass" size="lg">
                Popular Topic
              </Button>
              <Button variant="glass" size="lg">
                New Skill
              </Button>
              <Button variant="glass" size="lg">
                Career Path
              </Button>
            </div>
        </div>
      </section>

      {/* Features Section (will now use the glass cards automatically) */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose AI-Edu-Roadmap?
            </h2>
            <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
              A revolutionary approach to learning that adapts to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-neutral-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};