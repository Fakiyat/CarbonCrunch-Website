import React from "react";
import "./Navbar.css";
import image from '../../Images/logo.png';
// import Bookdemobtn from "../../Shared/Bookdemo-btn";
function Navbar() {
  return (
    <nav className="navbar-box">
      <div className="navbar-container">
        {/*Navbar logo section */}
        <div className="navbar-logo">
          <img src={image} />
          <span>Carboncrunch</span>
        </div>

        {/*Navbar Links section */}
        <div className="Navbar-links">
          <a href="Home" className="nav-link-active">
            Home
          </a>
          <a href="" className="nav-link">
            Services
          </a>
          <a href="" className="nav-link">
            Blog
          </a>
          <a href="" className="nav-link">
            About Us
          </a>
          <a href="" className="nav-link">
            Conatct
          </a>
        </div>
        <div className="auth-buttons">
          <button className="login-btn"> Login</button>
          <button className="book-demo-btn"> Book Demo</button>
          {/* <Bookdemobtn /> Design of button*/}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
