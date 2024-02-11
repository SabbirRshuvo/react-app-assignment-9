import React from "react";
import "./Home.css";
import abc from '../photo/photo.png'

const Home = () => {
  return (
    <div className="container">
      <div className="header-container">
        <h3 className="first-heading">
          This is home page.
          You Can see anything here.
        </h3>
        <h3 className="last-heading">
            If you want to see this page you have to login
        </h3>
      </div>
  
      <div className="img-container">
        <img src={abc} alt="" />
      </div>
    </div>
  );
};

export default Home;
