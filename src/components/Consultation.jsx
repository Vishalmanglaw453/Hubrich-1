import React from "react";
import massagelogo from "../images/massage-svg.svg";
import Commonbtn from "./Commonbtn";

const Consultation = () => {
  return (
    <>
      <section className="  ">
        <div className="fault_bg_img pb-lg-0 pb-3">
          <div className="container2">
            <div className=" d-none d-lg-block">
              <div className=" d-flex flex-wrap justify-content-lg-end justify-content-center">
                <div className="common_card">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    Your self-esteem is in the basement.
                  </p>
                </div>
                <div className="common_card">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    You asking yourself what you did wrong.
                  </p>
                </div>
                <div className="common_card">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    The feeling of helplessness is your constant companion.
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-wrap justify-content-lg-start justify-content-center mt-29 ">
                <div className="common_card">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    You spend the nights alone and lonely.
                  </p>
                </div>
                <div className="common_card">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    You have stopped going out and spend the time crying in your
                    room.
                  </p>
                </div>
                <div className="common_card">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    An emotional chaos is raging inside you.
                  </p>
                </div>
              </div>
            </div>

            <div className=" row  d_none">
              <div className="col-sm-6 col-12 d-flex justify-content-center mt-3">
                <div className="common_card2">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    Your self-esteem is in the basement.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 d-flex justify-content-center mt-3">
                <div className="common_card2">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    You asking yourself what you did wrong.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 d-flex justify-content-center mt-3">
                <div className="common_card2">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    The feeling of helplessness is your constant companion.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 d-flex justify-content-center mt-3">
                <div className="common_card2">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    You spend the nights alone and lonely.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 d-flex justify-content-center mt-3">
                <div className="common_card2">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    You have stopped going out and spend the time crying in your
                    room.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 d-flex justify-content-center mt-3">
                <div className="common_card2">
                  <p className="  text-white ff-poppins fw-normal lh-25 mb-0">
                    An emotional chaos is raging inside you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="  text-center ff-poppins mt-47">
            You are not alone! Numerous women before you stood exactly at this
            point, where you are now.
          </p>

          <div className=" d-flex justify-content-center">
          <Commonbtn text="Book a non-binding initial consultation now"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultation;
