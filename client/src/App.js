/* eslint-disable react/jsx-pascal-case */
import React, { createContext, useReducer, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { reducer, initialState } from "./reducers/userReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/homepage";
import Login from "./components/login";
import Register from "./components/register";
import OTP from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import Scheme from "./components/Scheme";
import NewScheme from "./components/Newscheme";


export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const allowedPaths = [
      "/login",
      "/register",
      "/otp",
      "/resetpassword",
      "/forgotpassword",
      "/Scheme",
      "/Newscheme",
      
    ]; // Add the paths that don't require login
    const isAllowedPath = allowedPaths.some((path) =>
      window.location.pathname.startsWith(path)
    );

    if (!user && !isAllowedPath) {
      navigate("/login");
    }
    dispatch({ type: "USER", payload: user });
  }, [dispatch, navigate]);



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/scheme" element={<Scheme/>} />
        <Route path="/newscheme" element={<NewScheme/>} />
      </Routes>
    </>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routing />
        <ToastContainer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
