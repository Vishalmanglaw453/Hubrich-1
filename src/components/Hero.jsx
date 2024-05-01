import React from "react";
import Navbaar from "./Navbaar";
import massagelogo from "../images/massage-svg.svg";
import calllogo from "../images/phone-call.svg";
import Commonbtn from "./Commonbtn";
import ellipes from "../images/hero_ellipes.svg";

const Hero = () => {
  return (
    <>
      <header className="hero_bg d-flex flex-column  position-relative">
        <div className=" hero_ellipes d-lg-block d-none">
          {" "}
          <img src={ellipes} alt="ellipes" />
        </div>
        <Navbaar />

        <div className="container2 position-relative w-100 d-flex flex-column justify-content-center flex-grow-1">
          <p className=" text-uppercase mb-0 color-brown  ff-helve text-18 lh-2422  fw-normal">
            Marc joachim hubrich
          </p>
          <h2 className=" text-uppercase mb-0 ff-helve  fw-normal  text-60 lh-77 text-bg-black">
            Now I let you
            <span className="  d-block">go!</span>
          </h2>
          <p className=" mb-0 pt-2 ff-poppins fw-normal text-16  lh-25 text-black opacity-75">
            For women who do not want to be completely dragged down by a{" "}
            <span className=" d-block">SEPARATION.</span>
          </p>
          <p className=" mb-0 ff-poppins fw-normal text-16  lh-25 text-black opacity-75">
            How to let go of your EX so you can leave him behind without{" "}
            <span className=" d-block">
              having to run to a therapist right away.
            </span>
          </p>
          <div className=" d-flex align-items-center gap-3  mt-34">
            <Commonbtn text="Book a non-binding initial consultation now" />
            <div>
              <img src={calllogo} alt="calllogo" />
            </div>
          </div>
          <div className=" d-flex   hero_text_postion pt-lg-0 pt-4 ">
            <div className=" d-flex gap-3  ">
              <hr className="die-blue-line border-0" />
              <p className="text-blue-line ff-helve fw-normal text-16 lh-27 Die-max-w ">
                <span className=" text_white  ff-helve fw-normal text-16 lh-27">
                  Die wichtigsten Aspekte einer Trennung:
                </span>
              </p>
            </div>
            <div className=" d-flex flex-column">
              <div className=" d-flex align-items-center gap-11">
                <div className=" text_dots"></div>
                <p className=" text_white text-16 mb-0 ff-poppins fw-medium lh-25   ">
                  Physische Trennung
                </p>
              </div>
              <div className=" d-flex align-items-center gap-11">
                <div className=" text_dots"></div>
                <p className=" text_white text-16 mb-0 ff-poppins fw-medium lh-25   ">
                  Mentale Trennung
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
