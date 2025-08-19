import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LearningWelcome } from "@/components/LearningWelcome";
import { LearningSetup } from "@/components/LearningSetup";
import { RoadmapPreview } from "@/components/RoadmapPreview";
import { LearningInterface } from "@/components/LearningInterface";
import { Button } from "@/components/ui/button";

type AppState = "welcome" | "setup" | "roadmap" | "learning";

interface LearningData {
  subject: string;
  level: string;
  timeCommitment: string;
  goals: string;
  preferredStyle: string;
  additionalInfo: string;
}

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("welcome");
  const [learningData, setLearningData] = useState<LearningData | null>(null);
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect to auth if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authenticated
  if (!user) {
    return null;
  }

  const handleStartLearning = () => {
    setCurrentState("setup");
  };

  const handleSetupSubmit = (data: LearningData) => {
    setLearningData(data);
    setCurrentState("roadmap");
  };

  const handleRoadmapConfirm = () => {
    setCurrentState("learning");
  };

  const handleBack = () => {
    switch (currentState) {
      case "setup":
        setCurrentState("welcome");
        break;
      case "roadmap":
        setCurrentState("setup");
        break;
      case "learning":
        setCurrentState("roadmap");
        break;
      default:
        setCurrentState("welcome");
    }
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case "welcome":
        return <LearningWelcome onStartLearning={handleStartLearning} />;
      case "setup":
        return <LearningSetup onBack={handleBack} onSubmit={handleSetupSubmit} />;
      case "roadmap":
        return (
          <RoadmapPreview 
            onBack={handleBack} 
            onConfirm={handleRoadmapConfirm}
            onEdit={() => setCurrentState("setup")}
            learningData={learningData}
          />
        );
      case "learning":
        return <LearningInterface onBack={handleBack} />;
      default:
        return <LearningWelcome onStartLearning={handleStartLearning} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header with logout */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="outline"
          onClick={signOut}
          className="bg-background/80 backdrop-blur-sm"
        >
          Se déconnecter
        </Button>
      </div>
      {renderCurrentState()}
    </div>
  );
};

export default Index;
