import { useAuth } from "@repo/auth";
import { LandingPage } from "@repo/ui/landing-page";
import { Header } from "@repo/ui/header";
import { AnimatedBackground } from "../../src/components/AnimatedBackground";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!user) {
      navigate('/auth');
    }
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  if (!user) {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Header onAuthClick={handleGetStarted} onLoginClick={handleLogin} />
        <div className="pt-20">
          <LandingPage onGetStarted={handleGetStarted} onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8 text-white">
            Welcome to Your AI Learning Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            You're logged in! Your personalized learning journey awaits.
          </p>
          <div className="liquid-glass-card p-8 max-w-md mx-auto">
            <p className="text-gray-300">
              Dashboard and learning modules coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;