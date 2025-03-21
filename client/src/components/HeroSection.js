import React from "react";
import { ArrowRight, ChevronRight, Users, FileText, Calendar } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      </div>
      
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#047857" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
              Official Government Schemes Portal
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Empowering Citizens through
              <span className="block mt-1 text-green-600">Government Schemes</span>
            </h1>
            
            <p className="mb-8 text-lg text-gray-600 leading-relaxed">
              Access, explore, and apply for government welfare initiatives designed to improve your life. 
              Everything you need in one place - simplified, transparent, and accessible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/newform"
                className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Create Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">200+</span>
                </div>
                <p className="text-sm text-gray-600">Active Schemes</p>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">10M+</span>
                </div>
                <p className="text-sm text-gray-600">Citizens Benefited</p>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">28</span>
                </div>
                <p className="text-sm text-gray-600">States Covered</p>
              </div>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="relative hidden lg:block">
            {/* Main Image */}
            <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://i.ibb.co/2nNYjmj/removal-ai-c905b196-b34b-4251-b70b-d7c5d26166fa-image.png"
                alt="Government Schemes Portal"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-lg bg-green-200 -z-10"></div>
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-lg bg-blue-100 -z-10"></div>
            
            {/* Floating Card 1 */}
            <div className="absolute -left-12 top-1/4 z-20 max-w-xs rounded-lg bg-white p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-100 p-2">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Easy Application</h3>
                  <p className="text-sm text-gray-500">Apply for schemes in minutes</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card 2 */}
            <div className="absolute -right-10 bottom-20 z-20 max-w-xs rounded-lg bg-white p-4 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Track Progress</h3>
                  <p className="text-sm text-gray-500">Monitor your applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile image - shown only on smaller screens */}
      <div className="mt-10 flex justify-center lg:hidden">
        <div className="relative max-w-sm">
          <img
            src="https://i.ibb.co/2nNYjmj/removal-ai-c905b196-b34b-4251-b70b-d7c5d26166fa-image.png"
            alt="Government Schemes Portal"
            className="rounded-xl shadow-md"
          />
          <div className="absolute -left-4 -top-4 h-16 w-16 rounded-lg bg-green-200 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-lg bg-blue-100 -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;