import { useState } from "react";
import { LearningWelcome } from "@/components/LearningWelcome";
import { LearningSetup } from "@/components/LearningSetup";
import { RoadmapPreview } from "@/components/RoadmapPreview";
import { LearningInterface } from "@/components/LearningInterface";

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

  return renderCurrentState();
};

export default Index;
