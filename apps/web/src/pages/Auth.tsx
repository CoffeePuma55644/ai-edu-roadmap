import { useAuth } from "@repo/auth";
import { Navigate } from "react-router-dom";
import { AuthForm } from "@repo/auth/auth-form";
import { Header } from "@repo/ui/header";

const Auth = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Accédez à votre compte
            </h2>
            <p className="mt-2 text-muted-foreground">
              Connectez-vous ou créez un compte pour commencer votre apprentissage
            </p>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;