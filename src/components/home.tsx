// app/page.tsx
"use client";

import React, { useState } from 'react';
import { useTheme } from '@/context/themeContext';
import { FaCheck, FaStar, FaUsers, FaShieldAlt, FaChartLine, FaHeadset, FaEnvelope, FaArrowRight, FaChevronDown, FaChevronUp, FaQuoteLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';

function HomePage() {
  const { isLightMode } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const backgroundColor = isLightMode ? "#FFFFFF" : "#191A17";
  const textColor = isLightMode ? "#18181B" : "#FFFFFF";
  const cardBackground = isLightMode ? "#F8FAFC" : "#1E1F1C";
  const borderColor = isLightMode ? "#E2E8F0" : "#334155";
  const accentColor = isLightMode ? "#9BD35A" : "#488403ff";
  const successColor = isLightMode ? "#9BD35A" : "#488403ff";

  const features = [
    {
      icon: "🌱",
      title: "Crop Health Monitoring",
      description: "AI-powered analysis of crop health using satellite imagery and drone data to detect diseases, pests, and nutrient deficiencies early."
    },
    {
      icon: "🐄",
      title: "Livestock Health Diagnosis",
      description: "Automated animal health assessment through image recognition and behavioral analysis for early disease detection and treatment."
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Advanced AI models predicting crop yields, market prices, and optimal planting times based on historical data and weather patterns."
    },
    {
      icon: "🤖",
      title: "Automated Farm Operations",
      description: "AI-driven automation for irrigation, feeding systems, and environmental controls to optimize resource usage and increase efficiency."
    },
    {
      icon: "🌧️",
      title: "Weather Intelligence",
      description: "AI-powered weather forecasting and climate analysis tailored for agricultural planning and risk management."
    },
    {
      icon: "📱",
      title: "Mobile Farm Management",
      description: "Comprehensive mobile platform for real-time farm monitoring, decision support, and remote management of agricultural operations."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Dairy Farmer, Nakuru",
      content: "AI4Kenya's livestock monitoring system detected mastitis in my cows 3 days before visible symptoms. Saved me thousands in potential losses!",
      rating: 5,
      image: "/testimonials/farmer1.jpg"
    },
    {
      name: "James Omondi",
      role: "Maize Farmer, Trans-Nzoia",
      content: "The predictive analytics helped me optimize planting time and fertilizer use. My yield increased by 40% compared to last season.",
      rating: 5,
      image: "/testimonials/farmer2.jpg"
    },
    {
      name: "Grace Wambui",
      role: "Horticulture Farmer, Kiambu",
      content: "The crop disease detection feature identified a fungal infection early. The recommended treatment saved my entire tomato crop.",
      rating: 5,
      image: "/testimonials/farmer3.jpg"
    },
    {
      name: "David Maina",
      role: "Poultry Farmer, Thika",
      content: "Automated feeding and health monitoring has reduced my labor costs by 60% while improving bird health and productivity.",
      rating: 5,
      image: "/testimonials/farmer4.jpg"
    }
  ];

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Small-Scale Farming in Kenya",
      excerpt: "Discover how artificial intelligence is helping smallholder farmers increase yields and reduce losses through smart technology.",
      image: "/blog/ai-farming.jpg",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI Technology"
    },
    {
      title: "The Future of Precision Agriculture in East Africa",
      excerpt: "Exploring the potential of precision farming technologies and how they're transforming agricultural practices across the region.",
      image: "/blog/precision-agriculture.jpg",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Innovation"
    },
    {
      title: "Success Story: How AI Doubled Coffee Yields in Central Kenya",
      excerpt: "Case study of a coffee cooperative that implemented our AI solutions and achieved remarkable improvements in productivity.",
      image: "/blog/coffee-success.jpg",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Case Study"
    }
  ];

  const faqs = [
    {
      question: "How does AI help in agriculture?",
      answer: "AI helps farmers through crop monitoring, disease detection, yield prediction, automated irrigation, and data-driven decision making to optimize farming operations."
    },
    {
      question: "Do I need technical knowledge to use your solutions?",
      answer: "No, our solutions are designed with farmers in mind. We provide simple mobile apps and interfaces that are easy to use without technical expertise."
    },
    {
      question: "What crops and animals do your AI solutions support?",
      answer: "We support all major crops (maize, coffee, tea, vegetables) and livestock (dairy cows, poultry, goats) commonly found in Kenyan agriculture."
    },
    {
      question: "How affordable are your solutions for small-scale farmers?",
      answer: "We offer flexible pricing models including mobile-based subscriptions that make our technology accessible to farmers of all scales."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we provide comprehensive training, ongoing support, and have field agents who can assist farmers in using our technology effectively."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // SVG Background Components
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

  const AbstractShapes = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute top-1/4 right-10 w-32 h-32 opacity-5" viewBox="0 0 100 100">
        <polygon points="50,5 85,35 85,75 50,95 15,75 15,35" fill={accentColor} />
      </svg>
      <svg className="absolute bottom-1/3 left-10 w-24 h-24 opacity-5" viewBox="0 0 100 100">
        <rect x="25" y="25" width="50" height="50" rx="10" fill={accentColor} transform="rotate(45 50 50)" />
      </svg>
    </div>
  );

  return (
    <div 
      className="min-h-screen transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor,
        color: textColor,
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
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: cardBackground }}>
          <NetworkGrid />
          <FloatingOrbs />
          <ConnectionLines />
          <AbstractShapes />
        </div>
        
        {/* Animated Background Elements */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
          style={{
            backgroundColor: accentColor,
            animation: "pulse-glow 8s ease-in-out infinite",
            filter: "blur(40px)"
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30 lg:pt-24 pb-0 sm:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Transform Agriculture with <span style={{ color: "#9BD35A" }}>AI</span>
              </h1>
              
              <p className="text-xl sm:text-2xl opacity-80 mb-8 leading-relaxed">
                Smart farming solutions that increase yields, reduce costs, and make agriculture more sustainable for Kenyan farmers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href='#products'
                  className="group cursor-pointer px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #9BD35A, #96f23aff)",
                    color: "white",
                  }}
                >
                  <span className="relative z-10">View Our Products</span>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #96f23aff, #9BD35A)",
                    }}
                  />
                </a>
                
                <a 
                  href='/contact'
                  className="group cursor-pointer justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg border hover:shadow-xl hover:scale-105 flex items-center gap-2 relative overflow-hidden"
                  style={{
                    backgroundColor: cardBackground,
                    borderColor,
                    color: textColor,
                  }}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: accentColor }}
                  />
                </a>
              </div>
            </div>

            {/* Right Column - Image/Illustration */}
            <div className="relative z-10">
              <div 
                className="w-full h-full  rounded-2xl flex items-center justify-center relative overflow-hidden group"
                style={{
                  backgroundColor: cardBackground,
                  border: `2px solid ${borderColor}`,
                }}
              >
                {/* SVG Image in public folder */}
                <img src="/home.svg" alt="Smart Farming" className="w-full h-full object-contain" />

                {/* Animated elements */}
                <div 
                  className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: accentColor, animation: "pulse-glow 2s ease-in-out infinite" }}
                />
                <div 
                  className="absolute bottom-6 left-6 w-6 h-6 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ backgroundColor: accentColor, animation: "pulse-glow 3s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className="py-20  relative overflow-hidden" style={{ backgroundColor: cardBackground }}>
        <ConnectionLines />
        <AbstractShapes />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
              style={{ backgroundColor: backgroundColor + '80', borderColor }}
            >
              <span className="text-sm font-medium">OUR AI SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Farming Intelligence Powered by AI</h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions designed specifically for Kenyan agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
                style={{
                  backgroundColor,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="opacity-70 leading-relaxed">{feature.description}</p>
                
                <div 
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                  style={{
                    backgroundColor: accentColor + '20',
                    color: accentColor,
                  }}
                >
                  <FaArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonials' className="py-20 relative overflow-hidden">
        <FloatingOrbs />
        <NetworkGrid />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
              style={{ backgroundColor: cardBackground, borderColor }}
            >
              <FaUsers className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-medium">TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Farmers Say</h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Real stories from Kenyan farmers who have transformed their operations with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group"
                style={{
                  backgroundColor: cardBackground,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <FaQuoteLeft 
                  className="absolute top-6 right-6 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ color: accentColor }}
                />
                
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: accentColor + '20',
                      color: accentColor,
                    }}
                  >
                    <FaUser size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="opacity-70 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} style={{ color: "#FFD700" }} className="w-4 h-4" />
                  ))}
                </div>

                <p className="opacity-80 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: cardBackground }}>
        <ConnectionLines />
        <AbstractShapes />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
              style={{ backgroundColor: backgroundColor + '80', borderColor }}
            >
              <FaCalendarAlt className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-medium">LATEST INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">From Our Blog</h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Stay updated with the latest in AI and agricultural technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  backgroundColor,
                  border: `1px solid ${borderColor}`,
                }}
              >
                {/* Blog Image */}
                <div 
                  className="h-48 bg-gray-300 relative overflow-hidden"
                  style={{ backgroundColor: cardBackground }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    📖
                  </div>
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: accentColor + '20',
                      color: accentColor,
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm opacity-70 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="opacity-70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: accentColor }}
                  >
                    Read More
                    <FaArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 border"
              style={{
                backgroundColor: backgroundColor,
                borderColor: accentColor,
                color: textColor,
              }}
            >
              View All Articles
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingOrbs />
        <NetworkGrid />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
              style={{ backgroundColor: cardBackground, borderColor }}
            >
              <FaEnvelope className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl opacity-70">
              Common questions about our AI farming solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-xl transition-all duration-300 group hover:shadow-lg"
                style={{
                  backgroundColor: cardBackground,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:opacity-80 transition-all duration-200 group-hover:bg-green-400 group-hover:bg-opacity-5 rounded-xl"
                >
                  <span className="font-semibold text-lg flex-1 duration-300">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <FaChevronUp className="flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:text-green-400 transition-all duration-300" />
                  ) : (
                    <FaChevronDown className="flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:text-green-400 transition-all duration-300" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div 
                    className="px-6 pb-4 border-t transition-all duration-300"
                    style={{ borderColor }}
                  >
                    <p className="pt-4 opacity-80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Support CTA */}
          <div className="text-center mt-12">
            <p className="opacity-70 mb-6">Have more questions? We're here to help!</p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 border"
              style={{
                backgroundColor: backgroundColor,
                borderColor: accentColor,
                color: textColor,
              }}
            >
              <FaHeadset />
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;