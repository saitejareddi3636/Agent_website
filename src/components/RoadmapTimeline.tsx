"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { 
  Rocket, 
  Building, 
  Globe, 
  CheckCircle,
  Calendar,
  Users,
  Zap,
  Star,
  TrendingUp,
  Award
} from "lucide-react";

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  timeline: string;
  status: 'completed' | 'current' | 'upcoming';
  features: string[];
  icon: React.ElementType;
  color: string;
}

export default function RoadmapTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const roadmapData: RoadmapItem[] = [
    {
      phase: "Phase 1",
      title: "SMB Foundation",
      description: "Perfect AI agents for small and medium businesses",
      timeline: "Q1 2024 - Q2 2024",
      status: 'completed',
      features: [
        "AI Customer Support for restaurants & clinics",
        "AI Receptionist with booking systems", 
        "Personal AI Assistant MVP",
        "24/7 multilingual support",
        "CRM integrations (Salesforce, HubSpot)"
      ],
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "Phase 2", 
      title: "Scale & Intelligence",
      description: "Advanced AI capabilities and enterprise features",
      timeline: "Q3 2024 - Q4 2024",
      status: 'current',
      features: [
        "Advanced personalization engine",
        "Voice-first interactions",
        "Proactive task automation",
        "Advanced analytics dashboard",
        "Team collaboration features",
        "Custom AI training for specific industries"
      ],
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Phase 3",
      title: "Enterprise Platform", 
      description: "Full enterprise AI ecosystem with global reach",
      timeline: "Q1 2025 - Q4 2025",
      status: 'upcoming',
      features: [
        "Multi-agent orchestration",
        "Enterprise security & compliance",
        "Global marketplace for AI agents",
        "White-label solutions",
        "Advanced workflow automation",
        "AI agent marketplace"
      ],
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Rocket className="w-6 h-6 text-blue-500" />;
      case 'upcoming':
        return <Star className="w-6 h-6 text-purple-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'completed':
        return "✅ Completed";
      case 'current':
        return "🚀 In Progress";
      case 'upcoming':
        return "⭐ Coming Soon";
      default:
        return "";
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Roadmap to AI Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From serving small businesses to becoming the global leader in AI agent technology
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400"></div>

          {/* Roadmap Items */}
          <div className="space-y-16">
            {roadmapData.map((item, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -5 }}
                      onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} mr-4`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {item.phase}
                            </p>
                          </div>
                        </div>
                        {getStatusIcon(item.status)}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Timeline & Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.timeline}
                        </div>
                        <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                          {getStatusText(item.status)}
                        </span>
                      </div>

                      {/* Features Preview */}
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Click to see {item.features.length} key features →
                      </div>
                    </motion.div>

                    {/* Expanded Features */}
                    <AnimatePresence>
                      {selectedPhase === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                        >
                          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            Key Features & Capabilities:
                          </h4>
                          <ul className="space-y-3">
                            {item.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-start"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.8}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Be Part of the AI Revolution</h3>
              <p className="text-lg mb-6 opacity-90">
                Join us on this journey and help shape the future of AI agents
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Join Beta Program
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Subscribe for Updates
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
