import React from "react";
import "./HomePage.css";
import Logo from "../../logo.png";

const HomePage = () => (
  <>
    <h1> MR GALLERY </h1>
    <div className="container">
      <div className="box">
        <p className="description">
          If you want to get to know us more, please visit our About page
        </p>
        <p className="description">
          If you want to see our gallery, please visit our Gallery page
        </p>
        <p className="description">
          If you want us to take your photos, please contact us
        </p>
        <img src={Logo} alt="logo" />
        <p>Welcome to our gallery</p>
      </div>
    </div>
  </>
);

export default HomePage;