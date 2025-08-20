import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LandingPage } from "@/components/landing/LandingPage";
import { Header } from "@/components/layout/Header";
import { LearningWelcome } from "@/components/LearningWelcome";
import { LearningSetup } from "@/components/LearningSetup";
import { RoadmapPreview } from "@/components/RoadmapPreview";
import { LearningInterface } from "@/components/LearningInterface";

type AppState = "landing" | "welcome" | "setup" | "roadmap" | "learning";

interface LearningData {
  subject: string;
  level: string;
  timeCommitment: string;
  goals: string;
  preferredStyle: string;
  additionalInfo: string;
}

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [learningData, setLearningData] = useState<LearningData | null>(null);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Set initial state based on auth status
  useEffect(() => {
    if (!loading) {
      if (user) {
        // User is authenticated, show welcome if first time
        setCurrentState("welcome");
      } else {
        // User is not authenticated, show landing page
        setCurrentState("landing");
      }
    }
  }, [user, loading]);

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

  // Always render the app, state will determine what to show

  const handleGetStarted = () => {
    if (user) {
      setCurrentState("welcome");
    } else {
      navigate('/auth');
    }
  };

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
      case "welcome":
        setCurrentState("landing");
        break;
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
        setCurrentState("landing");
    }
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case "landing":
        return <LandingPage onGetStarted={handleGetStarted} />;
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
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Show header based on current state */}
      {currentState !== "landing" && (
        <Header 
          onAuthClick={() => navigate('/auth')}
          showAuth={!user}
        />
      )}
      {renderCurrentState()}
    </div>
  );
};

export default Index;
