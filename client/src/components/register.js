/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        isVerified: false,
      });
    
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
    
        try {
          const response = await fetch('https://myscheme-backend.vercel.app/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          console.log(data);
    
          if (
            data.message ===
            "OTP sent successfully. Please check your email to verify your account."
          ) {
            toast.success(
              "Registration successful! Please check your email for OTP verification.",
              {
                className: "custom-toast",
              }
            );
            navigate(`/otp?email=${encodeURIComponent(formData.email)}`);
          } else {
            toast.error(data.error || "Registration failed. Please try again later.");
          }
        } catch (error) {
          console.error('Error during signup:', error);
          toast.error("An error occurred during registration. Please try again later.");
        }
      };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign Up
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                <button
                            class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                            <div class="bg-white p-2 rounded-full">
                                <svg class="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span class="ml-4">
                                Sign Up with Google
                            </span>
                        </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or signup with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit}>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                    />
                    <button
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="submit"
                    >
                      <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {/* ... (your SVG paths) */}
                      </svg>
                      <span className="ml-3">
                        Sign Up
                      </span>
                    </button>
                  </form>

                  <div className="text-center">
                    <Link to="/login" className="no-underline leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Already Registered? Login In
                    </Link>
                  </div>

                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I accept MyScheme's
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Terms of Service
                    </a>
                    and its
                    <a href="#" className="border-b border-gray-500 border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
              style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/_88f71520-4fa4-4e1b-a1a1-224abb1891f9.jpeg?alt=media&token=1769fc2c-a3f0-4f6a-9ad2-6534722e22d1')` }}
            ></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
