import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Users,
  BarChart2,
  TrendingUp,
  Award,
  Check,
  FileText,
  Search,
  Zap,
  Calendar,
  Download,
  ThumbsUp,
  Star,
  ArrowRight,
  ChevronLeft,
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  AlertCircle,
  FilePlus,
  Book,
  Shield,
  Heart,
  Briefcase,
  Home,
  Leaf,
  GraduationCap,
  ArrowDown,
  CheckCircle,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Sample data for charts
const schemeStats = [
  { name: "Health", beneficiaries: 4500000 },
  { name: "Education", beneficiaries: 3200000 },
  { name: "Agriculture", beneficiaries: 5800000 },
  { name: "Housing", beneficiaries: 2100000 },
  { name: "Employment", beneficiaries: 3700000 },
  { name: "Social Welfare", beneficiaries: 4100000 },
];

const populationData = [
  { name: "Covered", value: 65 },
  { name: "Not Covered", value: 35 },
];

const growthData = [
  { year: "2018", schemes: 20, coverage: 42 },
  { year: "2019", schemes: 28, coverage: 48 },
  { year: "2020", schemes: 35, coverage: 53 },
  { year: "2021", schemes: 42, coverage: 57 },
  { year: "2022", schemes: 50, coverage: 61 },
  { year: "2023", schemes: 58, coverage: 65 },
  { year: "2024", schemes: 65, coverage: 68 },
];

const quarterlyData = [
  { quarter: "Q1 2023", disbursement: 15000 },
  { quarter: "Q2 2023", disbursement: 23000 },
  { quarter: "Q3 2023", disbursement: 18500 },
  { quarter: "Q4 2023", disbursement: 27500 },
  { quarter: "Q1 2024", disbursement: 19800 },
  { quarter: "Q2 2024", disbursement: 29000 },
];

const COLORS = ["#10B981", "#D1D5DB"];
const AREA_COLORS = ["#047857", "#059669", "#10B981"];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Bihar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The PM Kisan scheme information on this platform helped me claim my benefits that I was unaware of. My farming has improved significantly since receiving the financial support.",
    scheme: "PM Kisan Samman Nidhi",
    age: 45,
    occupation: "Farmer",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Madhya Pradesh",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was able to apply for a scholarship for my daughter through this website. The process was simple and now she can continue her education without financial burden on our family.",
    scheme: "National Scholarship Portal",
    age: 38,
    occupation: "Teacher",
  },
  {
    id: 3,
    name: "Mohammed Ismail",
    location: "Kerala",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The PMAY housing scheme details were clearly explained here. After applying, I finally have a home that I can call my own. The step-by-step guidance made the application process very easy.",
    scheme: "Pradhan Mantri Awas Yojana",
    age: 52,
    occupation: "Shop Owner",
  },
  {
    id: 4,
    name: "Sunita Devi",
    location: "Rajasthan",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
    text: "Thanks to the Ujjwala Yojana information on this portal, I now have a clean cooking solution. My family's health has improved, and I spend less time collecting firewood.",
    scheme: "Pradhan Mantri Ujjwala Yojana",
    age: 40,
    occupation: "Homemaker",
  },
];

// Featured schemes
const featuredSchemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    description:
      "Financial benefit of ₹6000 per year for farmer families, paid in three equal installments of ₹2000.",
    icon: <FileText size={24} className="text-green-500" />,
    color: "bg-green-50",
    link: "https://i.ibb.co/q3FrW0rX/image.png",
    beneficiaries: "11+ crore",
    category: "Agriculture",
  },
  {
    id: 2,
    title: "Ayushman Bharat",
    description:
      "Health insurance cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    icon: <Users size={24} className="text-blue-500" />,
    color: "bg-blue-50",
    link: "https://i.ibb.co/q3FrW0rX/image.png",
    beneficiaries: "50+ crore",
    category: "Healthcare",
  },
  {
    id: 3,
    title: "PM Awas Yojana",
    description:
      "Housing for all by 2022 with financial assistance up to ₹2.67 lakh per house for eligible families.",
    icon: <Home size={24} className="text-purple-500" />,
    color: "bg-purple-50",
    link: "https://i.ibb.co/q3FrW0rX/image.png",
    beneficiaries: "2.2+ crore",
    category: "Housing",
  },
  {
    id: 4,
    title: "Skill India Mission",
    description:
      "Training and skill development for youth employment and entrepreneurship opportunities.",
    icon: <Briefcase size={24} className="text-orange-500" />,
    color: "bg-orange-50",
    link: "https://i.ibb.co/q3FrW0rX/image.png",
    beneficiaries: "1.3+ crore",
    category: "Employment",
  },
  {
    id: 5,
    title: "National Scholarship Portal",
    description:
      "Centralized platform for various scholarship schemes for students from minority communities and economically weaker sections.",
    icon: <GraduationCap size={24} className="text-indigo-500" />,
    color: "bg-indigo-50",
    link: "https://i.ibb.co/q3FrW0rX/image.png",
    beneficiaries: "1.8+ crore",
    category: "Education",
  },
  {
    id: 6,
    title: "PM Ujjwala Yojana",
    description:
      "Providing LPG connections to women from BPL households to ensure access to clean cooking fuel.",
    icon: <Leaf size={24} className="text-red-500" />,
    color: "bg-red-50",
    link: "https://i.ibb.co/q3FrW0rX/image.png",
    beneficiaries: "9+ crore",
    category: "Social Welfare",
  },
];

