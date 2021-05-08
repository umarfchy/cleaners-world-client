import "./LoginFirebase.css";
import React, { useContext } from "react";
import googleIcon from "./../../Images/icons/google_logo.svg";
import { useHistory, useLocation } from "react-router-dom";
import { handleGoogleLogin, initLoginFramework } from "../../loginManager";
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
    <div className="signInMainDiv">
      <button className="signInBtn" onClick={googleLogin}>
        <img src={googleIcon} alt="" />
        <p className="my-auto">Continue with Google</p>
      </button>
    </div>
  );
};

export default LoginFirebase;
