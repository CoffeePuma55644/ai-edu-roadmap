import { useState } from "react";
import { Theme, Flex, Box, Card, Text, Button, Avatar, Badge, HoverCard, IconButton } from '@radix-ui/themes';
import { 
  MoreHorizontal, 
  Calendar, 
  Grid3X3, 
  Waves, 
  Bell, 
  Filter,
  Heart,
  MessageCircle,
  Plus,
  User,
  ArrowLeft,
  BookOpen,
  Code,
  Palette,
  Smartphone
} from "lucide-react";

interface RoadmapCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  avatars: { name: string; color: string }[];
  comments: number;
  likes: number;
  status: 'backlog' | 'in-progress' | 'review' | 'completed';
}

interface DashboardProps {
  onBack?: () => void;
}

export const Dashboard = ({ onBack }: DashboardProps) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data pour les roadmaps d'apprentissage
  const roadmapCards: RoadmapCard[] = [
    {
      id: "1",
      title: "Learn Python Fundamentals",
      description: "Master the basics of Python programming with hands-on projects and real-world applications.",
      imageUrl: "/api/placeholder/300/160",
      tags: ["Python", "Backend", "Beginner"],
      avatars: [
        { name: "Alex", color: "blue" },
        { name: "Sara", color: "green" },
        { name: "Mike", color: "orange" }
      ],
      comments: 8,
      likes: 12,
      status: 'in-progress'
    },
    {
      id: "2",
      title: "React Development Path",
      description: "Complete roadmap to become a proficient React developer with modern hooks and patterns.",
      imageUrl: "/api/placeholder/300/160",
      tags: ["React", "Frontend", "JavaScript"],
      avatars: [
        { name: "Luna", color: "purple" },
        { name: "Dev", color: "red" }
      ],
      comments: 15,
      likes: 24,
      status: 'backlog'
    },
    {
      id: "3",
      title: "UI/UX Design Mastery",
      description: "Learn design principles, user research, and create stunning user interfaces.",
      imageUrl: "/api/placeholder/300/160",
      tags: ["Design", "UI/UX", "Figma"],
      avatars: [
        { name: "Emma", color: "pink" },
        { name: "Tom", color: "cyan" },
        { name: "Zoe", color: "yellow" }
      ],
      comments: 6,
      likes: 18,
      status: 'review'
    },
    {
      id: "4",
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native and modern development tools.",
      imageUrl: "/api/placeholder/300/160",
      tags: ["React Native", "Mobile", "Cross-platform"],
      avatars: [
        { name: "Jack", color: "indigo" },
        { name: "Lily", color: "teal" }
      ],
      comments: 12,
      likes: 20,
      status: 'completed'
    },
    {
      id: "5",
      title: "Data Science Fundamentals",
      description: "Explore data analysis, machine learning, and statistical modeling with Python.",
      imageUrl: "/api/placeholder/300/160",
      tags: ["Data Science", "Python", "ML"],
      avatars: [
        { name: "Kai", color: "violet" }
      ],
      comments: 4,
      likes: 9,
      status: 'backlog'
    }
  ];

  const columns = [
    { id: 'backlog', title: 'Backlog', count: roadmapCards.filter(card => card.status === 'backlog').length },
    { id: 'in-progress', title: 'In Progress', count: roadmapCards.filter(card => card.status === 'in-progress').length },
    { id: 'review', title: 'Review', count: roadmapCards.filter(card => card.status === 'review').length },
    { id: 'completed', title: 'Completed', count: roadmapCards.filter(card => card.status === 'completed').length }
  ];

  const getCardsForColumn = (columnId: string) => {
    return roadmapCards.filter(card => card.status === columnId);
  };

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'python':
      case 'backend':
      case 'data science':
      case 'ml':
        return <Code className="w-3 h-3" />;
      case 'react':
      case 'frontend':
      case 'javascript':
        return <BookOpen className="w-3 h-3" />;
      case 'design':
      case 'ui/ux':
      case 'figma':
        return <Palette className="w-3 h-3" />;
      case 'mobile':
      case 'react native':
      case 'cross-platform':
        return <Smartphone className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <Theme appearance="dark" accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">
      <style>{`
        /* Liquid Glass Background */
        .liquid-glass-bg {
          background: linear-gradient(135deg, 
            #1A0D3B 0%,     /* Violet foncé */
            #2A003B 35%,    /* Noir intermédiaire */
            #FF5E00 100%    /* Orange vif */
          );
          opacity: 0.9;
          min-height: 100vh;
        }

        /* Liquid Glass Card Effect */
        .liquid-glass-card {
          background: rgba(26, 13, 59, 0.5);
          backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .liquid-glass-card:hover {
          transform: scale(1.02) translateY(-2px);
          backdrop-filter: blur(15px) saturate(200%);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Liquid Glass Header */
        .liquid-glass-header {
          background: rgba(26, 13, 59, 0.6);
          backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        /* Liquid Button Effect */
        .liquid-button {
          background: rgba(79, 70, 229, 0.8);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .liquid-button:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.3);
        }

        /* Custom scrollbar */
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.6);
          border-radius: 3px;
        }

        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(79, 70, 229, 0.8);
        }

        /* Image overlay effect */
        .image-overlay {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .image-overlay::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(255, 94, 0, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-overlay:hover::after {
          opacity: 1;
        }

        /* Animation classes */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.4); }
          50% { box-shadow: 0 0 40px rgba(79, 70, 229, 0.8); }
        }
      `}</style>

      <div className="liquid-glass-bg">
        <Box p="4">
          {/* Header */}
          <Box className="liquid-glass-header" p="4" mb="6">
            <Flex justify="between" align="center" mb="4">
              <Flex align="center" gap="3">
                {onBack && (
                  <IconButton 
                    variant="ghost" 
                    className="liquid-button"
                    onClick={onBack}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </IconButton>
                )}
                <Text size="6" weight="bold" style={{ color: '#FFFFFF' }}>
                  Learning Roadmaps
                </Text>
              </Flex>

              <Flex align="center" gap="3">
                <Text size="2" style={{ color: '#A0A0A0' }}>
                  Aug 21, 2025 at 09:12 PM SAST
                </Text>
                
                <Flex align="center" gap="2">
                  <IconButton variant="ghost" className="liquid-button">
                    <Grid3X3 className="w-4 h-4" />
                  </IconButton>
                  <IconButton variant="ghost" className="liquid-button">
                    <Calendar className="w-4 h-4" />
                  </IconButton>
                  <IconButton variant="ghost" className="liquid-button">
                    <Waves className="w-4 h-4" />
                  </IconButton>
                  
                  <Box style={{ position: 'relative' }}>
                    <IconButton variant="ghost" className="liquid-button">
                      <Bell className="w-4 h-4" />
                    </IconButton>
                    <Box 
                      style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '8px',
                        height: '8px',
                        background: '#EF4444',
                        borderRadius: '50%'
                      }}
                    />
                  </Box>
                  
                  <Avatar size="2" fallback="U" color="indigo" />
                </Flex>
              </Flex>
            </Flex>

            <Flex align="center" gap="3">
              <Button variant="ghost" className="liquid-button">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </Flex>
          </Box>

          {/* Kanban Columns */}
          <Flex 
            direction={{ initial: "column", md: "row" }} 
            gap="4" 
            style={{ overflowX: 'auto' }}
            className="custom-scroll"
          >
            {columns.map((column) => (
              <Box key={column.id} style={{ minWidth: '320px', flex: '1' }}>
                {/* Column Header */}
                <Flex align="center" justify="between" mb="4" p="3">
                  <Flex align="center" gap="2">
                    <Text size="4" weight="bold" style={{ color: '#FFFFFF' }}>
                      {column.title}
                    </Text>
                    <Badge color="indigo" variant="soft">
                      {column.count}
                    </Badge>
                  </Flex>
                  <IconButton variant="ghost" className="liquid-button">
                    <MoreHorizontal className="w-4 h-4" />
                  </IconButton>
                </Flex>

                {/* Cards */}
                <Flex direction="column" gap="3">
                  {getCardsForColumn(column.id).map((card) => (
                    <Card 
                      key={card.id} 
                      className="liquid-glass-card" 
                      variant="surface"
                    >
                      <Box p="4">
                        {/* Card Image */}
                        <Box className="image-overlay" mb="3">
                          <img 
                            src={`https://picsum.photos/300/160?random=${card.id}`}
                            alt={card.title}
                            style={{
                              width: '100%',
                              height: '128px',
                              objectFit: 'cover',
                              borderRadius: '8px'
                            }}
                          />
                        </Box>

                        {/* Card Content */}
                        <Flex direction="column" gap="3">
                          <Text size="4" weight="bold" style={{ color: '#FFFFFF' }}>
                            {card.title}
                          </Text>
                          
                          <Text size="2" style={{ color: '#A0A0A0', lineHeight: '1.5' }}>
                            {card.description}
                          </Text>

                          {/* Tags */}
                          <Flex wrap="wrap" gap="2">
                            {card.tags.map((tag, index) => (
                              <Badge 
                                key={index}
                                color="indigo" 
                                variant="soft"
                                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                              >
                                {getTagIcon(tag)}
                                {tag}
                              </Badge>
                            ))}
                          </Flex>

                          {/* Bottom Actions */}
                          <Flex justify="between" align="center" pt="2">
                            <Flex align="center" gap="2">
                              {/* Avatars */}
                              <Flex style={{ marginLeft: '-4px' }}>
                                {card.avatars.map((avatar, index) => (
                                  <Avatar 
                                    key={index}
                                    size="1" 
                                    fallback={avatar.name.slice(0, 2)} 
                                    color={avatar.color as any}
                                    style={{ 
                                      marginLeft: index > 0 ? '-4px' : '0',
                                      border: '2px solid rgba(26, 13, 59, 0.8)'
                                    }}
                                  />
                                ))}
                              </Flex>
                            </Flex>

                            <Flex align="center" gap="3">
                              {/* Comments */}
                              <Flex align="center" gap="1">
                                <IconButton variant="ghost" size="1">
                                  <MessageCircle className="w-3 h-3" />
                                </IconButton>
                                <Text size="1" style={{ color: '#A0A0A0' }}>
                                  {card.comments}
                                </Text>
                              </Flex>

                              {/* Likes */}
                              <Flex align="center" gap="1">
                                <IconButton variant="ghost" size="1">
                                  <Heart className="w-3 h-3" />
                                </IconButton>
                                <Text size="1" style={{ color: '#A0A0A0' }}>
                                  {card.likes}
                                </Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Box>
                    </Card>
                  ))}

                  {/* Add Card Button */}
                  <Button 
                    variant="ghost" 
                    className="liquid-button"
                    style={{ 
                      height: '120px',
                      border: '2px dashed rgba(255, 255, 255, 0.2)',
                      background: 'rgba(79, 70, 229, 0.1)'
                    }}
                  >
                    <Flex direction="column" align="center" gap="2">
                      <Plus className="w-6 h-6" />
                      <Text size="2" style={{ color: '#A0A0A0' }}>
                        Add Roadmap
                      </Text>
                    </Flex>
                  </Button>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </div>
    </Theme>
  );
};