// Categories
const categories = [
  {
    name: "Agriculture",
    icon: <Leaf size={24} />,
    count: 28,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Education",
    icon: <GraduationCap size={24} />,
    count: 35,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Healthcare",
    icon: <Heart size={24} />,
    count: 22,
    color: "bg-red-100 text-red-800",
  },
  {
    name: "Housing",
    icon: <Home size={24} />,
    count: 15,
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "Employment",
    icon: <Briefcase size={24} />,
    count: 19,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "Social Welfare",
    icon: <Users size={24} />,
    count: 31,
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "Financial Aid",
    icon: <BarChart2 size={24} />,
    count: 17,
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Skill Dev ",
    icon: <Award size={24} />,
    count: 12,
    color: "bg-teal-100 text-teal-800",
  },
];

// Key benefits
const benefits = [
  {
    id: 1,
    title: "Easy Access",
    description:
      "Find all government schemes in one place with simple navigation and user-friendly interface",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Updated Content",
    description:
      "Get the latest information about eligibility criteria and application process updated regularly",
    icon: <Calendar className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 3,
    title: "Downloadable Forms",
    description:
      "Access and download all necessary application forms easily in multiple formats",
    icon: <Download className="w-6 h-6 text-purple-500" />,
  },
  {
    id: 4,
    title: "Success Stories",
    description:
      "Learn from real beneficiaries who have successfully utilized schemes to improve their lives",
    icon: <ThumbsUp className="w-6 h-6 text-green-500" />,
  },
];

// How it works steps
const steps = [
  {
    id: 1,
    title: "Browse Schemes",
    description:
      "Explore various government schemes filtered by category, eligibility, or benefits",
    icon: <Search className="w-8 h-8 text-green-500" />,
  },
  {
    id: 2,
    title: "Check Eligibility",
    description:
      "Find out if you qualify for specific schemes based on your profile and requirements",
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
  },
  {
    id: 3,
    title: "Get Documentation",
    description:
      "Access complete list of required documents and downloadable application forms",
    icon: <FilePlus className="w-8 h-8 text-green-500" />,
  },
  {
    id: 4,
    title: "Apply Online",
    description:
      "Submit your application through the official portal with our step-by-step guidance",
    icon: <ExternalLink className="w-8 h-8 text-green-500" />,
  },
];

// FAQs
const faqs = [
  {
    question: "How do I know if I am eligible for a government scheme?",
    answer:
      "Each scheme has specific eligibility criteria that you can check on the respective scheme page. You can also use our eligibility finder tool which asks a few questions and suggests schemes you might qualify for based on your responses.",
  },
  {
    question: "Are all schemes available nationwide?",
    answer:
      "Not all schemes are available in every state. Some are central government schemes that apply across India, while others are state-specific. The scheme details page clearly mentions the geographical coverage of each scheme.",
  },
  {
    question: "Can I apply for multiple schemes simultaneously?",
    answer:
      "Yes, you can apply for multiple schemes as long as you meet the eligibility criteria for each. There is no limit to how many schemes you can benefit from unless specifically mentioned in the scheme guidelines.",
  },
  {
    question: "How often is the information updated on this platform?",
    answer:
      "We update our database as soon as new information is released by the government authorities. For major schemes, updates are typically implemented within 24-48 hours of official announcements.",
  },
  {
    question: "What should I do if my application is rejected?",
    answer:
      "If your application is rejected, you can check the reason for rejection which is usually provided. Address the issues mentioned and reapply. You can also contact the scheme administrator directly through the contact information provided on our platform.",
  },
  {
    question:
      "Is there any fee for accessing or applying through this platform?",
    answer:
      "No, our platform is completely free to use. We do not charge any fees for providing information or guidance on government schemes. Beware of fraudulent websites that may ask for payment for these services.",
  },
];

