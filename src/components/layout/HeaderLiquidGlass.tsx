import { Theme, Flex, Box, Text, Button, Avatar, Badge, IconButton } from '@radix-ui/themes';
import { BookOpen, LogOut, Bell, Settings, User, Menu } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderLiquidGlassProps {
  onAuthClick?: () => void;
  showAuth?: boolean;
  onMenuClick?: () => void;
}

export const HeaderLiquidGlass = ({ onAuthClick, showAuth = true, onMenuClick }: HeaderLiquidGlassProps) => {
  const { user, signOut } = useAuth();

  return (
    <Theme appearance="dark" accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">
      <style>{`
        /* Liquid Glass Header Styling */
        .liquid-glass-header-container {
          background: rgba(26, 13, 59, 0.8);
          backdrop-filter: blur(15px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .liquid-logo {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(255, 94, 0, 0.7));
          border-radius: 12px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.3);
          transition: all 0.3s ease;
        }

        .liquid-logo:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 30px rgba(79, 70, 229, 0.5);
        }

        .liquid-header-button {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          color: #A0A0A0;
        }

        .liquid-header-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .liquid-primary-button {
          background: rgba(79, 70, 229, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          color: white;
        }

        .liquid-primary-button:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
          background: rgba(79, 70, 229, 0.9);
        }

        .liquid-destructive-button {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #EF4444;
          transition: all 0.3s ease;
        }

        .liquid-destructive-button:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.5);
          transform: scale(1.02);
        }

        .notification-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background: #EF4444;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .brand-text {
          background: linear-gradient(135deg, #FFFFFF 0%, #4F46E5 50%, #FF5E00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 20px;
        }

        .subtitle-text {
          color: #A0A0A0;
          font-size: 12px;
          font-weight: 400;
        }
      `}</style>

      <header className="liquid-glass-header-container">
        <Box px="4" py="3">
          <Flex justify="between" align="center">
            {/* Logo et Brand */}
            <Flex align="center" gap="3">
              {onMenuClick && (
                <IconButton 
                  variant="ghost" 
                  className="liquid-header-button md:hidden"
                  onClick={onMenuClick}
                >
                  <Menu className="w-5 h-5" />
                </IconButton>
              )}
              
              <div className="liquid-logo">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              
              <Box>
                <div className="brand-text">
                  AI-Edu-Roadmap
                </div>
                <div className="subtitle-text hidden sm:block">
                  Apprentissage intelligent
                </div>
              </Box>
            </Flex>

            {/* Navigation & Actions */}
            <Flex align="center" gap="3">
              {user ? (
                <Flex align="center" gap="3">
                  {/* Notifications */}
                  <Box style={{ position: 'relative' }}>
                    <IconButton 
                      variant="ghost" 
                      className="liquid-header-button"
                    >
                      <Bell className="w-4 h-4" />
                    </IconButton>
                    <div className="notification-badge" />
                  </Box>

                  {/* Settings */}
                  <IconButton 
                    variant="ghost" 
                    className="liquid-header-button"
                  >
                    <Settings className="w-4 h-4" />
                  </IconButton>

                  {/* User Info */}
                  <Flex align="center" gap="2" className="hidden sm:flex">
                    <Box style={{ textAlign: 'right' }}>
                      <Text size="2" weight="medium" style={{ color: '#FFFFFF' }}>
                        {user.email?.split('@')[0]}
                      </Text>
                      <Text size="1" style={{ color: '#A0A0A0' }}>
                        Premium
                      </Text>
                    </Box>
                    <Avatar 
                      size="2" 
                      fallback={user.email?.charAt(0).toUpperCase() || "U"} 
                      color="indigo"
                      style={{ 
                        border: '2px solid rgba(79, 70, 229, 0.5)',
                        boxShadow: '0 0 15px rgba(79, 70, 229, 0.3)'
                      }}
                    />
                  </Flex>

                  {/* Sign Out */}
                  <Button
                    variant="ghost"
                    className="liquid-destructive-button"
                    onClick={signOut}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Déconnexion</span>
                  </Button>
                </Flex>
              ) : (
                showAuth && onAuthClick && (
                  <Button
                    className="liquid-primary-button"
                    onClick={onAuthClick}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Se connecter
                  </Button>
                )
              )}
            </Flex>
          </Flex>
        </Box>
      </header>
    </Theme>
  );
};
