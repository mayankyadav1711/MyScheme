/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Login = () =>{
    const {  dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
    
        // Perform validation (you can add more validation rules as needed)
        if (!email || !password) {
          toast.error("Please provide both email and password.");
          return;
        }
    
        // Create a JSON payload to send in the request body
        const payload = {
          email,
          password,
        };
    
        // Make an API call to your server for user login
        fetch("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            console.log(data);
            if (data.token && data.user) {
              // Login successful, save the token to localStorage or a state management system for future authenticated requests
              localStorage.setItem("token", data.token);
              localStorage.setItem("user", JSON.stringify(data.user));
              dispatch({ type: "USER", payload: data.user });
              toast.success("Successfully SignedIn!!", {
                className: "custom-toast", 
              });
              navigate("/"); // Redirect to the dashboard page after successful login
            } else {
              toast.error(
                data.error || "Invalid email or password. Please try again.", {
                  className: "custom-toast", 
                });
             
            }
          })
          .catch((error) => {
            console.error("Error occurred during login:", error);
            alert("An error occurred during login. Please try again later.");
          });
      };



  return (
    <>
      
     
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center" >
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">

       
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                   Login
                </h1>
                <div class="w-full flex-1 mt-8">
                    <div class="flex flex-col items-center">
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
                                Login with Google
                            </span>
                        </button>

                        
                    </div>

                    <div class="my-12 border-b text-center">
                        <div
                            class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or login with e-mail
                        </div>
                    </div>

                    <div class="mx-auto max-w-xs">
                    <form onSubmit={handleLogin} encType="multipart/form-data">

                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength="50" />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength="20" />
                        <button
                            class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type="submit">
                            <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span class="ml-3">
                                Login In
                            </span>
                        </button>
                        </form>
                       {/* <div className=" text-center"> <Link to="/forgotpassword" className="no-underline leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 ">Forgot Password?</Link> </div> */}
                       <div className=" text-center"> <Link to="/register" className="no-underline leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 ">Don't have an account? Sign Up</Link> </div>

                        <p class="mt-6 text-xs text-gray-600 text-center">
                            I accept MyScheme's
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Terms of Service 
                            </a>
                            and its 
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-white text-center hidden lg:flex">
        <div
  className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
  style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/25377265_GST%20CAM%20927-20.svg?alt=media&token=1f3478c5-c3b6-4e23-beff-f34256c41358')` }}
></div>

        </div>
    </div>
</div>

     <Footer/>
    </>
  );
}

export default Login;
