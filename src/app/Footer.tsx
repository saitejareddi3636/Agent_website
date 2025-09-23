"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 mt-20 border-t border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            AI Agents
          </h3>
          <p className="text-gray-400 dark:text-gray-500">
            Smart AI solutions for customer support and personal productivity.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Documentation</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Support</Link></li>
            <li><Link href="#" className="hover:text-indigo-400 transition-colors">API</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white dark:text-gray-200 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors hover:scale-110 transform"><Facebook /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors hover:scale-110 transform"><Twitter /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors hover:scale-110 transform"><Linkedin /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors hover:scale-110 transform"><Github /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 dark:border-gray-600 pt-6 text-center text-gray-500 dark:text-gray-600 text-sm">
        © {new Date().getFullYear()} AI Agents. All rights reserved. • Built with ❤️ and AI
      </div>
    </footer>
  );
}
