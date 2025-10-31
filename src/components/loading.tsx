// app/loading.tsx
"use client";

import React from 'react';
import { useTheme } from '@/context/themeContext';

function Loading() {
  const { isLightMode } = useTheme();

  const backgroundColor = isLightMode ? "#F2F5F5" : "#191A17";
  const primaryColor = isLightMode ? "#007AFF" : "#00C6FF";
  const secondaryColor = "#9BD35A";
  const accentColor = isLightMode ? "#FF6B6B" : "#FF5252";

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor,
      }}
    >
      {/* Main Orbital Animation */}
      <div className="relative mb-12">
        {/* Central Pulsing Core */}
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full animate-pulse"
            style={{ 
              backgroundColor: primaryColor,
              boxShadow: `0 0 60px ${primaryColor}40`
            }}>
          </div>
          
          {/* Inner Glow */}
          <div className="absolute inset-0 w-20 h-20 rounded-full animate-ping"
            style={{ backgroundColor: primaryColor }}>
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 animate-spin">
          {/* Fast Orbit - Small Dots */}
          <div className="absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: secondaryColor,
                  top: `${Math.sin((i * Math.PI) / 4) * 32}px`,
                  left: `${Math.cos((i * Math.PI) / 4) * 32}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Medium Orbit - Medium Dots */}
          <div className="absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 animate-spin"
            style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: accentColor,
                  top: `${Math.sin((i * Math.PI) / 3) * 48}px`,
                  left: `${Math.cos((i * Math.PI) / 3) * 48}px`,
                }}
              />
            ))}
          </div>

          {/* Slow Orbit - Large Dots */}
          <div className="absolute top-1/2 left-1/2 w-64 h-64 -mt-32 -ml-32 animate-spin"
            style={{ animationDuration: '6s' }}>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full animate-pulse"
                style={{
                  backgroundColor: primaryColor,
                  top: `${Math.sin((i * Math.PI) / 2) * 64}px`,
                  left: `${Math.cos((i * Math.PI) / 2) * 64}px`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-80 h-80 -ml-40 -mt-40 pointer-events-none">
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <circle
            cx="160"
            cy="160"
            r="64"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
          />
          <circle
            cx="160"
            cy="160"
            r="48"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3,3"
          />
          <circle
            cx="160"
            cy="160"
            r="32"
            stroke="url(#orbitGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,2"
          />
        </svg>
      </div>

      {/* Floating Brand */}
      <div className="text-center animate-float" style={{ animationDuration: '4s' }}>
        <h2 
          className="text-2xl font-bold opacity-90"
          style={{
            fontFamily: "Jost, sans-serif",
            background: "linear-gradient(90deg, #007AFF, #00C6FF, #007AFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Zig<span style={{ color: "#9BD35A" }}>.Africa</span>
        </h2>
      </div>

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: [primaryColor, secondaryColor, accentColor][i % 3],
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
        
        {/* Pulsing Background Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-5 animate-pulse"
          style={{ 
            backgroundColor: primaryColor,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full opacity-5 animate-pulse"
          style={{ 
            backgroundColor: secondaryColor,
            animationDuration: '3s',
            animationDelay: '1s'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Loading;