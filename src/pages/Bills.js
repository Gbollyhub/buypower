import React from 'react'
import almost from "../assets/img/almost.svg";
import ServiceCard from "../components/ServiceCard";
import "../assets/css/home.css"
const Bills = () => {
    return (
        <div className="container" style={{ height: "100%" }}>
        <div
        className="row d-flex align-items-center"
        style={{ height: "100%" }}
      >
        <div className="col-lg-7 ">
          <h1 className="landing-heading">
            Looking For A Great Value Of Electricity?
          </h1>
          <p className="landing-text mt-3">
            Lorem ipsum dolor sit amet,Aenean vel purus ligula
          </p>

          <div className="row mt-4 col-lg-12">
            {/* <input
              type="text"
              className="landing-input col-lg-8"
              placeholder="Input Meter Number"
            /> */}
            {/* <button
              className="landing-btn col-lg-2"
              onClick={() => {
                setShow((show = true));
              }}
            >
              Enter
            </button> */}
            <img
              src={almost}
              alt=""
              className="img-fluid"
              style={{ width: "60%" }}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <ServiceCard />
        </div>
      </div></div>
    )
}

export default Bills
