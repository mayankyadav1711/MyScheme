import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Save,
  FileText,
  Image,
  FileText as FileIcon,
  MapPin,
  Briefcase,
  Users,
  Calendar,
  Link as LinkIcon,
  ChevronDown,
  Info,
  CheckSquare,
  CheckCircle,
} from "lucide-react";

const NewForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    schemeFullName: "",
    schemeImageLink: "",
    schemeDetails: "",
    shortDetail: "",
    benefits: "",
    city: "",
    state: "",
    ministry: "",
    gender: "",
    caste: "",
    age: "",
    originalSchemeLink: "",
    documentsRequired: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/new-scheme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Scheme submitted successfully!");
        // Reset form after successful submission
        setFormData({
          schemeFullName: "",
          schemeImageLink: "",
          schemeDetails: "",
          shortDetail: "",
          benefits: "",
          city: "",
          state: "",
          ministry: "",
          gender: "",
          caste: "",
          age: "",
          originalSchemeLink: "",
          documentsRequired: [],
        });
      } else {
        toast.error("Error submitting scheme. Please try again.");
        console.error("Error submitting scheme:", response.statusText);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error submitting scheme:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked
        ? [...(prevFormData[name] || []), value]
        : prevFormData[name].filter((item) => item !== value),
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Document options
  const documentOptions = [
    "Aadhar card",
    "Pan card",
    "Ration Card",
    "12th Marksheet",
    "10th Marksheet",
    "Driving License",
    "Passport",
    "Voter ID",
    "Birth Certificate",
    "Income Certificate",
    "Caste Certificate",
    "Domicile Certificate",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 pt-28 pb-16">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Add New Government Scheme
          </h1>
          <p className="text-green-100 text-lg max-w-3xl mx-auto">
            Use this form to add new government schemes to the database. Please
            ensure all information is accurate and complete.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Info size={20} />
                <p className="text-gray-600">
                  This form is only accessible to administrators. Please fill in
                  all required fields marked with an asterisk (*).
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Basic Information
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  {/* Scheme Full Name */}
                  <div>
                    <label
                      htmlFor="schemeFullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Scheme Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="schemeFullName"
                        id="schemeFullName"
                        className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter the complete scheme name"
                        value={formData.schemeFullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Scheme Image Link */}
                  <div>
                    <label
                      htmlFor="schemeImageLink"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Scheme Image Link <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="schemeImageLink"
                        id="schemeImageLink"
                        className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter a URL for the scheme image"
                        value={formData.schemeImageLink}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Original Scheme Link */}
                  <div>
                    <label
                      htmlFor="originalSchemeLink"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Original Scheme Link{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="originalSchemeLink"
                        id="originalSchemeLink"
                        className="pl-10 w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter the official website link"
                        value={formData.originalSchemeLink}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Detailed Information
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  {/* Short Detail */}
                  <div>
                    <label
                      htmlFor="shortDetail"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Short Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="shortDetail"
                      id="shortDetail"
                      rows="3"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter a brief description of the scheme (100-150 words)"
                      value={formData.shortDetail}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Scheme Details */}
                  <div>
                    <label
                      htmlFor="schemeDetails"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Scheme Details{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="schemeDetails"
                      id="schemeDetails"
                      rows="6"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter comprehensive details about the scheme"
                      value={formData.schemeDetails}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Benefits */}
                  <div>
                    <label
                      htmlFor="benefits"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Benefits <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="benefits"
                      id="benefits"
                      rows="4"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="List all benefits provided by this scheme"
                      value={formData.benefits}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria */}
<div className="mb-10">
  <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
    Eligibility Criteria
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* State */}
    <div className="flex flex-col">
      <label
        htmlFor="state"
        className="text-sm font-medium text-gray-700 mb-2 uppercase"
      >
        State <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          name="state"
          id="state"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select State</option>
          <option value="All">All India</option>
          <option value="andhra pradesh">Andhra Pradesh</option>
          <option value="arunachal pradesh">Arunachal Pradesh</option>
          <option value="assam">Assam</option>
          <option value="bihar">Bihar</option>
          <option value="chandigarh">Chandigarh</option>
          <option value="chhattisgarh">Chhattisgarh</option>
          <option value="delhi">Delhi</option>
          <option value="goa">Goa</option>
          <option value="gujarat">Gujarat</option>
          <option value="haryana">Haryana</option>
          <option value="himachal pradesh">Himachal Pradesh</option>
          <option value="jammu and kashmir">Jammu and Kashmir</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="karnataka">Karnataka</option>
          <option value="kerala">Kerala</option>
          <option value="ladakh">Ladakh</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="madhya pradesh">Madhya Pradesh</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="manipur">Manipur</option>
          <option value="meghalaya">Meghalaya</option>
          <option value="mizoram">Mizoram</option>
          <option value="nagaland">Nagaland</option>
          <option value="odisha">Odisha</option>
          <option value="puducherry">Puducherry</option>
          <option value="punjab">Punjab</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="sikkim">Sikkim</option>
          <option value="tamil nadu">Tamil Nadu</option>
          <option value="telangana">Telangana</option>
          <option value="tripura">Tripura</option>
          <option value="uttar pradesh">Uttar Pradesh</option>
          <option value="uttarakhand">Uttarakhand</option>
          <option value="west bengal">West Bengal</option>
        </select>
        <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>
    </div>
    
    {/* Ministry */}
    <div className="flex flex-col">
      <label
        htmlFor="ministry"
        className="text-sm font-medium text-gray-700 mb-2 uppercase"
      >
        Ministry <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          name="ministry"
          id="ministry"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          value={formData.ministry}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Ministry</option>
          <option value="all">All</option>
          <option value="nptel">NPTEL</option>
          <option value="ayush">AYUSH</option>
          <option value="aicte">AICTE</option>
          <option value="isro">ISRO</option>
          <option value="kvpy">KVPY</option>
        </select>
        <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>
    </div>
    
    {/* Gender */}
    <div className="flex flex-col">
      <label
        htmlFor="gender"
        className="text-sm font-medium text-gray-700 mb-2 uppercase"
      >
        Gender <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          name="gender"
          id="gender"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>
    </div>
    
    {/* Caste */}
    <div className="flex flex-col">
      <label
        htmlFor="caste"
        className="text-sm font-medium text-gray-700 mb-2 uppercase"
      >
        Caste <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          name="caste"
          id="caste"
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          value={formData.caste}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Caste</option>
          <option value="all">All</option>
          <option value="general">GENERAL</option>
          <option value="obc">OBC</option>
          <option value="st">ST</option>
          <option value="sc">SC</option>
          <option value="ews">EWS</option>
          <option value="minority">MINORITY</option>
        </select>
        <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>
    </div>
    
    {/* Age */}
    <div className="flex flex-col">
      <label
        htmlFor="age"
        className="text-sm font-medium text-gray-700 mb-2 uppercase"
      >
        Age <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type="number"
          name="age"
          id="age"
          min="0"
          max="120"
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Enter eligible age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  </div>
</div>

              {/* Documents Required */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Required Documents
                </h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select all documents required for this scheme
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                    {documentOptions.map((document, index) => (
                      <label
                        key={index}
                        className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                      >
                        <input
                          type="checkbox"
                          name="documentsRequired"
                          value={document}
                          checked={formData.documentsRequired.includes(
                            document
                          )}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500 h-4 w-4"
                        />
                        <span>{document}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-5 w-5" />
                      Submit Scheme
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewForm;