// News updates
const newsUpdates = [
  {
    id: 1,
    title: "PM Kisan 15th Installment Released",
    date: "March 15, 2025",
    summary:
      "The 15th installment of PM Kisan has been released, benefiting over 11 crore farmers across India.",
    link: "/news/pm-kisan-15th-installment",
  },
  {
    id: 2,
    title: "Ayushman Bharat Coverage Expanded",
    date: "February 28, 2025",
    summary:
      "The government has expanded Ayushman Bharat to include additional medical procedures and treatments.",
    link: "/news/ayushman-bharat-expansion",
  },
  {
    id: 3,
    title: "New Education Scholarship Announced",
    date: "February 10, 2025",
    summary:
      "A new scholarship for STEM education has been announced for economically disadvantaged students.",
    link: "/news/stem-scholarship-announcement",
  },
  {
    id: 4,
    title: "Rural Employment Scheme Budget Increased",
    date: "January 25, 2025",
    summary:
      "The annual budget allocation for MGNREGA has been increased by 20% for the financial year 2025-26.",
    link: "/news/mgnrega-budget-increase",
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Manual testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left content */}
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering Citizens through
                  <span className="text-green-600 block mt-2">
                    Government Schemes
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg">
                  Discover government schemes that can transform your life. Easy
                  access to information, eligibility criteria, and application
                  procedures.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center">
                    <span>Explore Schemes</span>
                    <ChevronRight size={20} className="ml-2" />
                  </button>
                  <button className="px-8 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Main image */}
                <img
                  src="https://i.ibb.co/q3FrW0rX/image.png"
                  alt="Citizens benefiting from government schemes"
                  className="rounded-lg shadow-xl max-w-full h-auto object-cover"
                  style={{ maxHeight: "550px" }}
                  onError={(e) => {
                    // Fallback in case the image URL doesn't work
                    e.target.src =
                      "https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWElMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                  }}
                />

                {/* Decorative elements */}
                <div className="absolute -left-6 -bottom-6 w-64 h-24 bg-green-50 rounded-lg -z-10"></div>
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-50 rounded-lg -z-10"></div>

                {/* Stats card overlay */}
                <div className="absolute -right-8 -bottom-10 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Users size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        Total Beneficiaries
                      </p>
                      <p className="text-lg font-bold text-gray-900">250M+</p>
                    </div>
                  </div>
                </div>

                {/* Schemes card overlay */}
                <div className="absolute -left-10 top-10 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FileText size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Active Schemes</p>
                      <p className="text-lg font-bold text-gray-900">150+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,131.81,289.41,123.92,268.09,76.91,321.39,56.44Z"
              fill="#f9fafb"
            ></path>
          </svg>
        </div>
      </section>

      {/* Key Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Explore by Category
            </h2>
            <p className="mt-2 text-gray-600">
              Find the perfect scheme based on your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex flex-col items-center justify-center p-4 rounded-lg transition-transform hover:scale-105"
              >
                <div
                  className={`w-14 h-14 rounded-full mb-3 flex items-center justify-center ${category.color}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-900">
                  {category.name}
                </h3>
                <span className="text-xs text-gray-500">
                  {category.count} schemes
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Making a Nationwide Impact
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Millions of citizens across India have benefited from various
              government schemes. Here's how we're tracking progress.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Beneficiaries by Sector (in millions)
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={schemeStats}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
                    <YAxis tick={{ fill: "#6B7280" }} />
                    <Tooltip
                      formatter={(value) => [
                        `${formatNumber(value)} beneficiaries`,
                        "Beneficiaries",
                      ]}
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Bar
                      dataKey="beneficiaries"
                      fill="#10B981"
                      radius={[4, 4, 0, 0]}
                      barSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Population Coverage (%)
              </h3>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={populationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      innerRadius={70}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {populationData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Coverage"]}
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Growth Over Years
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={growthData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tick={{ fill: "#6B7280" }} />
                    <YAxis tick={{ fill: "#6B7280" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="schemes"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Total Schemes"
                    />
                    <Line
                      type="monotone"
                      dataKey="coverage"
                      stroke="#6366F1"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Population Coverage (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Fund Disbursement (₹ Crore)
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={quarterlyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient
                        id="disbursementGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10B981"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10B981"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="quarter" tick={{ fill: "#6B7280" }} />
                    <YAxis tick={{ fill: "#6B7280" }} />
                    <Tooltip
                      formatter={(value) => [
                        `₹${formatNumber(value)} crore`,
                        "Disbursement",
                      ]}
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="disbursement"
                      stroke="#10B981"
                      fillOpacity={1}
                      fill="url(#disbursementGradient)"
                      name="Fund Disbursement"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/statistics"
              className="inline-flex items-center justify-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-green-200 transition-colors"
            >
              <span>View Detailed Statistics</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Schemes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Schemes
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of the most impactful government initiatives designed
              to improve lives across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSchemes.map((scheme) => (
              <div
                key={scheme.id}
                className={`${scheme.color} rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>{scheme.icon}</div>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-white/50 text-gray-700 rounded-full">
                    {scheme.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {scheme.title}
                </h3>
                <p className="text-gray-600 mb-4">{scheme.description}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Users size={16} className="mr-1" />
                  <span>{scheme.beneficiaries} beneficiaries</span>
                </div>
                <Link
                  to={scheme.link}
                  className="inline-flex items-center text-gray-700 font-medium hover:text-green-600"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/schemes"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <span>View All Schemes</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* How It Works - Redesigned */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              How MyScheme Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Four simple steps to find and access government schemes tailored
              to your needs
            </p>
          </div>

          {/* Main content */}
          <div className="relative">
            {/* Desktop horizontal process */}
            <div className="hidden lg:block">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-green-200 transform -translate-y-1/2 rounded-full"></div>

              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Circle node */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-white shadow-md border-4 border-green-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-green-600">
                          {step.id}
                        </span>
                      </div>
                    </div>

                    {/* Card above or below the line */}
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 mt-8 ${
                        index % 2 === 0 ? "mt-12" : "mt-20"
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-green-100 rounded-full">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical process */}
            <div className="lg:hidden">
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-8 w-1 bg-green-200"></div>

              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.id} className="relative">
                    {/* Circle node */}
                    <div className="absolute top-0 left-8 transform -translate-x-1/2">
                      <div className="w-14 h-14 rounded-full bg-white shadow-md border-4 border-green-500 flex items-center justify-center">
                        <span className="text-lg font-bold text-green-600">
                          {step.id}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="ml-16 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-start">
                        <div className="mr-4 p-3 bg-green-100 rounded-full flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom feature cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Clock size={20} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick & Easy
                </h3>
              </div>
              <p className="text-gray-600">
                Find relevant schemes in minutes instead of hours. Our
                simplified process saves you time and frustration.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Shield size={20} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Verified Information
                </h3>
              </div>
              <p className="text-gray-600">
                All scheme details are verified from official government sources
                and updated regularly for accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yellow-100 rounded-full mr-3">
                  <AlertCircle size={20} className="text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Expert Support
                </h3>
              </div>
              <p className="text-gray-600">
                Get personalized guidance from our scheme experts when you need
                additional assistance.
              </p>
            </div>
          </div>

          {/* CTA banner */}
          <div className="mt-10 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-gray-200 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Need help with your application?
                </h3>
                <p className="text-gray-600">
                  Our customer support team can guide you through every step of
                  the process.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md whitespace-nowrap"
              >
                <span>Get Support</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Use MyScheme
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We simplify your journey to finding and applying for the right
              government schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-xl p-8 border border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Need personalized help?
                </h3>
                <p className="text-gray-600">
                  Our team of experts can guide you through the application
                  process, answer your questions, and help you maximize your
                  benefits.
                </p>
              </div>
              <div>
                <Link
                  to="/assistance"
                  className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  <span>Get Expert Assistance</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest News & Updates
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest announcements and changes in
              government schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsUpdates.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-green-600 text-white text-sm font-semibold px-4 py-2">
                  {news.date}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  <Link
                    to={news.link}
                    className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                  >
                    <span>Read more</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/news"
              className="inline-flex items-center justify-center space-x-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              <span>Browse All News</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from citizens who have benefited from government schemes and
              transformed their lives.
            </p>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-100"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentTestimonial].location}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].scheme}
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].occupation}
                  </span>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="relative">
                  <svg
                    className="absolute -top-5 -left-5 w-12 h-12 text-green-200 transform -rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-green-100 transition-colors"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>

            <div className="absolute bottom-4 left-4 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index
                      ? "bg-green-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/success-stories"
              className="inline-flex items-center justify-center space-x-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              <span>Read More Success Stories</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about government schemes and our
              platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${
                      openFaqIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-4 pb-4 ${
                    openFaqIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="inline-flex items-center justify-center space-x-2 text-green-600 font-medium hover:text-green-700"
            >
              <span>View All FAQs</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
