"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { 
  ChevronDown, 
  Shield, 
  Users, 
  Brain, 
  DollarSign,
  Clock,
  Phone,
  Lock,
  Zap
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
  category: string;
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "Will Niro-AI replace my human employees?",
      answer: "No! Niro-AI is designed to augment your team, not replace them. It handles routine, repetitive tasks so your human staff can focus on complex problems, relationship building, and high-value activities. Think of AI as your 24/7 digital assistant that frees up your team for more meaningful work.",
      icon: Users,
      category: "Staff Concerns"
    },
    {
      question: "How secure is my business data?",
      answer: "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR adherence. Your data is never shared with third parties, and we offer on-premise deployment options for maximum security. All conversations are encrypted and can be automatically deleted after your specified retention period.",
      icon: Shield,
      category: "Security"
    },
    {
      question: "What if the AI makes mistakes?",
      answer: "Our AI learns from every interaction and includes built-in safeguards. For critical decisions, the AI escalates to human staff. We provide detailed logs of all interactions, and you can set confidence thresholds for when human intervention is required. Plus, our system improves accuracy over time as it learns your business.",
      icon: Brain,
      category: "Reliability"
    },
    {
      question: "How much will this actually save me?",
      answer: "Most businesses save 60-80% on support costs. If you're paying $3,000/month for a receptionist, our AI costs $199/month - that's $2,800+ monthly savings or $33,600+ yearly. Plus, no sick days, vacation pay, or benefits. ROI typically achieved within the first month.",
      icon: DollarSign,
      category: "Cost Savings"
    },
    {
      question: "How quickly can I get started?",
      answer: "Setup takes 24-48 hours for most businesses. We handle the technical integration while you focus on customizing responses and training the AI on your specific processes. Most clients are fully operational within a week, and we provide white-glove onboarding support.",
      icon: Clock,
      category: "Implementation"
    },
    {
      question: "Can it handle phone calls like a real person?",
      answer: "Yes! Our AI uses advanced voice synthesis that sounds completely natural. It can handle complex conversations, transfer calls when needed, take detailed messages, and even schedule appointments. Customers often don't realize they're speaking with AI.",
      icon: Phone,
      category: "Voice Capabilities"
    },
    {
      question: "What if I need to cancel or change plans?",
      answer: "No long-term contracts required. You can upgrade, downgrade, or cancel anytime with 30 days notice. We're confident in our service quality - most clients expand their AI usage rather than reduce it once they see the results.",
      icon: Lock,
      category: "Flexibility"
    },
    {
      question: "How does it integrate with my existing systems?",
      answer: "We connect seamlessly with 500+ popular business tools including Salesforce, HubSpot, Shopify, Square, Google Calendar, Slack, and more. Our API allows custom integrations, and our team handles the technical setup for you at no extra cost.",
      icon: Zap,
      category: "Integrations"
    },
    {
      question: "Can I customize Niro-AI's personality?",
      answer: "Yes! You can define the tone, voice, and personality of your Niro-AI instance to match your brand identity. Whether you want professional, friendly, witty, or strictly formal, we can tune it to your needs.",
      icon: Brain,
      category: "Customization"
    },
    {
      question: "How long does it take to set up?",
      answer: "Most clients are up and running within 24-48 hours. We handle the technical setup and training based on your provided knowledge base or documentation. For complex enterprise integrations, it might take 1-2 weeks.",
      icon: Clock,
      category: "Implementation"
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data storage and transmission. We are SOC2 compliant and never train our public models on your private business data without explicit permission.",
      icon: Shield,
      category: "Security"
    }
  ];

  // const categories = [...new Set(faqData.map(item => item.category))]; 

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common concerns about AI implementation
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.question}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-16">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is here to help you understand how AI can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Schedule Free Consultation
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                  Watch Demo Video
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
