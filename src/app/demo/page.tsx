"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface FormData {
  agentType: string;
  companyName: string;
  location: string;
  culture: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  extra: string;
  currentChallenges: string;
  teamSize: string;
  timeline: string;
}

export default function DemoForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    agentType: "",
    companyName: "",
    location: "",
    culture: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    extra: "",
    currentChallenges: "",
    teamSize: "",
    timeline: ""
  });

  const totalSteps = 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      alert("❌ Something went wrong. Please try again or email us directly at saitejaredddy2@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = (stepNum: number) => {
    switch(stepNum) {
      case 1: return "Choose Your AI Agent";
      case 2: return "Tell Us About Your Business";
      case 3: return "Your Contact Information";
      case 4: return "Additional Details";
      default: return "";
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center p-6">
        <motion.div
          className="max-w-2xl mx-auto text-center bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Demo Booked Successfully!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Thank you for your interest! We'll reach out within 24 hours to schedule your personalized demo.
          </p>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-green-800 dark:text-green-400 mb-3">What happens next?</h3>
            <ul className="text-left text-green-700 dark:text-green-300 space-y-2">
              <li>✅ You'll receive a confirmation email shortly</li>
              <li>✅ Our team will contact you within 24 hours</li>
              <li>✅ We'll schedule a 15-minute personalized demo</li>
              <li>✅ See exactly how AI can transform your business</li>
            </ul>
          </div>
          <motion.a
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Homepage
          </motion.a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Book Your AI Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get a personalized 15-minute demo tailored to your business needs
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step > i + 1 ? 'bg-green-500 text-white' : 
                  step === i + 1 ? 'bg-blue-500 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {step > i + 1 ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div className={`h-1 w-16 mx-2 ${step > i + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Step {step} of {totalSteps}: {getStepTitle(step)}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What kind of AI Agent do you need?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: "Restaurant AI Receptionist", icon: "🍽️", desc: "Handle reservations & orders 24/7" },
                      { value: "Healthcare AI Assistant", icon: "🏥", desc: "Patient scheduling & inquiries" },
                      { value: "Law Firm Legal Assistant", icon: "⚖️", desc: "Client intake & consultations" },
                      { value: "Customer Support AI Agent", icon: "💬", desc: "24/7 customer service automation" },
                      { value: "Real Estate AI Assistant", icon: "🏠", desc: "Lead qualification & showings" },
                      { value: "Personal AI Assistant", icon: "🤖", desc: "Daily tasks & productivity" }
                    ].map((option) => (
                      <label key={option.value} className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                        formData.agentType === option.value 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                          : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                      }`}>
                        <input
                          type="radio"
                          name="agentType"
                          value={option.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{option.icon}</span>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{option.value}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{option.desc}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tell us about your business</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Company Name *</label>
                      <input
                        name="companyName"
                        type="text"
                        placeholder="Your Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Location</label>
                      <input
                        name="location"
                        type="text"
                        placeholder="City, State/Country"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Team Size</label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5 employees">1-5 employees</option>
                        <option value="6-20 employees">6-20 employees</option>
                        <option value="21-50 employees">21-50 employees</option>
                        <option value="51+ employees">51+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Implementation Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">When do you need this?</option>
                        <option value="ASAP - Within 1 week">ASAP - Within 1 week</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="Just exploring options">Just exploring options</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Current Challenges</label>
                    <textarea
                      name="currentChallenges"
                      placeholder="What problems are you hoping AI can solve? (e.g., missed calls, staff costs, customer wait times)"
                      value={formData.currentChallenges}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Your contact information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Your Name *</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="First and Last Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Your Position</label>
                      <input
                        name="position"
                        type="text"
                        placeholder="CEO, Manager, Owner, etc."
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Additional details (optional)</h2>
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Anything else you'd like us to know?
                    </label>
                    <textarea
                      name="extra"
                      placeholder="Tell us about your specific needs, questions, or what you'd like to see in the demo..."
                      value={formData.extra}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-3">What to expect in your demo:</h3>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                      <li>✅ Live demonstration of AI handling calls/chats from your industry</li>
                      <li>✅ ROI calculator showing potential savings for your business</li>
                      <li>✅ Q&A session about integration and setup</li>
                      <li>✅ Custom pricing based on your needs</li>
                      <li>✅ Next steps if you decide to move forward</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-600">
              <button
                type="button"
                onClick={prev}
                disabled={step === 1}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  step === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </button>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                {step} of {totalSteps}
              </div>

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={
                    (step === 1 && !formData.agentType) ||
                    (step === 2 && !formData.companyName) ||
                    (step === 3 && (!formData.name || !formData.email))
                  }
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    (step === 1 && !formData.agentType) ||
                    (step === 2 && !formData.companyName) ||
                    (step === 3 && (!formData.name || !formData.email))
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                  }`}
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className={`flex items-center px-8 py-3 rounded-xl font-bold transition-all duration-200 ${
                    isSubmitting || !formData.name || !formData.email
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Booking Demo...' : '🚀 Book My Demo'}
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          🔒 Your information is secure and will never be shared • 📞 Free 15-minute demo • 🚀 No commitment required
        </motion.div>
      </div>
    </div>
  );
}
