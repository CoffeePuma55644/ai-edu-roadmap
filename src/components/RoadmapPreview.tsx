import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, BookOpen, Play, Edit3 } from "lucide-react";

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  estimatedTime: string;
  skills: string[];
  type: "theory" | "practice" | "quiz";
}

interface RoadmapPreviewProps {
  onBack: () => void;
  onConfirm: () => void;
  onEdit: () => void;
  learningData: any;
}

export const RoadmapPreview = ({ onBack, onConfirm, onEdit, learningData }: RoadmapPreviewProps) => {
  // Mock roadmap data - in real app, this would come from AI generation
  const [roadmapSteps] = useState<RoadmapStep[]>([
    {
      id: 1,
      title: "Introduction et concepts de base",
      description: "Découverte des fondamentaux et de l'environnement de travail",
      estimatedTime: "2h",
      skills: ["Syntaxe de base", "Variables", "Types de données"],
      type: "theory"
    },
    {
      id: 2,
      title: "Premier projet pratique",
      description: "Création d'un petit programme pour appliquer les bases",
      estimatedTime: "3h",
      skills: ["Logique de programmation", "Debugging", "Bonnes pratiques"],
      type: "practice"
    },
    {
      id: 3,
      title: "Évaluation des acquis",
      description: "Quiz interactif pour valider votre compréhension",
      estimatedTime: "30min",
      skills: ["Auto-évaluation", "Révision"],
      type: "quiz"
    },
    {
      id: 4,
      title: "Structures de données",
      description: "Listes, dictionnaires et manipulation de données",
      estimatedTime: "4h",
      skills: ["Listes", "Dictionnaires", "Boucles"],
      type: "theory"
    },
    {
      id: 5,
      title: "Projet intermédiaire",
      description: "Application des structures de données dans un projet réel",
      estimatedTime: "5h",
      skills: ["Projet complet", "Architecture", "Tests"],
      type: "practice"
    }
  ]);

  const totalTime = roadmapSteps.reduce((acc, step) => {
    const time = parseInt(step.estimatedTime);
    return acc + (isNaN(time) ? 0 : time);
  }, 0);

  const getStepIcon = (type: string) => {
    switch (type) {
      case "theory": return <BookOpen className="w-4 h-4" />;
      case "practice": return <Play className="w-4 h-4" />;
      case "quiz": return <CheckCircle className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case "theory": return "bg-gradient-primary";
      case "practice": return "bg-gradient-success";
      case "quiz": return "bg-gradient-motivation";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Votre roadmap personnalisée
            </h1>
            <p className="text-muted-foreground">
              Parcours d'apprentissage pour : <span className="font-semibold">{learningData.subject}</span>
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <Card className="border-none shadow-learning bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Résumé de votre parcours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{roadmapSteps.length}</div>
                <div className="text-sm text-muted-foreground">Étapes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{totalTime}h</div>
                <div className="text-sm text-muted-foreground">Durée totale</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{learningData.level}</div>
                <div className="text-sm text-muted-foreground">Niveau</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{learningData.timeCommitment}</div>
                <div className="text-sm text-muted-foreground">Par semaine</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Étapes du parcours</h2>
          
          {roadmapSteps.map((step, index) => (
            <Card key={step.id} className="border-none shadow-learning bg-white/90 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 ${getStepColor(step.type)} rounded-full flex items-center justify-center text-white font-bold shadow-learning`}>
                      {step.id}
                    </div>
                    {index < roadmapSteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-border"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {step.estimatedTime}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{step.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${getStepColor(step.type)} rounded flex items-center justify-center`}>
                        {getStepIcon(step.type)}
                      </div>
                      <span className="text-sm text-muted-foreground capitalize">
                        {step.type === "theory" ? "Théorie" : step.type === "practice" ? "Pratique" : "Quiz"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <Button 
            variant="outline" 
            onClick={onEdit}
            className="flex-1"
          >
            <Edit3 className="w-4 h-4 mr-2" />
            Modifier la roadmap
          </Button>
          <Button 
            variant="learning" 
            onClick={onConfirm}
            className="flex-1 text-lg py-6 h-auto"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Commencer l'apprentissage
          </Button>
        </div>
      </div>
    </main>
  );
};