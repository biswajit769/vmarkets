import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { authStorage } from "../utils/authstorage";

const Header = () => {
  const { loggedInUser, logOutUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogOut = () => {
    logOutUser();
    authStorage.delete();
    history.push("/");
  };

  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
  
        <h1 className="logo mr-auto"><a href="index.html">IndiaTalks</a></h1>
  
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </nav>
  
        <a href="#about" className="get-started-btn scrollto">Get Started</a>
  
      </div>
    </header>
  );
};

export default Header;
