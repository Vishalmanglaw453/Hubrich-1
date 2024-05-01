import React from "react";
import elllipes from "../images/section4_ellipes.svg";
const Target = () => {
  return (
    <>
      <section className=" position-relative">
        <div className="strategy_bg_color">
          <div className="container2 pt-48">
            <div className=" d-flex justify-content-end">
              <div className="TARGET_max_w w-100 d-flex  flex-lg-row flex-column justify-content-between align-items-center">
                <h2 className=" mb-0 ff-helve fw-normal text-52 lh-66 text-black text-uppercase">
                  <span className=" color-brown">TARGET</span> group
                </h2>
                <div className=" d-flex align-items-center gap-11">
                  <hr className="target_blur_line " />
                  <p className=" text-black mb-0 ">
                    The coaching is aimed at married women
                    <span className=" d-block">
                      who have already separated or are
                    </span>
                    thinking of separating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" target_bg_img">
          <div className="container2  pb-lg-0 pb-5 position-relative d-flex flex-column align-items-center align-items-lg-start pt-111">
            <div className="target_card">
              <p className=" text-white ff-poppins fw-normal text-16 lh-25">
                You have separated and have the feeling that you can never be
                happy again and that you will be alone forever.
              </p>
            </div>
            <div className="target_card mt-34">
              <p className=" text-white ff-poppins fw-normal text-16 lh-25">
                How are you supposed to be able to let go of someone who is so
                entangled with your life? It's impossible, isn't it?
              </p>
            </div>
            <div className="target_card2 mt-lg-0 mt-4">
              <p className=" text-white ff-poppins fw-normal text-16 lh-25">
                To understand how to let go of your partner, you need a detailed
                step-by-step action plan, which you will receive from me in a
                1:1 coaching session.
              </p>
            </div>
          </div>
        </div>
        <div className="container2 d-xl-block d-none">
          <div className=" section4_ellipes">
            <img src={elllipes} alt="ellipes" />
          </div>

          <div className=" d-xxl-flex d-none justify-content-end">
            <div className=" d-flex mt-65  position-relative">
              <p className=" ff-poppins fw-light text-20 lh-34 lts-45 text-black text_translate mjhtext4_pos">
                MJH
              </p>

              <div className=" d-flex  align-items-end ">
                <div className=" d-flex  align-items-end  mb-11">
                  <p className=" text-uppercase mb-0 ff-helve fw-normal text-24 lh-30 text-black">
                    analysis
                  </p>
                  <p className=" mb-0 ff-helve text-end fw-normal text-40 lh-51  text4_translate w_content">
                    04
                  </p>
                </div>
                <div className="mjh_line6 "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Target;
