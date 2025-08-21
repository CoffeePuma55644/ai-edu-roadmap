import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Clock, Target, Brain } from "lucide-react";

interface LearningData {
  subject: string;
  level: string;
  timeCommitment: string;
  goals: string;
  preferredStyle: string;
  additionalInfo: string;
}

interface LearningSetupProps {
  onBack: () => void;
  onSubmit: (data: LearningData) => void;
}

export const LearningSetup = ({ onBack, onSubmit }: LearningSetupProps) => {
  const [formData, setFormData] = useState<LearningData>({
    subject: "",
    level: "",
    timeCommitment: "",
    goals: "",
    preferredStyle: "",
    additionalInfo: ""
  });

  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const predefinedGoals = [
    "Maîtriser les bases",
    "Approfondir mes connaissances",
    "Préparation d'examen",
    "Application pratique",
    "Changement de carrière",
    "Passion personnelle"
  ];

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      goals: selectedGoals.join(", ") + (formData.goals ? `, ${formData.goals}` : "")
    };
    onSubmit(finalData);
  };

  const isFormValid = formData.subject && formData.level && formData.timeCommitment && formData.preferredStyle;

  return (
    <main className="min-h-screen bg-gradient-background p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="hover:bg-muted/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Personnalisez votre apprentissage
            </h1>
            <p className="text-muted-foreground">
              Aidez-nous à créer le parcours parfait pour vous
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject Card */}
          <Card className="border-none shadow-learning bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
                Que voulez-vous apprendre ?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="subject">Sujet d'apprentissage</Label>
                <Input
                  id="subject"
                  placeholder="Ex: Python, Marketing Digital, Photoshop..."
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="level">Niveau actuel</Label>
                <Select value={formData.level} onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Sélectionnez votre niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Débutant complet</SelectItem>
                    <SelectItem value="some-knowledge">Quelques notions</SelectItem>
                    <SelectItem value="intermediate">Intermédiaire</SelectItem>
                    <SelectItem value="advanced">Avancé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Time & Style Card */}
          <Card className="border-none shadow-learning bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-secondary-foreground" />
                </div>
                Organisation de l'apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="time">Temps disponible par semaine</Label>
                <Select value={formData.timeCommitment} onValueChange={(value) => setFormData(prev => ({ ...prev, timeCommitment: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Combien de temps pouvez-vous consacrer ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2h">1-2 heures</SelectItem>
                    <SelectItem value="3-5h">3-5 heures</SelectItem>
                    <SelectItem value="6-10h">6-10 heures</SelectItem>
                    <SelectItem value="10h+">Plus de 10 heures</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="style">Style d'apprentissage préféré</Label>
                <Select value={formData.preferredStyle} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredStyle: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Comment préférez-vous apprendre ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visuel (images, diagrammes)</SelectItem>
                    <SelectItem value="practical">Pratique (exercices, projets)</SelectItem>
                    <SelectItem value="theoretical">Théorique (lectures, concepts)</SelectItem>
                    <SelectItem value="mixed">Mixte (un peu de tout)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Goals Card */}
          <Card className="border-none shadow-learning bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-motivation rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-accent-foreground" />
                </div>
                Vos objectifs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Objectifs principaux (sélectionnez-en plusieurs)</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {predefinedGoals.map((goal) => (
                    <Badge
                      key={goal}
                      variant={selectedGoals.includes(goal) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedGoals.includes(goal) 
                          ? "bg-gradient-primary border-primary shadow-learning" 
                          : "hover:bg-primary/10"
                      }`}
                      onClick={() => handleGoalToggle(goal)}
                    >
                      {goal}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="goals">Objectifs spécifiques (optionnel)</Label>
                <Textarea
                  id="goals"
                  placeholder="Décrivez vos objectifs particuliers..."
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="additional">Informations complémentaires</Label>
                <Textarea
                  id="additional"
                  placeholder="Contraintes, préférences particulières, contexte..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="learning" 
            size="lg" 
            className="w-full text-lg py-6 h-auto"
            disabled={!isFormValid}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Générer ma roadmap d'apprentissage
          </Button>
        </form>
      </div>
    </main>
  );
};