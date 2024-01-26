import React, {  useEffect, useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OTP =() => {
  
    const navigate = useNavigate();
  
    
  
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const userEmail = queryParams.get("email") || "";
      
        const [otp, setOtp] = useState("");
      
        const handleOTPVerification = (e) => {
          e.preventDefault();
          console.log("userEmail:", userEmail);
          console.log("otp:", otp);
          // Make an API call to your server for OTP verification
          fetch("/verify-otp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userEmail, otp }),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the response from the server
              console.log(data);
              if (data.token && data.user) {
                // OTP verification successful, save the token to localStorage or a state management system for future authenticated requests
                localStorage.setItem("token", data.token);
                toast.success("OTP Verified! Please Login.", {
                  className: "custom-toast", 
                });
                navigate("/login"); // Redirect to the dashboard page after successful OTP verification
              } else {
                toast.error(data.error || "Invalid OTP. Please try again.");
              }
            })
            .catch((error) => {
              console.error("Error occurred during OTP verification:", error);
              alert("An error occurred during OTP verification. Please try again later.");
            });
        };
    
      return (
        <>
            <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

        {/* logo */}
            {/* <div>
                <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                    class="w-32 mx-auto" />
            </div> */}
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                   Verify OTP
                </h1>
              
                <div class="w-full flex-1 mt-8">
                   

                  

                    <div class="mx-auto max-w-xs">
                    <form onSubmit={handleOTPVerification}>
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
  name="otp"
  placeholder="Enter OTP"
  pattern="^[0-9\s]{6}$"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
  required

  minlength="6"
  maxlength="6" />
                        
                        <button
                            class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"  type="submit">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Enter OTP
                            </span>
                        </button>
                        </form>

             

                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
  className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
  style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/_88f71520-4fa4-4e1b-a1a1-224abb1891f9.jpeg?alt=media&token=1769fc2c-a3f0-4f6a-9ad2-6534722e22d1')` }}
></div>

        </div>
    </div>
</div>
        </>
      );
    }
    
    export default OTP;
