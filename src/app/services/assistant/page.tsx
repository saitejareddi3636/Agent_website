"use client";
import FadeIn from "../../../components/FadeIn";
import { 
  Brain, 
  Calendar, 
  Utensils, 
  Dumbbell, 
  Plane, 
  BookOpen,
  Heart,
  Coffee,
  Car,
  ShoppingCart,
  Music,
  Mic,
  Clock,
  Target,
  Lightbulb,
  Zap,
  Users,
  Home
} from "lucide-react";
import Link from "next/link";

export default function Assistant() {
  const dailyTasks = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Learns your energy patterns and schedules important tasks when you're most productive",
      example: "Schedules creative work in your peak morning hours, meetings in afternoons"
    },
    {
      icon: Utensils,
      title: "Meal Planning & Nutrition",
      description: "Tracks your eating habits, suggests healthy meals based on your preferences and goals",
      example: "Remembers you're vegetarian, suggests protein-rich recipes, tracks macro nutrients"
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "Creates personalized workout plans, tracks progress, reminds you to move",
      example: "Adapts workouts based on your fitness level, sends rest day reminders"
    },
    {
      icon: BookOpen,
      title: "Learning & Study Assistant",
      description: "Helps with coursework, creates study schedules, tracks your learning progress",
      example: "Breaks down complex topics, creates flashcards, schedules review sessions"
    },
    {
      icon: Plane,
      title: "Travel Planning",
      description: "Books flights, hotels, creates itineraries based on your travel style and budget",
      example: "Remembers you prefer aisle seats, finds budget-friendly options, books restaurants"
    },
    {
      icon: ShoppingCart,
      title: "Smart Shopping",
      description: "Tracks what you need, finds deals, orders groceries when you're running low",
      example: "Knows your favorite brands, alerts about sales, manages recurring orders"
    }
  ];

  const personalizationFeatures = [
    {
      icon: Brain,
      title: "Memory & Context",
      description: "Remembers everything you tell it and builds context over time",
      details: [
        "Your favorite restaurants and dietary restrictions",
        "Important dates, birthdays, and anniversaries", 
        "Your work schedule and meeting preferences",
        "Health goals and medication reminders"
      ]
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Helps you set and achieve personal and professional goals",
      details: [
        "Breaks down big goals into actionable daily tasks",
        "Tracks progress and celebrates milestones",
        "Adjusts plans based on your progress and feedback",
        "Motivates you with personalized encouragement"
      ]
    },
    {
      icon: Lightbulb,
      title: "Proactive Suggestions",
      description: "Anticipates your needs and makes helpful suggestions",
      details: [
        "Suggests leaving early when traffic is heavy",
        "Reminds you to buy gifts before birthdays",
        "Recommends restaurants based on your mood",
        "Suggests breaks when you've been working too long"
      ]
    },
    {
      icon: Mic,
      title: "Natural Conversation",
      description: "Talk to your AI like you would a close friend or personal assistant",
      details: [
        "Understands context from previous conversations",
        "Responds in your preferred communication style",
        "Asks clarifying questions when needed",
        "Learns your humor and personality preferences"
      ]
    }
  ];

  const agenticTasks = [
    "Book appointments and manage your calendar automatically",
    "Research and compare products before you buy",
    "Monitor your finances and alert you to unusual spending",
    "Plan surprise date nights based on your partner's preferences",
    "Coordinate group trips with friends and family",
    "Manage household tasks and maintenance schedules",
    "Track package deliveries and manage returns",
    "Research topics for work projects and presentations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Brain className="text-white w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Personal AI Assistant
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your intelligent companion that learns your routines, understands your preferences, 
              and acts as your personal agent in daily life. More than an assistant - it's like 
              having a brilliant friend who never forgets and always has your back.
            </p>
          </div>
        </FadeIn>

        {/* Daily Life Tasks */}
        <FadeIn delay={0.2}>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Your AI Handles Daily Life
            </h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
              From morning routines to evening wind-down, your AI manages everything
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dailyTasks.map((task, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <task.icon className="w-10 h-10 text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {task.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {task.description}
                  </p>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <p className="text-sm text-purple-700 dark:text-purple-300 italic">
                      Example: {task.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Personalization Deep Dive */}
        <FadeIn delay={0.4}>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              True Personalization That Learns You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalizationFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 rounded-2xl border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <feature.icon className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Agentic Tasks Section */}
        <FadeIn delay={0.6}>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="flex items-center mb-8">
              <Zap className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Acting as Your Personal Agent</h2>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Your AI doesn't just respond - it takes action on your behalf, handling complex tasks autonomously:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agenticTasks.map((task, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-lg">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Learning Timeline */}
        <FadeIn delay={0.8}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              How Your AI Evolves With You
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-8">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Week 1: Getting to Know You</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Learns your basic preferences, schedule, and communication style. Starts handling simple tasks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-8">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">30</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Month 1: Understanding Patterns</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Recognizes your daily routines, energy patterns, and starts making proactive suggestions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-8">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">90</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Month 3: True Partnership</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Anticipates your needs, handles complex multi-step tasks, feels like a trusted friend who knows you inside out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={1.0}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready for an AI That Truly Knows You?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Start your journey with a personal AI that grows with you every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border-2 border-purple-500 text-purple-500 font-semibold rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                See Personal Plans
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
