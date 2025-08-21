import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeSynchronizer = () => {
  const { actualTheme } = useTheme();
  
  useEffect(() => {
    // Appliquer le thème au niveau du document HTML
    const root = document.documentElement;
    const body = document.body;
    
    // Supprimer les anciennes classes
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");
    
    // Ajouter la nouvelle classe de thème
    root.classList.add(actualTheme);
    body.classList.add(actualTheme);
    
    // S'assurer que les variables CSS sont appliquées
    root.setAttribute("data-theme", actualTheme);
  }, [actualTheme]);
  
  return null;
};
