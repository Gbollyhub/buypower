import React, { useState } from "react";
import almost from "../assets/img/almost.svg";
import Arrows from "../assets/img/arrows.svg";

import "../assets/css/home.css";
import showpass from "../assets/img/showpass.svg";
import hidepass from "../assets/img/hidepass.svg";
// import ServiceCard from "../components/ServiceCard";
import "../assets/css/paybills.css"

import EnterDetailsBills from '../components/EnterDetailsBills'
import ConfirmDetailsBills from '../components/ConfirmDetailsBills'
const PayBills = () => {

  const [isfilledForm, setIsFilledForm] = useState(false);


  function goToConfirmScreen(){
   setIsFilledForm(true)
  }
  function goToFormScreen(){
    setIsFilledForm(false)
   }

  return (
    <div>
      <div className="banner-picture-paybills">
        <div className="banner-cover">
        <div className="banner-writeup">
            <div className="banner-heading">
              <div className="banner-header">Looking for a great value of electricity</div>
              <div className="banner-sub">Lorem ipsum dolor sit amet,Aenean vel purus ligula,Lorem ipsum dolor sit amet,Aenean vel purus ligula</div>
            </div>
            <div className="banner-illustration">
              <img src={almost} alt="" className="banner-illus-bills"/>
            </div>
          </div>
          <div className="banner-form">
            <div className="banner-form-div" style={{ height: 'auto'}}>
              {
                isfilledForm ?  <ConfirmDetailsBills goToFormScreen={goToFormScreen} /> : <EnterDetailsBills goToConfirmScreen = {goToConfirmScreen}/>
              }
               
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayBills
