"use client";
import FadeIn from "../../../components/FadeIn";
import { 
  Phone, 
  Calendar, 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  Utensils,
  Stethoscope,
  Home,
  Scale,
  CreditCard,
  Bell
} from "lucide-react";
import Link from "next/link";

export default function Receptionist() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Call Answering",
      description: "Never miss a call again. Professional greetings and call handling around the clock."
    },
    {
      icon: Calendar,
      title: "Smart Booking System",
      description: "Automatically schedule appointments, check availability, and send confirmations."
    },
    {
      icon: MessageCircle,
      title: "SMS & WhatsApp",
      description: "Send reminders, confirmations, and follow-ups via text and WhatsApp."
    },
    {
      icon: CheckCircle,
      title: "Custom Scripts",
      description: "Personalized greetings and responses that match your business voice and brand."
    },
    {
      icon: Clock,
      title: "Appointment Reminders",
      description: "Automated reminders reduce no-shows by up to 60% with smart timing."
    },
    {
      icon: CreditCard,
      title: "Payment Collection",
      description: "Process payments over the phone and send secure payment links."
    }
  ];

  const industries = [
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Take reservations, handle takeout orders, answer menu questions",
      savings: "Save $2,500/month on front desk staff"
    },
    {
      icon: Stethoscope,
      title: "Medical Clinics",
      description: "Schedule appointments, handle insurance questions, send reminders",
      savings: "Reduce missed appointments by 60%"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Qualify leads, schedule showings, answer property questions",
      savings: "Never miss a hot lead again"
    },
    {
      icon: Scale,
      title: "Law Firms",
      description: "Screen clients, schedule consultations, handle intake calls",
      savings: "Professional first impression 24/7"
    }
  ];

  const benefits = [
    "Replace $3,000+ monthly receptionist salary",
    "Answer calls in multiple languages",
    "Integrate with your existing calendar system",
    "Handle multiple calls simultaneously", 
    "Detailed call logs and analytics",
    "No sick days, breaks, or training needed"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
                <Phone className="text-white w-12 h-12" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              AI Receptionist
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Meet your new receptionist. Niro-AI answers calls, books appointments, 
              and greets visitors with perfect accuracy 24/7.
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
                <feature.icon className="w-10 h-10 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
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

        {/* Industries Section */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Perfect for Your Industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/30 rounded-2xl border border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <industry.icon className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-800 rounded-lg inline-block">
                    <span className="text-green-800 dark:text-green-200 font-semibold">
                      💰 {industry.savings}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Benefits Section */}
        <FadeIn delay={0.6}>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="flex items-center mb-8">
              <Bell className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">Replace Your Receptionist Today</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Cost Comparison */}
        <FadeIn delay={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-red-50 dark:bg-red-900/20 rounded-2xl border-2 border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
                Traditional Receptionist
              </h3>
              <div className="space-y-3 text-red-600 dark:text-red-300">
                <div>💸 $3,000+ monthly salary</div>
                <div>🏥 Health insurance & benefits</div>
                <div>😴 Only works business hours</div>
                <div>📞 Can only handle one call at a time</div>
                <div>🤒 Sick days and vacation time</div>
                <div>📚 Requires training and management</div>
              </div>
            </div>

            <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
                AI Receptionist
              </h3>
              <div className="space-y-3 text-green-600 dark:text-green-300">
                <div>💰 Starting at $199/month</div>
                <div>⚡ No additional costs</div>
                <div>🌙 Works 24/7/365</div>
                <div>📱 Handles unlimited calls</div>
                <div>🤖 Never needs a break</div>
                <div>🚀 Ready to work immediately</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={1.0}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Start Saving $3,000+ Per Month Today
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join hundreds of businesses already using AI receptionists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Free Demo Call
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-4 border-2 border-green-500 text-green-500 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                See Pricing Plans
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
