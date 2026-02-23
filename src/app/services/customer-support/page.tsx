"use client";
import FadeIn from "../../../components/FadeIn";
import { 
  Headset, 
  MessageSquare, 
  Zap, 
  Clock, 
  Users, 
  TrendingUp,
  Bot,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function CustomerSupport() {
  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Support",
      description: "Instant responses across chat, email, and phone calls with context awareness."
    },
    {
      icon: Zap,
      title: "70% Cost Reduction",
      description: "Replace expensive support teams with Niro-AI that works 24/7 without breaks."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry - your Niro-AI works around the clock."
    },
    {
      icon: Users,
      title: "Unlimited Conversations",
      description: "Handle thousands of customers simultaneously without wait times."
    },
    {
      icon: TrendingUp,
      title: "Smart Learning",
      description: "Niro-AI improves responses over time, learning from successful interactions."
    },
    {
      icon: Bot,
      title: "CRM Integration",
      description: "Seamlessly connects with Salesforce, HubSpot, Zendesk, and more."
    }
  ];

  const benefits = [
    "Reduce response time from hours to seconds",
    "Handle complex queries with contextual understanding", 
    "Escalate to humans only when necessary",
    "Track customer sentiment and satisfaction",
    "Generate detailed support analytics and insights",
    "Support multiple languages automatically"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                <Headset className="text-white w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              AI Customer Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Deliver instant, 24/7 support across all channels. Niro-AI 
              resolves 80% of customer inquiries without human intervention.
            </p>
          </div>
        </FadeIn>

        {/* Features Grid */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <feature.icon className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Benefits Section */}
        <FadeIn delay={0.4}>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Why Niro-AI for Support?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Stats Section */}
        <FadeIn delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-gray-600 dark:text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Always Available</div>
            </div>
            <div className="text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-300">Simultaneous Chats</div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={0.8}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Transform Your Customer Support?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Free Demo
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
