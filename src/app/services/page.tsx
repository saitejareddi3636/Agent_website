"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, User, Zap, Clock, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <MessageCircle className="w-16 h-16 text-electricCyan" />,
      title: "Niro-AI Customer Support",
      description: "24/7 intelligent customer service that understands context and provides instant, accurate responses.",
      features: ["Multi-language support", "Instant responses", "Learning capabilities", "Human escalation"],
      price: "Starting at $199/month"
    },
    {
      icon: <Phone className="w-16 h-16 text-cyberPurple" />,
      title: "Niro-AI Receptionist",
      description: "Professional phone handling, appointment scheduling, and customer screening with natural conversation.",
      features: ["Appointment booking", "Call screening", "Information gathering", "Calendar integration"],
      price: "Starting at $149/month"
    },
    {
      icon: <User className="w-16 h-16 text-neonRed" />,
      title: "Personal Niro-AI Assistant",
      description: "Your digital companion for managing tasks, schedules, reminders, and personal productivity.",
      features: ["Task management", "Schedule optimization", "Personal reminders", "Health tracking"],
      price: "Starting at $79/month"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-accentYellow" />,
      title: "Lightning Fast",
      description: "Instant responses and real-time processing"
    },
    {
      icon: <Clock className="w-12 h-12 text-auroraBlue" />,
      title: "24/7 Availability",
      description: "Never miss a customer or important task"
    },
    {
      icon: <Shield className="w-12 h-12 text-electricCyan" />,
      title: "Secure & Private",
      description: "Enterprise-grade security and data protection"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-cyberPurple to-auroraBlue text-white min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-accentYellow">AI Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive AI solutions designed to transform your business operations and personal productivity
            </motion.p>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Automate complex business logic, data entry, and research. 
              Niro-AI scales your operations instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-cyberPurple mb-4">{service.price}</p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-cyberPurple to-auroraBlue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-600">Built for performance, reliability, and ease of use</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyberPurple to-auroraBlue text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how our AI solutions can streamline your operations and boost productivity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-accentYellow text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
