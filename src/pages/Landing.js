import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="container" style={{ height: "100%" }}>
       

        
                  
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
                        
                          <Link
                          role="button"
                          to="/bills"
                            className="landing-btn col-lg-2"
                          >
                            Enter
                          </Link>
                        </div>
                      </div>
                    </div>
                 
                </div>
    )
}

export default Landing
