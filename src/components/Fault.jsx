import React from "react";
import ellipes from '../images/fault_ellipes.svg'

const Fault = () => {
  return (
    <>
      <section className=" position-relative">
        <div className="container">
          <div className="  d-xxl-block d-none  section_1pos">
            <div className=" d-flex  position-relative">
              <p className=" ff-poppins fw-light text-20 lh-34 lts-45 text-black text_translate mjhtext_pos">
                MJH
              </p>
              <div className="mjh_line"></div>
              <div className=" d-flex  align-items-end mb-11">
                <p className=" mb-0 ff-helve text-end fw-normal text-40 lh-51  text_translate w_content">
                  01
                </p>
                <p className=" text-uppercase mb-0 ff-helve fw-normal text-24 lh-30 text-black">
                  fault
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" fault_ellipes d-lg-block d-none"> <img src={ellipes} alt="ellipes" /></div>
        <div className="container2 pt-151">
          <div className=" d-flex justify-content-center ">
            <div className="max-w  d-flex  justify-content-lg-between  flex-lg-row flex-column">
              <div className=" d-flex flex-column">
                <h2 className=" mb-0 ff-helve text-60 lh-77 text-black FAULT_heading">
                  IT'S NOT
                </h2>
                <p className="FAULT_transfom  ff-helve text-60 lh-77 text-black mb-0">
                  {" "}
                  <span className=" color-brown "> YOUR</span> FAULT!{" "}
                </p>
              </div>
              <div className=" d-flex   gap-11">
                <hr className="fault_blue_line mt-2" />
                <p className=" mb-0 ff-poppins fw-normal text-16  lh-25 text-black fault_pera_max">
                  It's not your fault for not knowing how to let go of the
                  partner who no longer made you feel special.
                </p>
              </div>
            </div>
          </div>
          <p className=" text-capitalize  ff-helve fw-normal  mt-58 text-20 lh-28 text-black   text-center">
            How would you know when you are busy with completely different
            things at the moment:
          </p>
        </div>
      </section>
    </>
  );
};

export default Fault;
