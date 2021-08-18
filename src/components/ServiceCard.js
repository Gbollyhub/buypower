import React from "react";
import "../assets/css/servicecard.css";
import ibedc from "../assets/img/IBEDC.png"
const ServiceCard = () => {
  return (
   <>
   {/* {

           updateBand ? <UpdateBand band = {band} updateBandList = {updateBandList} closeModal = {toggleUpdateBand}/> : null
              } */}
   
      <div className="card bill-card">
        
        <div className="container">
        <p className="card-head text-left mb-3">Please select Preferred Service</p>
          <div className="grid-parent">
            <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div> 
             <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>     <div className="grid-child">
              <div className="flex-card">
                <div className="logo col-lg-6">
                  <img src={ibedc} alt=""/>
                </div>
                <div className="name black-text col-lg-6">IBEDC</div>
              </div>
            </div>
          </div>
          <p className="mt-5 text-left">Not sure which service provider?<span className="primary-text">Search</span></p>
        </div>
      </div>
      </>
  );
};

export default ServiceCard;
