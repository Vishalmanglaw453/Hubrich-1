import React from "react";
import section6img from "../images/section6-img.png";
import ellipes  from '../images/section6_ellipes.svg'

const Section6 = () => {
  return (
    <>
      <section  className=" position-relative pt-52">
        <div className="container2">
          <div className="row">
            <div className="col-xl-6 col-12 d-flex justify-content-center">
              <img
                src={section6img}
                alt="section6img
              "
              className=" w-100 LAWYER_img"
              />
            </div>
            <div className="col-xl-6 col-12 pt-xl-0 pt-4">
              <div className=" d-flex justify-content-xl-end justify-content-center">
                <div className=" max-w-523 ">
                  <h2 className="  mb-0 ff-helve  text-52 fw-normal text-66  text-black">
                    LAWYER <span className="color-brown">& </span> DIVORCE COACH
                  </h2>
                  <p className=" mb-0 ff-helve fw-normal text-36 lh-47 text-uppercase">
                     <span className="color-brown"> M</span>arc
                      <span className="color-brown"> j</span>oachim
                     <span className="color-brown"> h</span>ubrich
                  </p>
                  <p className=" text-capitalize mb-0 ff-helve fw-normal mt-29 text-20 lh-28 text-black">
                    About the mindset agency coach
                  </p>
                  <p className=" ff-poppins mb-0 text-16 lh-25 mt-12 opacity-75 text-black">
                    Marc J. Hubrich is the founder of the mindset agency{" "}
                    <span className=" d-block">
                      specializing in consulting services.
                    </span>
                  </p>
                  <button className=" agency_btn  align-items-center gap-11 d-flex justify-content-center">
                  <span className="agency_text">  Learn more about the agency</span>
                    <span>
                      <svg
                        width="41"
                        height="14"
                        viewBox="0 0 41 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40.101 7.60104C40.433 7.2691 40.433 6.73091 40.101 6.39896L34.6917 0.989595C34.3597 0.65765 33.8215 0.65765 33.4896 0.989595C33.1576 1.32154 33.1576 1.85973 33.4896 2.19168L38.2979 7L33.4896 11.8083C33.1576 12.1403 33.1576 12.6785 33.4896 13.0104C33.8215 13.3424 34.3597 13.3424 34.6917 13.0104L40.101 7.60104ZM0.5 7.85L39.5 7.85L39.5 6.15L0.5 6.15L0.5 7.85Z"
                          fill="url(#paint0_linear_1239_7)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1239_7"
                            x1="-3.7"
                            y1="7.38462"
                            x2="-3.4011"
                            y2="11.1488"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#0C5FD1" />
                            <stop offset="1" stop-color="#8703C5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" section6_ellipes  d-xl-block d-none">
          <img src={ellipes} alt="ellipes" />
        </div>
      </section>
    </>
  );
};

export default Section6;
