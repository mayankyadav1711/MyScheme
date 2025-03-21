import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { 
  Users, 
  FileText, 
  Clock, 
  Award, 
  CheckCircle, 
  Target, 
  Heart, 
  ChevronRight,
  Linkedin,
  Twitter,
  Github,
  Mail
} from "lucide-react";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description: "With over 8 years of experience in government tech solutions",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      description: "User experience specialist passionate about accessible design",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description: "Expert in database design and API development for government systems",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    },
    {
      id: 4,
      name: "Ananya Desai",
      role: "Content Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      description: "Creates clear, accessible information about government schemes",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  ];

  // Core values data
  const coreValues = [
    {
      title: "Accessibility",
      description: "Making government services easily accessible to all citizens regardless of digital literacy or location",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: "Transparency",
      description: "Providing clear, accurate information about government schemes and application processes",
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Efficiency",
      description: "Streamlining processes to save citizens time and reduce frustration when accessing services",
      icon: <Clock className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Inclusion",
      description: "Ensuring our platform serves all citizens, including those from underserved communities",
      icon: <Heart className="w-8 h-8 text-red-500" />
    }
  ];

  // Statistics data
  const statistics = [
    {
      value: "200+",
      label: "Government Schemes",
      icon: <FileText className="w-10 h-10 text-green-500" />
    },
    {
      value: "3,590+",
      label: "Citizens Helped",
      icon: <Users className="w-10 h-10 text-blue-500" />
    },
    {
      value: "28+",
      label: "States Covered",
      icon: <Award className="w-10 h-10 text-purple-500" />
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="w-10 h-10 text-yellow-500" />
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium text-green-700 bg-green-100 rounded-full">
              <span>About MyScheme</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Making Government Schemes <span className="text-green-600">Accessible to All</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're on a mission to simplify government services and empower citizens across India by providing easy access to information about schemes and benefits.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="border-l-4 border-green-500 pl-4 mb-6">
                <span className="text-sm font-medium text-green-600 uppercase">Our Mission</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Bridging the Gap Between Citizens and Government</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our vision is to make citizens' lives easier by streamlining the government user interface for schemes and benefits. We're dedicated to reducing the time and effort required to find and avail government schemes.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that every citizen deserves easy access to government benefits they're entitled to, regardless of their technical knowledge or location. Our platform serves as a bridge, connecting people with opportunities that can transform their lives.
              </p>
              
              <a href="/contact" className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
                <span>Learn more about our approach</span>
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Our mission" 
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
                <div className="absolute -left-5 -bottom-5 bg-green-500 h-24 w-24 rounded-lg -z-10"></div>
                <div className="absolute -right-5 -top-5 bg-blue-100 h-16 w-16 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud of the difference we've made in thousands of citizens' lives through our platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do as we work to make government services more accessible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the People Behind MyScheme</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to simplifying government services for all citizens
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href={member.github} 
                      className="text-gray-400 hover:text-gray-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={`mailto:contact@myscheme.gov.in`} 
                      className="text-gray-400 hover:text-green-600 transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-cta" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-cta)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Want to Join Our Mission?</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
              Whether you're looking to collaborate, provide feedback, or join our team, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors shadow-md"
              >
                <span>Contact Us</span>
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href="/careers" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                <span>View Careers</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutUs;