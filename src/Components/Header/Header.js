import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import"./Header.css";
import model from "../../images/model.png"
const Header = () => {
    return (
        <div className="Header-container">
            <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <NavMenu></NavMenu>
          <div className="col-md-6">
            <h1 className="title">
              BE PASSIONATE   <br /> TO LEARN SOMETHING
            </h1>
            <p className="text-white text-center mt-3">
             Here we provide many online course for you to fulfill your specific requiremets and build your skills. Our course give you confident to achive your dream. 
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6">
          <img className="w-75 pb-5" src={model} alt=""/>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Header;