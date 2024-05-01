import React from "react";
import massagelogo from "../images/massage-svg.svg";

const Behind = () => {
  return (
    <>
      <section className=" behind_bg_img">
        <div className="container2 pt-111">
          <div className=" d-flex  flex-wrap justify-content-center">
            <div className=" behind_card   mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                How do I let go of my EX so I can finally leave him behind?
              </p>
            </div>
            <div className=" behind_card   mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                How does the divorce process work?
              </p>
            </div>
            <div className=" behind_card   mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                Do I need a lawyer?
              </p>
            </div>
          </div>
          <div className=" d-flex  flex-wrap justify-content-center">
            <div className=" behind_card  mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                How much will the divorce cost?
              </p>
            </div>
            <div className=" behind_card  mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                What will happen to my children?
              </p>
            </div>
            <div className=" behind_card  mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                What does my future as a single person look like now?
              </p>
            </div>
            <div className=" behind_card  mt-34">
              <p className=" ff-poppins mb-0 fw-normal text-16 lh-25 text-white">
                How do I rebuild my self-esteem?
              </p>
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <div className="  mt-58">
              <div className="common_btn2 bg-white">
                <span>
                  <img src={massagelogo} alt="massagelogo" />
                </span>
                <span className=" btntext_grident">
                  Book a non-binding initial consultation now
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Behind;
