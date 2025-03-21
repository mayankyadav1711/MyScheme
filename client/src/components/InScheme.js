import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  CheckCircle, 
  MapPin, 
  FileText, 
  Award, 
  Download, 
  ExternalLink, 
  Share2,
  Clock,
  AlertCircle,
  ChevronRight,
  Bookmark
} from "lucide-react";

const InScheme = () => {
  const { _id } = useParams();
  const [schemeDetails, setSchemeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedSchemes, setRelatedSchemes] = useState([]);

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/scheme/${_id}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch scheme details");
        }
        
        const data = await response.json();
        setSchemeDetails(data);
        
        // Also fetch related schemes based on ministry or state
        fetchRelatedSchemes(data.ministry, data.state);
      } catch (error) {
        console.error("Error fetching scheme details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedSchemes = async (ministry, state) => {
      try {
        const response = await fetch(`http://localhost:5000/get-schemes?ministry=${ministry || ''}&state=${state || ''}`);
        const data = await response.json();
        // Filter out the current scheme and limit to 3 schemes
        const filtered = data.filter(scheme => scheme._id !== _id).slice(0, 3);
        setRelatedSchemes(filtered);
      } catch (error) {
        console.error("Error fetching related schemes:", error);
      }
    };

    fetchSchemeDetails();
  }, [_id]);

  // Format date string
  const formatDate = (dateString) => {
    if (!dateString) return "No deadline specified";
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Format caste for display
  const formatCaste = (caste) => {
    if (!caste) return "All Categories";
    
    if (caste.toLowerCase() === "general") return "General";
    if (caste.toLowerCase() === "ews") return "Economically Weaker Sections (EWS)";
    
    // Handle known abbreviations
    const casteMap = {
      "sc": "Scheduled Caste (SC)",
      "st": "Scheduled Tribe (ST)",
      "obc": "Other Backward Classes (OBC)",
      "minority": "Minority Communities"
    };
    
    const lowerCaste = caste.toLowerCase();
    return casteMap[lowerCaste] || caste.toUpperCase();
  };

  // Format ministry name
  const formatMinistry = (ministry) => {
    if (!ministry) return "Government of India";
    
    // Handle known abbreviations
    const ministryMap = {
      "nptel": "National Programme on Technology Enhanced Learning (NPTEL)",
      "ayush": "Ministry of AYUSH",
      "aicte": "All India Council for Technical Education (AICTE)",
      "isro": "Indian Space Research Organisation (ISRO)",
      "kvpy": "Kishore Vaigyanik Protsahan Yojana (KVPY)"
    };
    
    const lowerMinistry = ministry.toLowerCase();
    return ministryMap[lowerMinistry] || ministry.toUpperCase();
  };

  // Get ministry icon
  const getMinistryIcon = (ministry) => {
    switch (ministry?.toLowerCase()) {
      case 'nptel':
        return <Award className="text-blue-600" />;
      case 'ayush':
        return <Award className="text-green-600" />;
      case 'aicte':
        return <FileText className="text-purple-600" />;
      case 'isro':
        return <Award className="text-red-600" />;
      case 'kvpy':
        return <Award className="text-orange-600" />;
      default:
        return <Award className="text-gray-600" />;
    }
  };

  // Format state name
  const formatState = (state) => {
    if (!state) return "All India";
    
    return state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Handle share button click
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: schemeDetails?.schemeFullName,
        text: `Check out this government scheme: ${schemeDetails?.schemeFullName}`,
        url: window.location.href
      })
      .catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(err => console.error('Could not copy text: ', err));
    }
  };

  // Show loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-900">Loading scheme details...</h3>
            <p className="text-gray-500 mt-2">Please wait while we fetch the information.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Show error state
  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
          <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Failed to load scheme details</h3>
            <p className="text-gray-500 mb-6">{error}</p>
            <Link 
              to="/scheme" 
              className="inline-flex items-center px-4 py-2 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Schemes
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className=" bg-gray-50 py-3 border-b border-gray-200 absolute inset-x-0 top-16  z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/scheme" className="hover:text-green-600 transition-colors">Schemes</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{schemeDetails?.schemeFullName}</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 h-64 md:h-80">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
                  {formatMinistry(schemeDetails?.ministry)}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  {schemeDetails?.schemeFullName}
                </h1>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="mt-4 md:mt-0 flex space-x-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md -mt-16 md:-mt-24 mb-8 relative z-10">
          {/* Main Scheme Image */}
          <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-xl">
            <img
              src={schemeDetails?.schemeImageLink || 'https://via.placeholder.com/1200x600?text=Government+Scheme'}
              alt={schemeDetails?.schemeFullName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x600?text=Government+Scheme';
              }}
            />
          </div>
          {/* Top Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-b border-gray-200">
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">State/Region</p>
                <p className="text-lg font-medium text-gray-900">{formatState(schemeDetails?.state)}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Eligible Categories</p>
                <p className="text-lg font-medium text-gray-900">{formatCaste(schemeDetails?.caste)}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">Application Deadline</p>
                <p className="text-lg font-medium text-gray-900">{formatDate(schemeDetails?.applicationDeadline || '')}</p>
              </div>
            </div>
          </div>
          
          {/* Scheme Overview */}
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheme Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {schemeDetails?.schemeDetails || 
                "This government scheme aims to provide benefits to eligible citizens. Please refer to the eligibility criteria and required documents for more information."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Benefits */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Benefits</h3>
                </div>
                <p className="text-gray-700 mb-4">{schemeDetails?.benefits || "Multiple benefits are available under this scheme."}</p>
                <div className="mt-3">
                  <Link
                    to={schemeDetails?.originalSchemeLink || "#"}
                    className="text-green-600 font-medium hover:text-green-700 flex items-center"
                  >
                    Learn more 
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Eligibility Criteria */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Eligibility Criteria</h3>
                </div>
                <p className="text-gray-700 mb-4">{schemeDetails?.shortDetail || "Please check the eligibility criteria to determine if you qualify for this scheme."}</p>
                <div className="mt-3">
                  <button
                    className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
                  >
                    Check eligibility
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Required Documents */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-4">
                  The following documents are required when applying for this scheme:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {schemeDetails?.documentsRequired?.map((document, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <FileText className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{document}</span>
                    </div>
                  )) || (
                    <div className="col-span-full text-gray-600 italic">
                      No specific documents listed. Please check the official website for document requirements.
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Application Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 font-bold text-lg">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Check Eligibility</h3>
                      <p className="mt-1 text-gray-600">
                        Review the eligibility criteria to ensure you qualify for this scheme.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 font-bold text-lg">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Gather Required Documents</h3>
                      <p className="mt-1 text-gray-600">
                        Collect all the required documents listed above.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 font-bold text-lg">
                      3
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Submit Application</h3>
                      <p className="mt-1 text-gray-600">
                        Complete the application form on the official website or at designated offices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-900 font-bold text-lg">
                      4
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Track Application Status</h3>
                      <p className="mt-1 text-gray-600">
                        After submission, you can track the status of your application using the reference number.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Apply Now Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Apply?</h3>
                  <p className="text-gray-700">
                    Follow the link below to submit your application for this scheme.
                  </p>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to={schemeDetails?.originalSchemeLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors shadow-md"
                  >
                    Apply Now
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <button
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Form
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Assistance?</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-4">
                  If you have any questions or need assistance with your application, please contact:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Helpline</h3>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> 1800-XXX-XXXX (Toll Free)
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong> help@govschemes.gov.in
                    </p>
                    <p className="text-gray-700">
                      <strong>Timing:</strong> 9:00 AM to 6:00 PM (Monday to Saturday)
                    </p>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nodal Office</h3>
                    <p className="text-gray-700">
                      {formatMinistry(schemeDetails?.ministry)}
                    </p>
                    <p className="text-gray-700">
                      Government of India
                    </p>
                    <p className="text-gray-700">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Schemes */}
        {relatedSchemes.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Related Schemes</h2>
              <Link 
                to="/scheme" 
                className="text-green-600 hover:text-green-700 font-medium flex items-center"
              >
                View all schemes
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSchemes.map((scheme) => (
                <Link to={`/inscheme/${scheme._id}`} key={scheme._id} className="block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-green-200 flex flex-col h-full">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                        src={scheme.schemeImageLink || 'https://via.placeholder.com/400x200?text=Scheme+Image'}
                        alt={scheme.schemeFullName}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x200?text=Government+Scheme';
                        }}
                      />
                      {scheme.ministry && (
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          {getMinistryIcon(scheme.ministry)}
                          <span className="ml-1">{scheme.ministry.toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {scheme.schemeFullName}
                      </h3>
                      
                      {scheme.shortDetail && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {scheme.shortDetail}
                        </p>
                      )}
                      
                      <div className="mt-auto space-y-2">
                        {scheme.state && (
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin size={16} className="mr-2 flex-shrink-0" />
                            <span>{formatState(scheme.state)}</span>
                          </div>
                        )}
                        {scheme.caste && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Users size={16} className="mr-2 flex-shrink-0" />
                            <span className="capitalize">{scheme.caste}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="px-5 pb-5 pt-2">
                      <div className="flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-green-600 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                        <span>View Details</span>
                        <ChevronRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Schemes */}
        <div className="text-center mb-8">
          <Link 
            to="/scheme" 
            className="inline-flex items-center px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Schemes
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default InScheme;