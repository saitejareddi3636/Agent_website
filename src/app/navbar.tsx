"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          AI Agents
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Services ▾
            </button>
            {/* Dropdown */}
            <ul className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 w-48 border border-gray-200 dark:border-gray-700">
              <li>
                <Link
                  href="/services/customer-support"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  AI Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/receptionist"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  AI Receptionist
                </Link>
              </li>
              <li>
                <Link
                  href="/services/assistant"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Personal AI Assistant
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side - Theme toggle + Mobile menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col p-4 space-y-4 font-medium text-gray-700 dark:text-gray-300">
            <li>
              <Link 
                href="/" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/pricing" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => setMobileOpen(false)}
                className="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
