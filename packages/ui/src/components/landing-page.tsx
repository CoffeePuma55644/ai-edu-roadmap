import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { 
  Brain, 
  Target, 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Star,
  ArrowRight,
  CheckCircle,
  Search,
  Sparkles,
  HeartHandshake,
  BookOpenCheck
} from "lucide-react";

interface LandingPageProps {
  onGetStarted?: () => void;
  onLogin?: () => void;
}

export const LandingPage = ({ onGetStarted, onLogin }: LandingPageProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Generate personalized roadmaps and courses tailored to your learning style and goals."
    },
    {
      icon: Target,
      title: "Smart Goal Setting",
      description: "Set and track learning objectives with AI-driven insights and progress monitoring."
    },
    {
      icon: BookOpenCheck,
      title: "Adaptive Content",
      description: "Content that adapts to your pace and understanding level for optimal learning efficiency."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect with learners worldwide and learn together with AI-facilitated discussions."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Tell Us What You Want to Learn",
      description: "Simply describe your learning goals and our AI will analyze your needs and current skill level."
    },
    {
      number: "02", 
      title: "Get Your Personalized Roadmap",
      description: "Receive a custom learning path with structured courses, resources, and milestones designed for you."
    },
    {
      number: "03",
      title: "Learn and Grow with AI Guidance",
      description: "Follow your roadmap, complete modules, and let our AI adapt the content as you progress."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      content: "This platform revolutionized how I learn. The AI truly understands my needs and adapts perfectly.",
      rating: 5
    },
    {
      name: "Marc Johnson",
      role: "Data Scientist",
      content: "The personalized roadmaps saved me months of scattered learning. Incredibly efficient and focused.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Product Manager",
      content: "Intuitive interface and high-quality content. The AI teacher feels like having a personal mentor!",
      rating: 5
    }
  ];

  const popularTopics = [
    "Python Development",
    "Web Design", 
    "Natural Language Processing",
    "Cybersecurity",
    "Machine Learning",
    "Data Science"
  ];

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                Your AI Teacher As You Dream
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              What do you want to
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                learn?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unlock your potential with our AI-powered learning platform. Discover 
              personalized roadmaps to master any skill.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for a topic, like 'Machine Learning' or 'Data Science'"
                  className="w-full pl-12 pr-20 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                />
                <Button 
                  onClick={onGetStarted}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-xl transition-all"
                >
                  Search
                </Button>
              </div>
            </div>
            
            {/* Popular Topics */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {popularTopics.map((topic, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                >
                  {topic}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 backdrop-blur-md"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> EduRoadmap</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of learning with AI-powered personalization and adaptive content delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="liquid-glass-card p-8 text-center hover:liquid-hover-lift transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Three simple steps to transform your learning journey with AI guidance
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center mb-20 last:mb-0">
                <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                  <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400/20 to-pink-400/20 bg-clip-text text-transparent mb-6">
                    {step.number}
                  </div>
                </div>
                <div className="lg:w-2/3 lg:pl-12">
                  <div className="liquid-glass-card p-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-300 text-center lg:text-left leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of learners who have transformed their learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="liquid-glass-card p-8 hover:liquid-hover-lift transition-all duration-300">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto liquid-glass-card-intense p-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Join thousands of learners and unlock your potential with AI-powered education
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  onClick={onGetStarted}
                  className="text-lg px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-5 border-white/30 text-white hover:bg-white/10 backdrop-blur-md"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-12 h-12 border-2 border-white rounded-full animate-pulse" />
              <div className="absolute top-16 right-12 w-8 h-8 border-2 border-white rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-12 left-16 w-6 h-6 border-2 border-white rounded-full animate-pulse" style={{animationDelay: '2s'}} />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};