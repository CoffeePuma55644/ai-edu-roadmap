import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LandingPage } from "@/components/landing/LandingPage";
import { HeaderLiquidGlass } from "@/components/layout/HeaderLiquidGlass";
import { LearningWelcome } from "@/components/LearningWelcome";
import { LearningSetup } from "@/components/LearningSetup";
import { RoadmapPreview } from "@/components/RoadmapPreview";
import { LearningInterfaceLiquidGlass } from "@/components/LearningInterfaceLiquidGlass";
import { Dashboard } from "@/components/Dashboard";

type AppState = "landing" | "welcome" | "setup" | "roadmap" | "learning" | "dashboard";

interface LearningData {
  subject: string;
  level: string;
  timeCommitment: string;
  goals: string;
  preferredStyle: string;
  additionalInfo: string;
}

const IndexLiquidGlass = () => {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [learningData, setLearningData] = useState<LearningData | null>(null);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Set initial state based on auth status
  useEffect(() => {
    if (!loading) {
      if (user) {
        // Si l'utilisateur est connecté, on peut aller directement au dashboard
        setCurrentState("dashboard");
      } else {
        setCurrentState("landing");
      }
    }
  }, [user, loading]);

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

  const handleSetupComplete = (data: LearningData) => {
    setLearningData(data);
    setCurrentState("roadmap");
  };

  const handleRoadmapConfirm = () => {
    setCurrentState("learning");
  };

  const handleEditRoadmap = () => {
    setCurrentState("setup");
  };

  const handleBack = () => {
    switch (currentState) {
      case "welcome":
        setCurrentState("dashboard");
        break;
      case "setup":
        setCurrentState("welcome");
        break;
      case "roadmap":
        setCurrentState("setup");
        break;
      case "learning":
        setCurrentState("dashboard");
        break;
      case "dashboard":
        setCurrentState("landing");
        break;
      default:
        setCurrentState("landing");
    }
  };

  const handleGoToDashboard = () => {
    setCurrentState("dashboard");
  };

  const handleStartNewRoadmap = () => {
    setCurrentState("welcome");
  };

  const renderCurrentState = () => {
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

    switch (currentState) {
      case "welcome":
        return <LearningWelcome onStartLearning={handleStartLearning} />;
      case "setup":
        return (
          <LearningSetup 
            onBack={handleBack}
            onSubmit={handleSetupComplete}
          />
        );
      case "roadmap":
        return (
          <RoadmapPreview 
            onBack={handleBack}
            onConfirm={handleRoadmapConfirm}
            onEdit={handleEditRoadmap}
            learningData={learningData}
          />
        );
      case "learning":
        return <LearningInterfaceLiquidGlass onBack={handleBack} />;
      case "dashboard":
        return (
          <div style={{ minHeight: '100vh' }}>
            <HeaderLiquidGlass 
              onAuthClick={() => navigate('/auth')}
              showAuth={!user}
            />
            <Dashboard onBack={handleBack} />
            
            {/* Floating Action Buttons */}
            <div style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 1000
            }}>
              <button
                onClick={handleStartNewRoadmap}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(79, 70, 229, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(79, 70, 229, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 6px 30px rgba(79, 70, 229, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(79, 70, 229, 0.4)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        );
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return renderCurrentState();
};

export default IndexLiquidGlass;
