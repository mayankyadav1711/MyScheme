import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
export default function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <> <nav className="bg-green-50">
    <header className="fixed inset-x-0 top-2 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-green/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-5">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img
                className="h-7 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/1582/1582292.png"
                alt=""
              />
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 "
              href="/scheme"
            >
              SCHEMES
            </a>
            <a
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 "
              href="/about"
            >
              ABOUT US
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200  hover:text-gray-900"
              href="contact"
            >
              CONTACT US
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
           
            <a
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    toast.success("Logout Successfully!!");
    navigate("/login");
  }}

  style={{cursor:"pointer"}}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  </nav></>
  )
}
