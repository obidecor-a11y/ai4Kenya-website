"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useTheme } from "@/context/themeContext";
import { useRouter, usePathname } from "next/navigation";

function Header() {
  const { isLightMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle section scrolling
  const scrollToSection = (sectionId: string) => {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const headerHeight = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Enhanced navigation handler
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home with hash
      if (pathname !== '/') {
        router.push(`/${href}`);
      } else {
        // We're already on home page, just scroll to section
        scrollToSection(href);
      }
    } else {
      // Regular page navigation
      router.push(href);
    }
    
    setIsMobileMenuOpen(false);
  };

  // Handle scrolling after navigation from other pages
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash;
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        scrollToSection(hash);
        // Clear the hash from URL after scrolling
        window.history.replaceState(null, '', window.location.pathname);
      }, 100);
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const backgroundColor = isLightMode ? "#F8FAFC" : "#1E1F1C";
  const textColor = isLightMode ? "#1E293B" : "#F1F5F9";
  const borderColor = isLightMode ? "#E2E8F0" : "#334155";
  const cardBackground = isLightMode ? "#FFFFFF" : "#1E1F1C";
  const accentColor = isLightMode ? "#2563EB" : "#3B82F6";

  const navItems = [
    { 
      name: "Home", 
      href: "/",
    },
    { 
      name: "About", 
      href: "#about",
    },
    { 
      name: "Products", 
      href: "#products",
      dropdown: true
    },
    { 
      name: "Blog", 
      href: "/blog",
    },
    { name: "Contact", href: "/contact" },
  ];

  const productItems = [
    { name: "AI Consulting", href: "/products/ai-consulting" },
    { name: "Machine Learning", href: "/products/machine-learning" },
    { name: "Data Analytics", href: "/products/data-analytics" },
    { name: "Custom AI Solutions", href: "/products/custom-solutions" },
  ];

  // SVG Background Components
  const HeaderBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute top-0 right-0 w-32 h-32 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill={accentColor} />
      </svg>
      <svg className="absolute top-1/2 left-10 w-24 h-24 opacity-5" viewBox="0 0 100 100">
        <polygon points="50,5 85,35 85,75 50,95 15,75 15,35" fill={accentColor} />
      </svg>
    </div>
  );

  const NetworkLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,50 Q300,30 600,50 T1200,50"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.05"
        />
      </svg>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "backdrop-blur-xl bg-opacity-90 shadow-lg" 
            : "bg-transparent"
        }`}
        style={{
          backgroundColor: isScrolled ? backgroundColor + 'E6' : "transparent",
          borderBottom: isScrolled ? `1px solid ${borderColor}30` : "none",
        }}
      >
        <HeaderBackground />
        <NetworkLines />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo - Left */}
            <div className="flex items-center">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="relative">
                  <div 
                    className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`
                    }}
                  />
                  <h2
                    className="text-2xl md:text-3xl font-bold tracking-tight relative"
                    style={{
                      fontFamily: "Jost, sans-serif",
                      background: "linear-gradient(135deg, #53eb25ff 0%, #3B82F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 2px 4px rgba(37, 99, 235, 0.3))"
                    }}
                  >
                    AI4Kenya
                  </h2>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-1 relative">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    // Products Dropdown
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <button
                        onClick={toggleProductsDropdown}
                        className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg cursor-pointer group"
                        style={{ 
                          color: textColor,
                          fontFamily: "Jost, sans-serif",
                        }}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown 
                          size={12} 
                          className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isProductsOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl border backdrop-blur-xl animate-fadeIn"
                          style={{
                            backgroundColor: cardBackground + 'E6',
                            borderColor: borderColor,
                          }}
                        >
                          <div className="p-2">
                            {productItems.map((product, idx) => (
                              <a
                                key={idx}
                                href={product.href}
                                onClick={(e) => handleNavClick(product.href, e)}
                                className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg cursor-pointer mb-1 last:mb-0"
                                style={{ 
                                  color: textColor,
                                  fontFamily: "Jost, sans-serif",
                                }}
                              >
                                <span>{product.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular Navigation Item
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg cursor-pointer"
                      style={{ 
                        color: textColor,
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      <span>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section - Phone Number */}
            <div className="flex items-center space-x-3">
              {/* Phone Number - Desktop */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg group cursor-pointer"
                style={{
                  backgroundColor: cardBackground,
                  color: textColor,
                  border: `1px solid ${borderColor}`,
                  fontFamily: "Jost, sans-serif",
                }}
              >
                <span className="relative z-10">+254 700 000 000</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:shadow-lg group"
                style={{
                  backgroundColor: cardBackground,
                  color: textColor,
                  border: `1px solid ${borderColor}`,
                }}
                aria-label="Toggle menu"
              >
                <FaBars 
                  size={18} 
                  className="group-hover:rotate-90 transition-transform duration-300" 
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: isLightMode ? "rgba(248, 250, 252, 0.98)" : "rgba(30, 31, 28, 0.98)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-sm transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundColor: cardBackground,
            borderRight: `1px solid ${borderColor}30`,
            boxShadow: "4px 0 20px rgba(0, 0, 0, 0.15)",
          }}
        >
          <HeaderBackground />
          
          {/* Header Section */}
          <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: `${borderColor}30` }}>
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "Jost, sans-serif",
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI4Kenya
            </h2>
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              style={{
                color: textColor,
                border: `1px solid ${borderColor}`,
              }}
              aria-label="Close menu"
            >
              <FaTimes 
                size={20} 
                className="group-hover:rotate-90 transition-transform duration-300" 
              />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="p-6">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="animate-slideIn" style={{ animationDelay: `${index * 100}ms` }}>
                  {item.dropdown ? (
                    // Mobile Products Dropdown
                    <div className="space-y-1">
                      <button
                        onClick={toggleProductsDropdown}
                        className="flex items-center justify-between w-full p-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg group transform hover:translate-x-2 cursor-pointer"
                        style={{
                          color: textColor,
                          border: `1px solid ${borderColor}30`,
                          fontFamily: "Jost, sans-serif",
                        }}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {isProductsOpen && (
                        <div className="ml-4 space-y-1 animate-fadeIn">
                          {productItems.map((product, idx) => (
                            <a
                              key={idx}
                              href={product.href}
                              onClick={(e) => handleNavClick(product.href, e)}
                              className="flex items-center p-3 rounded-lg text-base font-medium transition-all duration-200 hover:shadow-lg cursor-pointer"
                              style={{ 
                                color: textColor,
                                fontFamily: "Jost, sans-serif",
                                border: `1px solid ${borderColor}20`,
                              }}
                            >
                              <span>{product.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular Mobile Navigation Item
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg group transform hover:translate-x-2 cursor-pointer"
                      style={{
                        color: textColor,
                        border: `1px solid ${borderColor}30`,
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      <span>{item.name}</span>
                    </a>
                  )}
                </div>
              ))}

              {/* Phone Number - Mobile */}
              <div className="w-full flex items-center justify-center gap-2 p-4 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg mt-4 group cursor-pointer"
                style={{
                  backgroundColor: cardBackground,
                  color: textColor,
                  border: `1px solid ${borderColor}30`,
                  fontFamily: "Jost, sans-serif",
                }}
              >
                <span>+254 700 000 000</span>
              </div>
            </div>

            {/* Contact Info - Mobile */}
            <div className="mt-8 p-4 rounded-xl space-y-3" style={{ border: `1px solid ${borderColor}30` }}>
              <div className="flex items-center gap-3 p-2">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundColor: '#3B82F620',
                    color: '#3B82F6',
                  }}
                />
                <div>
                  <p className="text-xs opacity-70" style={{ fontFamily: "Jost, sans-serif" }}>Email</p>
                  <a 
                    href="mailto:info@ai4kenya.co.ke" 
                    className="text-sm font-medium hover:text-blue-500 transition-colors duration-200"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    info@ai4kenya.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundColor: '#10B98120',
                    color: '#10B981',
                  }}
                />
                <div>
                  <p className="text-xs opacity-70" style={{ fontFamily: "Jost, sans-serif" }}>Phone</p>
                  <p className="text-sm font-medium" style={{ fontFamily: "Jost, sans-serif" }}>+254 700 000 000</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;