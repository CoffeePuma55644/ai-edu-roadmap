import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookOpen, Trophy, Heart, Star } from "lucide-react";

interface LearningInterfaceProps {
  onBack: () => void;
}

export const LearningInterface = ({ onBack }: LearningInterfaceProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hearts, setHearts] = useState(5);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const currentContent = {
    title: "Les Variables en Python",
    content: `En Python, une variable est un conteneur qui stocke des données. 
              
Voici comment créer une variable :

\`\`\`python
nom = "Alice"
age = 25
prix = 19.99
\`\`\`

Les variables peuvent contenir différents types de données :
- **Texte** (string) : "Bonjour"
- **Nombres entiers** (int) : 42
- **Nombres décimaux** (float) : 3.14
- **Booléens** (bool) : True ou False`,
    
    quiz: {
      question: "Quel est le type de la variable suivante : age = 25",
      options: ["string", "int", "float", "bool"],
      correct: 1
    }
  };

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === currentContent.quiz.correct) {
      setXp(prev => prev + 10);
      setStreak(prev => prev + 1);
    } else {
      setHearts(prev => Math.max(0, prev - 1));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      setShowQuiz(false);
      setSelectedAnswer(null);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setShowQuiz(false);
      setSelectedAnswer(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-background">
      {/* Header with progress */}
      <div className="bg-card/90 backdrop-blur-sm shadow-learning sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quitter
            </Button>
            
            <div className="flex items-center gap-4">
              {/* Hearts */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className={`w-5 h-5 ${i < hearts ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              {/* Streak */}
              <div className="flex items-center gap-1 bg-gradient-motivation text-white px-3 py-1 rounded-full text-sm">
                <Star className="w-4 h-4" />
                {streak}
              </div>
              
              {/* XP */}
              <div className="bg-gradient-success text-white px-3 py-1 rounded-full text-sm font-medium">
                {xp} XP
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Étape {currentStep} sur {totalSteps}</span>
              <span>{Math.round(progressPercentage)}% terminé</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {!showQuiz ? (
          /* Learning Content */
          <Card className="border-none shadow-learning bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">{currentContent.title}</CardTitle>
                  <Badge variant="outline" className="mt-1">Leçon théorique</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="whitespace-pre-line text-foreground leading-relaxed">
                {currentContent.content}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Quiz Content */
          <Card className="border-none shadow-learning bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-motivation rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Quiz de compréhension</CardTitle>
                  <Badge variant="outline" className="mt-1">Question</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-lg font-medium">{currentContent.quiz.question}</h3>
              
              <div className="grid gap-3">
                {currentContent.quiz.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedAnswer === null 
                        ? "outline" 
                        : selectedAnswer === index
                          ? index === currentContent.quiz.correct 
                            ? "success" 
                            : "destructive"
                          : index === currentContent.quiz.correct
                            ? "success"
                            : "outline"
                    }
                    className="justify-start text-left h-auto py-4 px-6"
                    onClick={() => handleQuizAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))}
              </div>
              
              {selectedAnswer !== null && (
                <div className="text-center">
                  {selectedAnswer === currentContent.quiz.correct ? (
                    <div className="text-secondary font-medium">
                      ✓ Correct ! +10 XP
                    </div>
                  ) : (
                    <div className="text-destructive font-medium">
                      ✗ Incorrect. La bonne réponse était : {currentContent.quiz.options[currentContent.quiz.correct]}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Précédent
          </Button>
          
          {!showQuiz ? (
            <Button 
              variant="learning" 
              onClick={() => setShowQuiz(true)}
            >
              Passer au quiz
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              variant="learning" 
              onClick={nextStep}
              disabled={selectedAnswer === null || currentStep === totalSteps}
            >
              {currentStep === totalSteps ? "Terminer" : "Continuer"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};