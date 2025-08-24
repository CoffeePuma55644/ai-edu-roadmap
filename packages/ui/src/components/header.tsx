import { Button } from "./button";
import { ThemeToggle } from "../theme/theme-toggle";
import { useAuth } from "@repo/auth";
import { LogOut, User, BookOpen } from "lucide-react";

interface HeaderProps {
  onAuthClick?: () => void;
  onLoginClick?: () => void;
}

export const Header = ({ onAuthClick, onLoginClick }: HeaderProps) => {
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 z-50 w-full liquid-glass-header">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI EduRoadmap
              </span>
              <div className="text-xs text-gray-400 hidden sm:block">
                Intelligent Learning
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {!user && (
            <>
              <a href="#home" className="text-white font-medium hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="#courses" className="text-white font-medium hover:text-purple-400 transition-colors">
                Courses
              </a>
              <a href="#about" className="text-white font-medium hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-white font-medium hover:text-purple-400 transition-colors">
                Contact
              </a>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-white">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{user.email}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => signOut()}
                className="text-white hover:bg-white/10 transition-all"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onLoginClick || onAuthClick}
                className="text-white hover:bg-white/10 transition-all"
              >
                Login
              </Button>
              <Button 
                size="sm"
                onClick={onAuthClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};