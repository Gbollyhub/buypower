import React from 'react'
import "../assets/css/home.css"
import { useState } from "react";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/ClipLoader";
const Home = () => {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
let [loading, setLoading] = useState(true);
let [color, setColor] = useState("#ffffff");

    return (
        
        <div className="mt-5">

            <section className="landing">
            <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader color={color} loading={loading} css={override} size={15} />
    </div>
<div className="container" style={{height:"100%"}}>
<div className="row d-flex align-items-center" style={{height:"100%"}}>
    <div className="col-lg-6 ">
<h1 className="landing-heading">
    Get More Units,
    <br/>Pay Less!
</h1>
<p className="landing-text mt-3">Lorem ipsum dolor sit amet,Aenean vel purus ligula</p>

<div className="row mt-4 col-lg-12">
    <input type="text" className="landing-input col-lg-8" placeholder="Input Meter Number"/>
    <button className="landing-btn col-lg-3">
        Enter
    </button>
</div>
    </div>  
    <div className="">

    </div>
</div>
</div>
<div id="section10" class="demo is-hidden-mobile">
            <a href="#about" 
              ><span></span></a>
          </div>
            </section>
        </div>
    )
}

export default Home
