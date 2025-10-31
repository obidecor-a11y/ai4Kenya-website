"use client";

import React, { useState } from 'react';
import { useTheme } from '@/context/themeContext';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaClock, FaShieldAlt, FaHeadset, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import config from '@/components/config';

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  id?: string;
}

function ContactPage() {
  const { isLightMode } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const backgroundColor = isLightMode ? "#F2F5F5" : "#191A17";
  const textColor = isLightMode ? "#18181B" : "#FFFFFF";
  const cardBackground = isLightMode ? "#FFFFFF" : "#1E1F1C";
  const borderColor = isLightMode ? "#E2E8F0" : "#334155";
  const inputBackground = isLightMode ? "#F8FAFC" : "#2D2E2A";
  const accentColor = isLightMode ? "#9BD35A" : "#488403ff";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const FHOST = config.apiUrl;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch(`${FHOST}/contact/v1/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! We will get back to you within 24 hours.');
        
        // Auto reset form after success animation
        setTimeout(() => {
          setFormData({
            full_name: '',
            email: '',
            phone_number: '',
            subject: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again later or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // SVG Background Components
  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute top-20 right-20 w-40 h-40 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill={accentColor} />
      </svg>
      <svg className="absolute bottom-40 left-10 w-32 h-32 opacity-10" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="60" fill={accentColor} />
      </svg>
      <svg className="absolute top-1/2 left-1/4 w-24 h-24 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="40" fill={accentColor} />
      </svg>
    </div>
  );

  const NetworkGrid = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={borderColor} strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contactGrid)" />
      </svg>
    </div>
  );

  const ConnectionLines = () => (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,200 Q400,150 800,200"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.05"
        />
        <path
          d="M200,0 Q300,100 200,200 T200,400"
          stroke={accentColor}
          strokeWidth="1"
          fill="none"
          opacity="0.05"
        />
      </svg>
    </div>
  );

  // Success Animation Component
  const SuccessAnimation = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transform scale-95 animate-success-popup">
        <div className="text-center">
          {/* Animated Checkmark */}
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full bg-green-500 animate-success-circle"></div>
            <svg 
              className="absolute inset-0 w-full h-full text-white animate-success-check"
              viewBox="0 0 52 52"
            >
              <path
                fill="currentColor"
                d="M18 28.5L23.5 34L34 22"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Message Sent!
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We'll get back to you within 24 hours
          </p>
          
          {/* Confetti Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 animate-confetti"
                style={{
                  backgroundColor: ['#9BD35A', '#96f23a', '#48cae4', '#3B82F6', '#10B981'][i % 5],
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const contactMethods = [
    {
      icon: <FaEnvelope size={24} />,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "info@ai4kenya.co.ke",
      link: "mailto:info@ai4kenya.co.ke",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)"
    },
    {
      icon: <FaPhone size={24} />,
      title: "Call Us",
      description: "Mon to Fri from 8am to 5pm",
      details: "+254 700 000 000",
      link: "tel:+254700000000",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #34D399)"
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: "WhatsApp",
      description: "24/7 instant messaging",
      details: "+254 700 000 000",
      link: "https://wa.me/254700000000",
      color: "#25D366",
      gradient: "linear-gradient(135deg, #25D366, #4ADE80)"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "Nairobi, Kenya",
      link: "#",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)"
    }
  ];

  const socialLinks = [
    {
      icon: <FaTwitter size={20} />,
      name: "Twitter",
      url: "https://twitter.com/ai4kenya",
      color: "#1DA1F2"
    },
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/ai4kenya",
      color: "#0077B5"
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/ai4kenya",
      color: "#E4405F"
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slideIn {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes success-popup {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes success-circle {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes success-check {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
        .animate-success-popup {
          animation: success-popup 0.6s ease-out forwards;
        }
        .animate-success-circle {
          animation: success-circle 0.6s ease-out forwards;
        }
        .animate-success-check {
          animation: success-check 0.4s ease-out 0.3s both;
        }
        .animate-confetti {
          animation: confetti 1s ease-out forwards;
        }
      `}</style>

      <div 
        className="min-h-screen w-full transition-colors duration-300 pt-20 relative overflow-hidden"
        style={{
          backgroundColor,
          color: textColor,
        }}
      >
        <NetworkGrid />
        <FloatingOrbs />
        <ConnectionLines />

        {/* Success Animation Overlay */}
        {submitStatus === 'success' && <SuccessAnimation />}

        {/* Animated Background Glow */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            backgroundColor: accentColor,
            animation: "pulse-glow 8s ease-in-out infinite",
            filter: "blur(40px)"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 relative z-10">
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div 
              className="mb-8 p-4 rounded-xl border transition-all duration-300 animate-slideIn bg-red-500/20 border-red-500/50 text-red-500"
              style={{ animation: 'slideIn 0.3s ease-out' }}
            >
              <div className="flex items-center gap-3">
                <FaExclamationTriangle className="flex-shrink-0" />
                <div>
                  <p className="font-medium">{submitMessage}</p>
                  <p className="text-sm opacity-80 mt-1">
                    Please try again or contact us directly using the methods below.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
              style={{ 
                backgroundColor: cardBackground + '80', 
                borderColor: borderColor + '50',
                backdropFilter: 'blur(10px)'
              }}
            >
              <FaHeadset className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-medium">CONTACT SUPPORT</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "Jost, sans-serif",
                background: "linear-gradient(135deg, #9BD35A 0%, #96f23a 25%, #48cae4 50%, #9BD35A 75%, #96f23a 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get in Touch
            </h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Have questions about our AI solutions? We're here to help transform your business with cutting-edge artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="block p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden"
                    style={{
                      backgroundColor: cardBackground,
                      border: `1px solid ${borderColor}30`,
                    }}
                  >
                    <div className="flex items-start gap-4 relative z-10">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: method.gradient,
                          color: 'white',
                        }}
                      >
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-green-400 transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-sm opacity-70 mb-2">{method.description}</p>
                        <p className="font-medium text-sm flex items-center gap-1 group-hover:underline">
                          {method.details}
                          <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${method.color}05, transparent)`
                      }}
                    />
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div 
                className="p-6 rounded-2xl relative overflow-hidden group"
                style={{
                  backgroundColor: cardBackground,
                  border: `1px solid ${borderColor}30`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: '#F59E0B20',
                      color: '#F59E0B',
                    }}
                  >
                    <FaClock size={18} />
                  </div>
                  <h3 className="font-semibold text-xl" style={{ fontFamily: "Jost, sans-serif" }}>
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM", status: "Available" },
                    { day: "Saturday", time: "9:00 AM - 4:00 PM", status: "Available" },
                    { day: "Sunday", time: "Emergency Support Only", status: "Limited" }
                  ].map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg group/item"
                      style={{ 
                        backgroundColor: inputBackground,
                        border: `1px solid ${borderColor}20`,
                      }}
                    >
                      <div>
                        <span className="font-medium">{schedule.day}</span>
                        <span 
                          className={`ml-2 text-xs px-2 py-1 rounded-full ${
                            schedule.status === 'Available' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
                          {schedule.status}
                        </span>
                      </div>
                      <span className="opacity-70 text-sm">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div 
                className="p-8 rounded-2xl shadow-2xl sticky top-8 relative overflow-hidden group"
                style={{
                  backgroundColor: cardBackground,
                  border: `1px solid ${borderColor}30`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Background Glow */}
                <div 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${accentColor}10 0%, transparent 70%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: accentColor + '20',
                        color: accentColor,
                      }}
                    >
                      <FaHeadset size={18} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold" style={{ fontFamily: "Jost, sans-serif" }}>
                        Send us a Message
                      </h2>
                      <p className="opacity-70">Fill out the form below and we'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 opacity-80 flex items-center gap-2">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-focus-within:scale-110"
                            style={{
                              backgroundColor: accentColor + '20',
                              color: accentColor,
                            }}
                          >
                            <span className="text-xs">👤</span>
                          </div>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg group-hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            backgroundColor: inputBackground,
                            border: `1px solid ${borderColor}50`,
                            color: textColor,
                          }}
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium mb-2 opacity-80 flex items-center gap-2">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-focus-within:scale-110"
                            style={{
                              backgroundColor: accentColor + '20',
                              color: accentColor,
                            }}
                          >
                            <span className="text-xs">@</span>
                          </div>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg group-hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            backgroundColor: inputBackground,
                            border: `1px solid ${borderColor}50`,
                            color: textColor,
                          }}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Subject Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-sm font-medium mb-2 opacity-80 flex items-center gap-2">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-focus-within:scale-110"
                            style={{
                              backgroundColor: accentColor + '20',
                              color: accentColor,
                            }}
                          >
                            <FaPhone size={10} />
                          </div>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg group-hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            backgroundColor: inputBackground,
                            border: `1px solid ${borderColor}50`,
                            color: textColor,
                          }}
                          placeholder="+254 712 345 678"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium mb-2 opacity-80 flex items-center gap-2">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-focus-within:scale-110"
                            style={{
                              backgroundColor: accentColor + '20',
                              color: accentColor,
                            }}
                          >
                            <span className="text-xs">📝</span>
                          </div>
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg group-hover:shadow-md appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{
                            backgroundColor: inputBackground,
                            border: `1px solid ${borderColor}50`,
                            color: textColor,
                          }}
                        >
                          <option value="">Select a subject</option>
                          <option value="ai-consulting">AI Consulting</option>
                          <option value="machine-learning">Machine Learning</option>
                          <option value="data-analytics">Data Analytics</option>
                          <option value="custom-solutions">Custom AI Solutions</option>
                          <option value="partnership">Partnership</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label className="block text-sm font-medium mb-2 opacity-80 flex items-center gap-2">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-focus-within:scale-110"
                          style={{
                            backgroundColor: accentColor + '20',
                            color: accentColor,
                          }}
                        >
                          <span className="text-xs">💬</span>
                        </div>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:shadow-lg group-hover:shadow-md resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          backgroundColor: inputBackground,
                          border: `1px solid ${borderColor}50`,
                          color: textColor,
                        }}
                        placeholder="Tell us about your AI and business transformation needs..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-xl hover:scale-105'
                      }`}
                      style={{
                        background: "linear-gradient(135deg, #9BD35A, #96f23aff)",
                        color: "white",
                      }}
                    >
                      <span className={`relative z-10 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-200" />}
                      </span>
                      
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(135deg, #96f23aff, #9BD35A)",
                        }}
                      />
                    </button>

                    <div className="text-center">
                      <p className="text-sm opacity-60 mt-4 flex items-center justify-center gap-2">
                        <FaShieldAlt size={12} />
                        We typically respond within 2-4 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;