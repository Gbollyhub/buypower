import React from "react";
import "../assets/css/servicecard.css";
const ServiceCard = () => {
  return (
    <div className="col-lg-5">
      <div className="card">
        <p className="black-text">Please select Preferred Service</p>
        <div className="container">
          <div className="grid-parent">
            <div className="grid-child">
              <div className="row">
                <div className="logo"></div>
                <div className="name"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
