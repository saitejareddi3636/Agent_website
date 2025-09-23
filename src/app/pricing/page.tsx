"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      features: ["Basic support", "Limited usage", "Email only"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$79",
      features: ["24/7 support", "Unlimited usage", "Voice + Chat"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Dedicated setup", "Custom integrations", "SLAs"],
      highlight: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">Choose a plan that fits your needs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className={`p-8 rounded-2xl shadow-lg transition transform hover:-translate-y-2 ${
              plan.highlight
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-900"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className={`text-4xl font-bold mb-6 ${plan.highlight ? "text-white" : "text-indigo-600"}`}>{plan.price}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">✔️</span> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition ${
              plan.highlight
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}>
              {plan.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
