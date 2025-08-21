import { Button } from "@repo/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Page non trouvée</h2>
        <p className="text-muted-foreground max-w-md">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button onClick={() => navigate("/")} className="mt-4">
          Retourner à l'accueil
        </Button>
      </div>
    </div>
  );
};

export default NotFound;