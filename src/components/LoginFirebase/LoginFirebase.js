import React, { useContext, useState } from "react";
import "./LoginFirebase.css";
import googleIcon from "./../../Images/icons/google_logo.svg";
import { useHistory, useLocation } from "react-router";
import {
  handleGoogleLogin,
  handleSignOut,
  initLoginFramework,
} from "../../loginManager";
import { UserContext } from "../../App";

const LoginFirebase = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  initLoginFramework();

  const googleLogin = () => {
    handleGoogleLogin().then(res => {
      setUser(res);
      history.replace(from);
    });
  };

  return (
    <div>
      <div className="firebaseSignUp">
        <div onClick={googleLogin}>
          <h2 className="mt-5">Lets login with Google</h2>
          <div className="googleSignUp">
            <img src={googleIcon} alt="" />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFirebase;
