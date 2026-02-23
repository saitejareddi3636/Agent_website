"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeDropdowns = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
            AI
          </div>
          <span className="font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Niro-AI
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleServicesDropdown}
              className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Services 
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {/* Dropdown */}
            {servicesOpen && (
              <ul className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-xl rounded-lg mt-2 w-56 border border-gray-200 dark:border-gray-700 py-2 z-50">
                <li>
                  <Link
                    href="/services/customer-support"
                    onClick={closeDropdowns}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">AI Customer Support</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">24/7 automated support</div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/receptionist"
                    onClick={closeDropdowns}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">AI Receptionist</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Virtual front desk assistant</div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/assistant"
                    onClick={closeDropdowns}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">Personal AI Assistant</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Your personal productivity partner</div>
                  </Link>
                </li>
              </ul>
            )}
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
          <ul className="flex flex-col p-4 space-y-2 font-medium text-gray-700 dark:text-gray-300">
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
              <div className="py-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide font-semibold">Services</span>
                <div className="mt-2 space-y-1 pl-4">
                  <Link 
                    href="/services/customer-support" 
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    AI Customer Support
                  </Link>
                  <Link 
                    href="/services/receptionist" 
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    AI Receptionist
                  </Link>
                  <Link 
                    href="/services/assistant" 
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Personal AI Assistant
                  </Link>
                </div>
              </div>
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
