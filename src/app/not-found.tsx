// app/not-found.tsx
"use client";

import React from 'react';
import { useTheme } from '@/context/themeContext';
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaHeadset, FaWhatsapp, FaWifi, FaExclamationTriangle } from 'react-icons/fa';

function NotFound() {
  const { isLightMode } = useTheme();

  const backgroundColor = isLightMode ? "#F2F5F5" : "#191A17";
  const textColor = isLightMode ? "#18181B" : "#FFFFFF";
  const cardBackground = isLightMode ? "#FFFFFF" : "#1E1F1C";
  const borderColor = isLightMode ? "#E2E8F0" : "#334155";
  const accentColor = isLightMode ? "#9BD35A" : "#488403ff";
  const successColor = isLightMode ? "#10b913ff" : "#19c310ff";

  // SVG Background Components (inspired by homepage)
  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute -top-20 -right-20 w-80 h-80 opacity-10" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill={accentColor} />
      </svg>
      <svg className="absolute top-1/4 -left-20 w-60 h-60 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="60" fill={accentColor} />
      </svg>
      <svg className="absolute bottom-20 right-1/4 w-40 h-40 opacity-10" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="40" fill={accentColor} />
      </svg>
    </div>
  );

  const NetworkGrid = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={borderColor} strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );

  const ConnectionLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,100 Q200,50 400,100 T800,100"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.1"
        />
        <path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.1"
        />
      </svg>
    </div>
  );

  // Custom 404 SVG with green theme
  const NotFoundIllustration = () => (
    <div className="relative mb-8">
      <div className="w-48 h-48 mx-auto relative">
        {/* Main circle */}
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Background circle */}
          <circle cx="100" cy="100" r="90" fill={accentColor + '20'} />
          
          {/* Signal waves */}
          <circle cx="100" cy="100" r="70" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="5,5" opacity="0.6">
            <animate attributeName="r" from="70" to="85" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Inner circle */}
          <circle cx="100" cy="100" r="50" fill={cardBackground} stroke={borderColor} strokeWidth="2" />
          
          {/* 404 Text */}
          <text 
            x="100" 
            y="95" 
            textAnchor="middle" 
            className="text-2xl font-bold"
            fill={accentColor}
            style={{ fontFamily: 'Jost, sans-serif', fontSize: '28px' }}
          >
            404
          </text>
          
          {/* Exclamation mark */}
          <path 
            d="M100 115 L100 135 M100 140 L100 145" 
            stroke={accentColor} 
            strokeWidth="6" 
            strokeLinecap="round"
          />
          
          {/* Signal icon */}
          <path 
            d="M70 70 L85 55 M130 70 L115 55 M70 130 L85 145 M130 130 L115 145" 
            stroke={accentColor} 
            strokeWidth="3" 
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        
        {/* Floating elements */}
        <div className="absolute top-4 left-4 w-6 h-6">
          <div className="w-full h-full rounded-full animate-bounce" style={{ backgroundColor: accentColor, opacity: 0.3 }} />
        </div>
        <div className="absolute bottom-4 right-4 w-4 h-4">
          <div className="w-full h-full rounded-full animate-bounce" style={{ backgroundColor: accentColor, opacity: 0.4, animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center px-4 py-20 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <NetworkGrid />
        <FloatingOrbs />
        <ConnectionLines />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Content */}
        <div 
          className="p-8 rounded-2xl shadow-xl mx-auto max-w-md group transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: cardBackground,
            border: `1px solid ${borderColor}`,
          }}
        >
          {/* Top accent bar */}
          <div 
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          <NotFoundIllustration />
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
              style={{ backgroundColor: backgroundColor + '80', borderColor }}
            >
              <FaExclamationTriangle className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-medium">PAGE NOT FOUND</span>
            </div>
            
            <h1 
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Jost, sans-serif",
              }}
            >
              Lost in <span style={{ color: accentColor }}>Cyberspace</span>
            </h1>
            
            <p className="text-lg opacity-80 mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-sm opacity-60 mb-8">
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/"
              className="group/btn px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-center relative overflow-hidden flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #9BD35A, #96f23aff)",
                color: "white",
              }}
            >
              <FaHome className="w-4 h-4" />
              <span className="relative z-10">Go Home</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #96f23aff, #9BD35A)",
                }}
              />
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group/btn px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden"
              style={{
                backgroundColor: cardBackground,
                color: textColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="relative z-10">Go Back</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: accentColor }}
              />
            </button>
          </div>

          {/* Additional Help */}
          <div className="pt-6 border-t" style={{ borderColor: `${borderColor}50` }}>
            <p className="text-sm opacity-70 mb-4 flex items-center justify-center gap-2">
              <FaHeadset className="w-4 h-4" style={{ color: accentColor }} />
              Need help?
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:support@zigisp.com"
                className="text-sm opacity-80 hover:opacity-100 transition-all duration-200 flex items-center gap-2 group/link"
                style={{ color: accentColor }}
              >
                <FaHeadset className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
                Support
              </a>
              <a 
                href="https://wa.me/254708966189"
                className="text-sm opacity-80 hover:opacity-100 transition-all duration-200 flex items-center gap-2 group/link"
                style={{ color: successColor }}
              >
                <FaWhatsapp className="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Zig Branding */}
        <div className="mt-12 group">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              style={{
                backgroundColor: accentColor + '20',
                color: accentColor,
              }}
            >
              <FaWifi className="w-5 h-5" />
            </div>
            <h2 
              className="text-2xl font-bold"
              style={{
                fontFamily: "Jost, sans-serif",
              }}
            >
              <span style={{ color: accentColor }}>Zig</span>
              <span className="opacity-80">.Africa</span>
            </h2>
          </div>
          <p className="text-sm opacity-60 transition-opacity duration-300 group-hover:opacity-80">
            Smart ISP Billing & Management
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;