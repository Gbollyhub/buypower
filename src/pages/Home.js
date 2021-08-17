import React from "react";
import "../assets/css/home.css";
import { useState } from "react";
// import { css } from "@emotion/react";
// import CircleLoader from "react-spinners/ClipLoader";
import Contactus from "../components/Contactus";
import Why from "../components/Why";
import almost from "../assets/img/almost.svg";
import ServiceCard from "../components/ServiceCard";
// @ts-ignore
//import { Fade } from "react-reveal/Fade";
const Home = () => {
  //     const override = css`
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  // `;
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");
  let [home, setHome] = useState(true);
  let [loginPage, setLogin] = useState(false);
  let [billPage, setBill] = useState(false);

  const setPage = (page) => {
    if (page === "home") {
      setHome(true);
      setLogin(false);
      setBill(false);
    } else if (page === "login") {
      setHome(false);
      setLogin(true);
      setBill(false);
    } else if (page === "bill") {
      setLogin(false);
      setBill(true);
      setHome(false);
    }
  };

  return (
    <div className="mt-5">
      <section className="landing mt-5">
        {/* <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader color={color} loading={loading} css={override} size={15} />
    </div> */}
        <div className="container" style={{ height: "100%" }}>
          {/* {pageStatus == "loading" ? (
                <h1>Loading ...</h1>
              ) : (
                <h1>No Course Match the search</h1>
              )}
            </div>
          )} */}
          {home ? (
            <div
              className="row d-flex align-items-center"
              style={{ height: "100%" }}
            >
              <div className="col-lg-6 ">
                <h1 className="landing-heading">
                  Get More Units,
                  <br />
                  Pay Less!
                </h1>
                <p className="landing-text mt-3">
                  Lorem ipsum dolor sit amet,Aenean vel purus ligula
                </p>

                <div className="row mt-4 col-lg-12">
                  <input
                    type="text"
                    className="landing-input col-lg-8"
                    placeholder="Input Meter Number"
                  />
                  <button
                    className="landing-btn col-lg-2"
                    onClick={() => {
                      setPage("bill");
                    }}
                  >
                    Enter
                  </button>
                </div>
              </div>
            </div>
          ) : billPage ? (
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
            </div>
          ) : loginPage ? (
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
            </div>
          ) : (
            ""
          )}
        </div>
        <div id="section10" className="demo is-hidden-mobile">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>
      <Why />
      <Contactus />
    </div>
  );
};

export default Home;
