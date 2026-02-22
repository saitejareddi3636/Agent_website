"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Shield } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import FAQAccordion from "../components/FAQAccordion";
import CloudsBackground from "./CloudsBackground";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate mountain opacity based on scroll (fades out over first 400px)
  const mountainOpacity = Math.max(0, 1 - scrollY / 400);
  const features = [
    {
      icon: <Sparkles className="w-12 h-12 text-electricCyan" />,
      title: "AI-Powered Automation",
      text: "Automate repetitive tasks and provide instant responses using smart AI.",
    },
    {
      icon: <Cpu className="w-12 h-12 text-cyberPurple" />,
      title: "Scalable Infrastructure",
      text: "Handle thousands of users seamlessly with scalable infrastructure.",
    },
    {
      icon: <Shield className="w-12 h-12 text-neonRed" />,
      title: "Security & Privacy",
      text: "Data encryption, privacy control, following best practices for safety.",
    },
  ];

  const posts = [
    { title: "How AI is Transforming Customer Support", slug: "ai-support" },
    { title: "Why Personalized AI Assistants Matter", slug: "personal-ai" },
    { title: "Enterprise AI: Scaling Safely", slug: "enterprise-ai" },
  ];

  const testimonials = [
    {
      text: "Our customer support costs dropped by 40% after switching to their AI agents. Clients love the 24/7 response time!",
      author: "Sarah Johnson",
      role: "CEO, TechFlow"
    },
    {
      text: "The AI receptionist handles bookings seamlessly. It feels like we hired a full-time assistant at a fraction of the cost.",
      author: "Michael Lee",
      role: "Founder, HealthFirst Clinic"
    },
    {
      text: "My personal AI assistant helps track my diet, reminds me of meetings, and even suggests productivity tips daily!",
      author: "Emily Davis",
      role: "Entrepreneur"
    }
  ];

  return (
    <>
      {/* Global Clouds Background with Parallax */}
      <CloudsBackground />

      {/* Hero Section with Mountain Background */}
      <section 
        className="relative text-white min-h-[80vh] flex items-center overflow-hidden"
      >
        {/* Mountain layer - fades on scroll */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ease-out"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            opacity: mountainOpacity,
          }}
        />
        
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeInUp">
                AI that thinks. Acts. Delivers.{" "}
                <span className="block text-3xl md:text-5xl mt-2">Automate everything with AGEN.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                AI agents for enterprise support — available 24/7, scalable, and indistinguishable from human conversation.
              </p>

              <motion.div 
                className="flex justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/services"
                  className="px-8 py-4 bg-accentYellow text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  Explore Services
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  View Pricing
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex-1 hidden md:flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/globe.svg"
                alt="AI Globe"
                className="w-[350px] md:w-[500px] drop-shadow-xl animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
              className="mt-4 text-lg text-gray-200"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by businesses and individuals who rely on AI to simplify their daily tasks.
          </motion.p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <p className="text-white mb-4">"{testimonial.text}"</p>
                <h4 className="font-semibold text-yellow-300">{testimonial.author}</h4>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Problem We Solve
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Small businesses lose time and money on repetitive tasks. Hiring staff is expensive, and customers expect 24/7 support.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-4 border-red-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-red-400 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-4 text-white">High Costs</h3>
            <p className="text-gray-200">
              Hiring a receptionist or support team costs $3,000+ per month. Our AI receptionist works for just $199/month.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-4 border-cyan-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-cyan-400 text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-4 text-white">Missed Calls & Bookings</h3>
            <p className="text-gray-200">
              Businesses lose clients when calls go unanswered. Our AI answers 24/7 — no missed opportunities ever again.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl border-l-4 border-purple-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-purple-400 text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-4 text-white">No Personalization</h3>
            <p className="text-gray-200">
              Generic chatbots forget context. Our agents remember your clients, preferences, and complete conversation history.
            </p>
          </motion.div>
        </div> {/* Close .grid for Pain Points section */}
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industries We Serve
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our AI agents are built for small businesses and busy professionals across industries.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl mb-4">🍴</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Restaurants</h3>
              <p className="text-gray-200">Handle reservations, orders, and customer inquiries automatically 24/7.</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Clinics & Healthcare</h3>
              <p className="text-gray-200">Manage patient bookings, reminders, and follow-ups with HIPAA compliance.</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Real Estate</h3>
              <p className="text-gray-200">Qualify leads, schedule showings, and manage property inquiries instantly.</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Law Firms</h3>
              <p className="text-gray-200">Automate client intake, consultations, and legal inquiry management.</p>
            </motion.div>
          </div> {/* Close .grid for Industries section */}
          </div>
        </div> {/* Close .max-w-7xl mx-auto for Industries section */}
      </section>

      {/* Social Proof / Use Cases */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              See the Impact
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Real-world examples of how AI agents transform businesses.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="font-semibold text-xl mb-3 text-white">Dental Clinic Success</h3>
              <p className="text-gray-200 mb-4">AI receptionist booked 120+ patient appointments in the first month, saving $1,200 in staffing costs.</p>
              <div className="flex items-center text-green-400 font-semibold">
                <span className="text-2xl mr-2">💰</span>
                $1,200/month saved
              </div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-semibold text-xl mb-3 text-white">Restaurant Growth</h3>
              <p className="text-gray-200 mb-4">Never missed a reservation call again. 24/7 AI booking doubled weekend reservations and increased revenue.</p>
              <div className="flex items-center text-green-400 font-semibold">
                <span className="text-2xl mr-2">📈</span>
                2x weekend bookings
              </div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-semibold text-xl mb-3 text-white">Law Firm Efficiency</h3>
              <p className="text-gray-200 mb-4">AI legal assistant handled 200+ client intake forms, reducing paralegal workload by 40% and improving response times.</p>
              <div className="flex items-center text-green-400 font-semibold">
                <span className="text-2xl mr-2">⚡</span>
                40% workload reduction
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Features That Make Us Stand Out
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Built for performance, security, and user experience.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-center">{f.title}</h3>
              <p className="text-gray-300 text-center">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get your AI agent up and running in just 3 simple steps. No technical expertise required.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Sign Up</h3>
              <p className="text-gray-200">
                Choose your plan and create your account. Takes less than 2 minutes to get started.
              </p>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Customize</h3>
              <p className="text-gray-200">
                Train your AI agent with your business info, FAQ, and preferences. We'll help you set it up.
              </p>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Go Live</h3>
              <p className="text-gray-200">
                Launch your AI agent and start serving customers 24/7. See results within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join hundreds of businesses saving $2,000+ monthly with AI automation. Get started with a free demo today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="bg-accentYellow text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              📅 Book Free Demo
            </Link>
            <Link 
              href="/pricing" 
              className="bg-white/20 backdrop-blur-md border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </motion.div>
          <motion.p 
            className="text-sm mt-6 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            ✅ No Setup Fees • ✅ 7-Day Free Trial • ✅ Cancel Anytime
          </motion.p>
        </div>
      </section>

      {/* Why Book a Demo */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div 
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl shadow-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Book a Demo?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            In just 15 minutes, see exactly how an AI agent can save your business time, 
            cut costs, and improve customer satisfaction. No generic pitch - this is tailored to your business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Personalized Walkthrough</h3>
              <p className="text-sm opacity-90">See your specific industry use case in action</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-lg mb-2">Clear ROI Calculator</h3>
              <p className="text-sm opacity-90">See exact cost savings for your business size</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Live Demo</h3>
              <p className="text-sm opacity-90">Watch AI handle real scenarios from your industry</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/demo"
              className="inline-flex items-center px-10 py-4 bg-white text-indigo-700 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              📅 Book My Personalized Demo
              <span className="ml-2">→</span>
            </Link>
            <p className="text-sm mt-4 opacity-75">Free • 15 minutes • No commitment required</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Preview Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 dark:text-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest Insights
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Stay updated with the latest trends in AI and automation.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl transition-all duration-300 p-6"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Discover how AI is revolutionizing the way we work and live. Learn about the latest developments and best practices.</p>
              <Link href={`/blog/${post.slug}`} className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />
    </>
  );
}
