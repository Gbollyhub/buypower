import React from "react";
import "../assets/css/home.css";
// import { useState } from "react";
// import { css } from "@emotion/react";
// import CircleLoader from "react-spinners/ClipLoader";
import Login from "./Login";
import Bills from "./Bills";
import Landing from "./Landing";
import Contactus from "../components/Contactus";
import Why from "../components/Why";
// import almost from "../assets/img/almost.svg";
// import ServiceCard from "../components/ServiceCard";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
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
  
 


  return (
    <div className="mt-5">
      <section className="landing mt-5">
        {/* <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader color={color} loading={loading} css={override} size={15} />
    </div> */}
       <Router>
        
        
          
              <Switch>
              <Route path="/" exact component={Landing}></Route>
              <Route path="/landing" exact component={Landing}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/bills" exact component={Bills}></Route>
              {/* <Route path="/" exact component={Home}></Route> */}
              </Switch>
              
            
          </Router> 
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
