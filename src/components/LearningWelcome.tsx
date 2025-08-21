import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Target, Clock } from "lucide-react";

interface LearningWelcomeProps {
  onStartLearning: () => void;
}

export const LearningWelcome = ({ onStartLearning }: LearningWelcomeProps) => {
  return (
    <main className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full shadow-learning animate-float">
            <Brain className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Apprenez avec l'IA
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Créez votre parcours d'apprentissage personnalisé en quelques minutes. 
              L'IA s'adapte à votre rythme et vos objectifs.
            </p>
          </div>

          <Button 
            variant="learning" 
            size="lg" 
            onClick={onStartLearning}
            className="text-lg px-8 py-6 h-auto font-semibold animate-pulse-glow"
          >
            <BookOpen className="w-6 h-6 mr-2" />
            Je voudrais apprendre...
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="border-none shadow-learning bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Personnalisé</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Adaptez votre apprentissage selon votre niveau, vos objectifs et votre temps disponible
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-none shadow-success bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-lg">IA Intelligente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Notre IA génère une roadmap complète et des cours adaptés à votre profil d'apprentissage
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-none shadow-learning bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-motivation rounded-lg flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg">Progressif</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Avancez étape par étape avec des quiz et exercices adaptés à votre progression
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};