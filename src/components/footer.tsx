"use client";

import React from "react";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt, FaFileContract, FaCookieBite } from "react-icons/fa";
import { useTheme } from "@/context/themeContext";

function Footer() {
  const { isLightMode } = useTheme();

  const backgroundColor = isLightMode ? "#F8FAFC" : "#1E1F1C";
  const textColor = isLightMode ? "#1E293B" : "#F1F5F9";
  const borderColor = isLightMode ? "#E2E8F0" : "#334155";
  const cardBackground = isLightMode ? "#FFFFFF" : "#1E1F1C";
  const accentColor = isLightMode ? "#9BD35A" : "#488403ff";

  // SVG Background Components
  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute -bottom-20 -left-20 w-60 h-60 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill={accentColor} />
      </svg>
      <svg className="absolute -top-10 -right-10 w-40 h-40 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="60" fill={accentColor} />
      </svg>
      <svg className="absolute top-1/2 left-1/3 w-20 h-20 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="40" fill={accentColor} />
      </svg>
    </div>
  );

  const NetworkGrid = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footerGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={borderColor} strokeWidth="0.5" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footerGrid)" />
      </svg>
    </div>
  );

  const ConnectionLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100,0 Q400,50 800,100"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.05"
        />
        <path
          d="M0,150 Q200,100 400,150 T800,150"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.05"
        />
      </svg>
    </div>
  );

  const AbstractShapes = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute bottom-20 right-20 w-24 h-24 opacity-5" viewBox="0 0 100 100">
        <polygon points="50,5 85,35 85,75 50,95 15,75 15,35" fill={accentColor} />
      </svg>
      <svg className="absolute top-10 left-20 w-16 h-16 opacity-5" viewBox="0 0 100 100">
        <rect x="25" y="25" width="50" height="50" rx="8" fill={accentColor} transform="rotate(45 50 50)" />
      </svg>
    </div>
  );

  return (
    <footer
      className="w-full text-sm transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: "Jost, sans-serif",
      }}
    >
      {/* Global Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
      `}</style>

      {/* Background Elements */}
      <NetworkGrid />
      <FloatingOrbs />
      <ConnectionLines />
      <AbstractShapes />
      
      {/* Animated Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
        style={{
          backgroundColor: accentColor,
          animation: "pulse-glow 8s ease-in-out infinite",
          filter: "blur(40px)"
        }}
      />

      {/* ===== Footer Main Content ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 relative z-10">
        
        {/* Main grid with two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* ===== Left Column: Logo & Info ===== */}
          <div className="space-y-6">
            {/* Logo Section */}
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div 
                  className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`
                  }}
                />
                <h2
                  className="text-3xl font-bold tracking-tight relative"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    background: "linear-gradient(135deg, #9BD35A 0%, #96f23a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 4px rgba(155, 211, 90, 0.3))"
                  }}
                >
                  AI4Kenya
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md leading-relaxed opacity-80 text-lg">
              Leading Artificial Intelligence solutions provider in Kenya. We deliver cutting-edge AI, 
              machine learning, and data analytics services to transform businesses across Africa.
            </p>

            {/* Contact Info */}
            <div className="pt-4">
              <p className="text-sm opacity-80 mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {[
                  { 
                    icon: <FaTwitter size={18} />, 
                    color: "#1DA1F2",
                    name: "Twitter",
                    href: "https://twitter.com/ai4kenya"
                  },
                  { 
                    icon: <FaLinkedin size={18} />, 
                    color: "#0077B5",
                    name: "LinkedIn",
                    href: "https://linkedin.com/company/ai4kenya"
                  },
                  { 
                    icon: <FaInstagram size={18} />, 
                    color: "#E4405F",
                    name: "Instagram",
                    href: "https://instagram.com/ai4kenya"
                  },
                  { 
                    icon: <FaWhatsapp size={18} />, 
                    color: "#25D366",
                    name: "WhatsApp",
                    href: "https://wa.me/254700000000"
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      backgroundColor: cardBackground,
                      color: social.color,
                      border: `1px solid ${borderColor}`
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundColor: social.color + '15'
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Right Column: Quick Access & Get in Touch ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Quick Access Section */}
            <div className="space-y-6">
              <h4
                className="text-xl font-semibold mb-2 flex items-center gap-2 group"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                <span>Quick Links</span>
                <FaArrowRight 
                  size={14} 
                  className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: accentColor }}
                />
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", emoji: "🏠", href: "/" },
                  { name: "Products", emoji: "🛠️", href: "#products" },
                  { name: "Blog", emoji: "📝", href: "/blog" },
                  { name: "Contact", emoji: "📞", href: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 group/item p-2 rounded-lg transition-all duration-200 opacity-90 hover:opacity-100 hover:translate-x-2"
                      style={{
                        backgroundColor: 'transparent',
                      }}
                    >
                      <span 
                        className="text-lg transition-transform duration-300 group-hover/item:scale-110"
                        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                      >
                        {item.emoji}
                      </span>
                      <span 
                        className="border-b border-transparent group-hover/item:border-current transition-all duration-300 relative"
                      >
                        {item.name}
                        <div 
                          className="absolute bottom-0 left-0 w-0 h-0.5 group-hover/item:w-full transition-all duration-300"
                          style={{ backgroundColor: accentColor }}
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch Section */}
            <div className="space-y-6">
              <h4
                className="text-xl font-semibold mb-2 flex items-center gap-2 group"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                <span>Get in Touch</span>
                <FaEnvelope 
                  size={14} 
                  className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: accentColor }}
                />
              </h4>
              
              {/* Contact Details */}
              <div className="space-y-4">
                <a 
                  href="mailto:info@ai4kenya.co.ke"
                  className="group/item flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: cardBackground, border: `1px solid ${borderColor}` }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12"
                    style={{
                      backgroundColor: '#3B82F620',
                      color: '#3B82F6',
                    }}
                  >
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Email</p>
                    <p className="font-medium group-hover/item:text-blue-500 transition-colors duration-300">
                      info@ai4kenya.co.ke
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:254700000000"
                  className="group/item flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: cardBackground, border: `1px solid ${borderColor}` }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12"
                    style={{
                      backgroundColor: '#10B98120',
                      color: '#10B981',
                    }}
                  >
                    <FaPhone size={16} />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Phone</p>
                    <p className="font-medium group-hover/item:text-green-500 transition-colors duration-300">
                      +254 700 000 000
                    </p>
                  </div>
                </a>

                <div 
                  className="group/item flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: cardBackground, border: `1px solid ${borderColor}` }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12"
                    style={{
                      backgroundColor: '#8B5CF620',
                      color: '#8B5CF6',
                    }}
                  >
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">Location</p>
                    <p className="font-medium group-hover/item:text-purple-500 transition-colors duration-300">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Divider ===== */}
        <div 
          className="border-t mt-12 pt-8 relative"
          style={{ borderColor }}
        >
          {/* Animated divider accent */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`
            }}
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-70 flex items-center gap-2">
              <span>© {new Date().getFullYear()} AI4Kenya</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm opacity-70">
              {[
                { 
                  name: "Privacy Policy", 
                  href: "#", 
                  icon: <FaShieldAlt size={12} />
                },
                { 
                  name: "Terms of Service", 
                  href: "#", 
                  icon: <FaFileContract size={12} />
                },
                { 
                  name: "Cookies", 
                  href: "#", 
                  icon: <FaCookieBite size={12} />
                },
              ].map((policy, index) => (
                <a 
                  key={index}
                  href={policy.href}
                  className="flex items-center gap-2 hover:underline transition-all duration-200 group hover:opacity-100 opacity-70"
                >
                  {policy.icon}
                  <span>{policy.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;