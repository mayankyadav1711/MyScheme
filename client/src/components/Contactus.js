import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Newspaper,
  AlertCircle,
  CheckCircle,
  Send,
  Calendar,
  Clock,
  Users
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        toast.success("Your message has been sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact info data
  const contactCards = [
    {
      title: "General Support",
      email: "support@myscheme.gov.in",
      phone: "+91 1800-123-4567",
      description: "For general inquiries and assistance",
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      color: "bg-green-100"
    },
    {
      title: "Technical Help",
      email: "tech@myscheme.gov.in",
      phone: "+91 1800-123-4568",
      description: "For website issues and technical support",
      icon: <AlertCircle className="h-6 w-6 text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      title: "Press Inquiries",
      email: "press@myscheme.gov.in",
      phone: "+91 1800-123-4569",
      description: "For media and press-related questions",
      icon: <Newspaper className="h-6 w-6 text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      title: "Feedback & Suggestions",
      email: "feedback@myscheme.gov.in",
      phone: "+91 1800-123-4570",
      description: "Share your ideas to improve our platform",
      icon: <CheckCircle className="h-6 w-6 text-yellow-600" />,
      color: "bg-yellow-100"
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
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're Here to <span className="text-green-600">Help You</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or need assistance? Our team is ready to assist you with any inquiries about government schemes and benefits.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden shadow-xl mb-16">
            {/* Map Background */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="India Map" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            
            {/* Contact Form Card */}
            <div className="grid grid-cols-1 lg:grid-cols-5 relative z-10">
              {/* Contact Information */}
              <div className="lg:col-span-2 bg-gradient-to-br from-green-700 to-green-900 text-white p-8 lg:p-12">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="mb-8 text-green-100">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mt-1 mr-4 text-green-300" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-green-100">+91 1800-123-4567 (Toll Free)</p>
                      <p className="text-green-100">Monday to Saturday, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mt-1 mr-4 text-green-300" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-green-100">contact@myscheme.gov.in</p>
                      <p className="text-green-100">support@myscheme.gov.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mt-1 mr-4 text-green-300" />
                    <div>
                      <p className="font-medium mb-1">Office Address</p>
                      <p className="text-green-100">
                        123 Government Scheme Building, <br />
                        Sector 62, Noida, <br />
                        Uttar Pradesh - 201301, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mt-1 mr-4 text-green-300" />
                    <div>
                      <p className="font-medium mb-1">Working Hours</p>
                      <p className="text-green-100">
                        Monday - Saturday: 9:00 AM - 6:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-12">
                  <p className="font-medium mb-4">Connect with us</p>
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                      </svg>
                    </a>
                    
                    {/* Twitter */}
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,9.99,9.99,0,0,1-3.127,1.195A4.929,4.929,0,0,0,11.78,8.292a13.987,13.987,0,0,1-10.151-5.147A4.929,4.929,0,0,0,3.2,9.713a4.9,4.9,0,0,1-2.23-.616A4.93,4.93,0,0,0,4.915,13.34a4.935,4.935,0,0,1-2.224.084,4.928,4.928,0,0,0,4.6,3.419A9.9,9.9,0,0,1,0,19.281a13.939,13.939,0,0,0,7.548,2.209A13.9,13.9,0,0,0,21.591,7.5c0-.21,0-.42-.015-.63A9.936,9.936,0,0,0,24,4.59" />
                      </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919c0.058,1.265,0.069,1.645,0.069,4.849c0,3.205-0.012,3.584-0.069,4.849c-0.149,3.225-1.664,4.771-4.919,4.919c-1.266,0.058-1.644,0.07-4.85,0.07c-3.204,0-3.584-0.012-4.849-0.07c-3.26-0.149-4.771-1.699-4.919-4.92c-0.058-1.265-0.07-1.644-0.07-4.849c0-3.204,0.013-3.583,0.07-4.849c0.149-3.227,1.664-4.771,4.919-4.919c1.266-0.057,1.645-0.069,4.849-0.069zm0-2.163c-3.259,0-3.667,0.014-4.947,0.072c-4.358,0.2-6.78,2.618-6.98,6.98c-0.059,1.281-0.073,1.689-0.073,4.948c0,3.259,0.014,3.668,0.072,4.948c0.2,4.358,2.618,6.78,6.98,6.98c1.281,0.058,1.689,0.072,4.948,0.072c3.259,0,3.668-0.014,4.948-0.072c4.354-0.2,6.782-2.618,6.979-6.98c0.059-1.28,0.073-1.689,0.073-4.948c0-3.259-0.014-3.667-0.072-4.947c-0.196-4.354-2.617-6.78-6.979-6.98c-1.281-0.059-1.69-0.073-4.949-0.073zm0,5.838c-3.403,0-6.162,2.759-6.162,6.162s2.759,6.163,6.162,6.163s6.162-2.759,6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0,10.162c-2.209,0-4-1.79-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4c0,2.21-1.791,4-4,4zm6.406-11.845c-.796,0-1.441.645-1.441,1.44s.645,1.44,1.441,1.44c.795,0,1.439-.645,1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    
                    {/* YouTube */}
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504C1.591,4.328,0.778,5.146,0.502,6.186c-0.5,1.891-0.5,5.814-0.5,5.814s0,3.924,0.5,5.814c0.276,1.039,1.089,1.858,2.122,2.136C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.033-0.278,1.846-1.096,2.122-2.136c0.5-1.891,0.5-5.814,0.5-5.814S23.998,8.077,23.498,6.186z M9.546,14.546V8.182l6.273,3.182L9.546,14.546z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                 
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Cards */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated teams are ready to assist you with any questions or concerns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className={`${card.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${card.email}`} className="text-green-600 hover:underline">
                      {card.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${card.phone.replace(/\s+/g, '')}`} className="hover:text-green-600">
                      {card.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about contacting us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly will I receive a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our toll-free number.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What information should I include in my message?</h3>
              <p className="text-gray-600">
                Please include your full name, contact details, and specific details about your inquiry or the scheme you're interested in.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I visit your office in person?</h3>
              <p className="text-gray-600">
                Yes, our office is open Monday through Saturday from 9:00 AM to 6:00 PM. We recommend scheduling an appointment beforehand.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if my question is about a specific scheme?</h3>
              <p className="text-gray-600">
                Please mention the specific scheme name in your message, and our specialized team will provide you with accurate information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white">Need Help Finding the Right Scheme?</h2>
              <p className="mt-2 text-green-100">
                Our scheme finder tool can help you discover government benefits you may be eligible for.
              </p>
            </div>
            <div>
              <a 
                href="/scheme-finder" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-medium rounded-lg shadow-sm hover:bg-green-50 transition-colors"
              >
                <Users className="mr-2 h-5 w-5" />
                Try Scheme Finder
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactUs;