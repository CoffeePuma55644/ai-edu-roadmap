import { useState } from "react";
import { Theme, Flex, Box, Card, Text, Button, Avatar, Badge, HoverCard, IconButton } from '@radix-ui/themes';
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, BookOpen, Trophy, Heart, Star, CheckCircle } from "lucide-react";

interface LearningInterfaceProps {
  onBack: () => void;
}

export const LearningInterfaceLiquidGlass = ({ onBack }: LearningInterfaceProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hearts, setHearts] = useState(5);
  const [streak, setStreak] = useState(3);
  const [xp, setXp] = useState(245);
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
    <Theme appearance="dark" accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">
      <style>{`
        /* Liquid Glass Background */
        .liquid-glass-bg {
          background: linear-gradient(135deg, 
            #1A0D3B 0%,     /* Violet foncé */
            #2A003B 35%,    /* Noir intermédiaire */
            #FF5E00 100%    /* Orange vif */
          );
          opacity: 0.9;
          min-height: 100vh;
        }

        /* Liquid Glass Card Effect */
        .liquid-glass-card {
          background: rgba(26, 13, 59, 0.5);
          backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .liquid-glass-card:hover {
          transform: scale(1.01) translateY(-1px);
          backdrop-filter: blur(15px) saturate(200%);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* Liquid Glass Header Sticky */
        .liquid-glass-header {
          background: rgba(26, 13, 59, 0.8);
          backdrop-filter: blur(15px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        /* Liquid Button Effects */
        .liquid-button-primary {
          background: rgba(79, 70, 229, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          color: white;
        }

        .liquid-button-primary:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
          background: rgba(79, 70, 229, 0.9);
        }

        .liquid-button-ghost {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          color: #A0A0A0;
        }

        .liquid-button-ghost:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: scale(1.02);
        }

        .liquid-button-success {
          background: rgba(34, 197, 94, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        .liquid-button-destructive {
          background: rgba(239, 68, 68, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        /* Progress bar styling */
        .liquid-progress {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .liquid-progress-fill {
          background: linear-gradient(90deg, rgba(79, 70, 229, 0.8), rgba(255, 94, 0, 0.8));
          transition: all 0.3s ease;
        }

        /* Heart animation */
        .heart-animate {
          transition: all 0.2s ease;
        }

        .heart-animate:hover {
          transform: scale(1.1);
        }

        /* Content area styling */
        .content-area {
          max-height: calc(100vh - 200px);
          overflow-y: auto;
        }

        .content-area::-webkit-scrollbar {
          width: 6px;
        }

        .content-area::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .content-area::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.6);
          border-radius: 3px;
        }

        /* Code block styling */
        .code-block {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 16px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          color: #E2E8F0;
          margin: 16px 0;
        }

        /* Glow effects */
        .glow-indigo {
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
        }

        .glow-success {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .glow-orange {
          box-shadow: 0 0 20px rgba(255, 94, 0, 0.3);
        }
      `}</style>

      <div className="liquid-glass-bg">
        {/* Header avec progress */}
        <div className="liquid-glass-header">
          <Box p="4">
            <Flex justify="between" align="center" mb="4">
              <Button 
                variant="ghost" 
                className="liquid-button-ghost"
                onClick={onBack}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quitter
              </Button>
              
              <Flex align="center" gap="4">
                {/* Hearts */}
                <Flex align="center" gap="1">
                  {[...Array(5)].map((_, i) => (
                    <Heart 
                      key={i} 
                      className={`w-5 h-5 heart-animate ${
                        i < hearts ? 'text-red-500' : 'text-gray-500'
                      }`}
                      style={{ fill: i < hearts ? 'currentColor' : 'none' }}
                    />
                  ))}
                </Flex>
                
                {/* Streak */}
                <Badge color="orange" variant="solid" className="glow-orange">
                  <Star className="w-3 h-3 mr-1" />
                  {streak}
                </Badge>
                
                {/* XP */}
                <Badge color="indigo" variant="solid" className="glow-indigo">
                  {xp} XP
                </Badge>
              </Flex>
            </Flex>
            
            <Box mb="2">
              <Flex justify="between" mb="2">
                <Text size="2" style={{ color: '#A0A0A0' }}>
                  Étape {currentStep} sur {totalSteps}
                </Text>
                <Text size="2" style={{ color: '#A0A0A0' }}>
                  {Math.round(progressPercentage)}% terminé
                </Text>
              </Flex>
              <div className="liquid-progress" style={{ height: '8px', width: '100%' }}>
                <div 
                  className="liquid-progress-fill" 
                  style={{ 
                    width: `${progressPercentage}%`, 
                    height: '100%',
                    transition: 'width 0.3s ease'
                  }} 
                />
              </div>
            </Box>
          </Box>
        </div>

        {/* Main Content */}
        <Box p="4" className="content-area">
          <Box style={{ maxWidth: '1024px', margin: '0 auto' }}>
            {!showQuiz ? (
              /* Learning Content */
              <Card className="liquid-glass-card" variant="surface">
                <Box p="6">
                  <Flex align="center" gap="3" mb="4">
                    <Box 
                      className="glow-indigo"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'rgba(79, 70, 229, 0.8)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <BookOpen className="w-6 h-6" style={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Text size="6" weight="bold" style={{ color: '#FFFFFF' }}>
                        {currentContent.title}
                      </Text>
                      <Badge color="indigo" variant="soft" style={{ marginTop: '4px' }}>
                        Leçon théorique
                      </Badge>
                    </Box>
                  </Flex>
                  
                  <Box style={{ color: '#E2E8F0', lineHeight: '1.7', fontSize: '16px' }}>
                    <div style={{ whiteSpace: 'pre-line' }}>
                      {currentContent.content.split('```').map((part, index) => {
                        if (index % 2 === 1) {
                          return (
                            <div key={index} className="code-block">
                              {part}
                            </div>
                          );
                        }
                        return (
                          <div key={index} dangerouslySetInnerHTML={{
                            __html: part
                              .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #F8FAFC; font-weight: 600;">$1</strong>')
                              .replace(/- (.*?)(?=\n|$)/g, '• $1')
                          }} />
                        );
                      })}
                    </div>
                  </Box>
                </Box>
              </Card>
            ) : (
              /* Quiz Content */
              <Card className="liquid-glass-card" variant="surface">
                <Box p="6">
                  <Flex align="center" gap="3" mb="4">
                    <Box 
                      className="glow-orange"
                      style={{
                        width: '48px',
                        height: '48px',
                        background: 'rgba(255, 94, 0, 0.8)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Trophy className="w-6 h-6" style={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Text size="6" weight="bold" style={{ color: '#FFFFFF' }}>
                        Quiz de compréhension
                      </Text>
                      <Badge color="orange" variant="soft" style={{ marginTop: '4px' }}>
                        Question
                      </Badge>
                    </Box>
                  </Flex>
                  
                  <Box mb="6">
                    <Text size="4" style={{ color: '#FFFFFF', fontWeight: '500' }}>
                      {currentContent.quiz.question}
                    </Text>
                  </Box>
                  
                  <Flex direction="column" gap="3" mb="6">
                    {currentContent.quiz.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={
                          selectedAnswer === null 
                            ? "liquid-button-ghost" 
                            : selectedAnswer === index
                              ? index === currentContent.quiz.correct 
                                ? "liquid-button-success glow-success" 
                                : "liquid-button-destructive"
                              : index === currentContent.quiz.correct
                                ? "liquid-button-success glow-success"
                                : "liquid-button-ghost"
                        }
                        style={{ 
                          justifyContent: 'flex-start',
                          height: 'auto',
                          padding: '16px 24px',
                          textAlign: 'left'
                        }}
                        onClick={() => handleQuizAnswer(index)}
                        disabled={selectedAnswer !== null}
                      >
                        <Text weight="bold" style={{ marginRight: '12px' }}>
                          {String.fromCharCode(65 + index)}.
                        </Text>
                        {option}
                      </Button>
                    ))}
                  </Flex>
                  
                  {selectedAnswer !== null && (
                    <Box style={{ textAlign: 'center', padding: '16px' }}>
                      {selectedAnswer === currentContent.quiz.correct ? (
                        <Flex align="center" justify="center" gap="2">
                          <CheckCircle className="w-5 h-5" style={{ color: '#22C55E' }} />
                          <Text style={{ color: '#22C55E', fontWeight: '600' }}>
                            Correct ! +10 XP
                          </Text>
                        </Flex>
                      ) : (
                        <Text style={{ color: '#EF4444', fontWeight: '600' }}>
                          ✗ Incorrect. La bonne réponse était : {currentContent.quiz.options[currentContent.quiz.correct]}
                        </Text>
                      )}
                    </Box>
                  )}
                </Box>
              </Card>
            )}

            {/* Navigation */}
            <Flex justify="between" mt="6">
              <Button 
                variant="outline" 
                className="liquid-button-ghost"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>
              
              {!showQuiz ? (
                <Button 
                  className="liquid-button-primary"
                  onClick={() => setShowQuiz(true)}
                >
                  Passer au quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  className="liquid-button-primary"
                  onClick={nextStep}
                  disabled={selectedAnswer === null || currentStep === totalSteps}
                >
                  {currentStep === totalSteps ? "Terminer" : "Continuer"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      </div>
    </Theme>
  );
};
