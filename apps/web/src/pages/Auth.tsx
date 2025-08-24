import { AuthForm } from "@repo/auth/auth-form";
import { AnimatedBackground } from "../../src/components/AnimatedBackground";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <AnimatedBackground />
      
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>
      
      <div className="relative z-10 w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;