/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";


function Login() {





  return (
    <>
      <div>
        <div id="container">
          <div id="left">
            <h1 id="welcome">Welcome To Our Portal </h1>
            <p id="lorem">

              
            </p>
          </div>
          <div id="right">
            <h1 id="login">LogIn</h1>
            <br />
            <input type="email" id="email" className="client-info" />
            <label htmlFor="email">Email</label>
            <input type="password" id="password" className="client-info" />
            <label htmlFor="password">Password</label>
            <input
              type="submit"
              id="submit"
              className="client-info"
              defaultValue="Submit"
            />
            <h4 className="newuser">New User? Register Now.</h4>
            <button className="social" id="facebook">
              connect with facebook
            </button>
            <button className="social" id="google">
              connect with google
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Login;
