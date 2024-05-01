import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import Commonbtn from "./Commonbtn";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ellipes from "../images/mindset_ellipes.svg";

const Mindset = () => {
  return (
    <>
      <section>
        <div className="container2 pt-28">
          <div className="row pb-186">
            <div className="col-xl-6 col-12 d-flex flex-column align-items-xl-start  align-items-center">
              <div className=" d-flex flex-column pt-36">
                <p className=" ff-helve mb-0 fw-normal text-29 lh-37 text-black">
                  THE FOUR PHASES OF
                </p>
                <h2 className=" mb-0 ff-helve fw-normal text-52 lh-62">
                  SEPARATION
                  <span className=" color-brown d-block"> MINDSET</span>
                </h2>
                <p className=" ff-poppins   mt19 fw-normal text-16 lh-25 text-black">
                  There are 4 typical separation phases. The 4 phases are not
                  <span className=" d-block">
                    always clearly separated from each other and can overlap.
                  </span>
                </p>
                <Commonbtn text="Book a non-binding initial consultation now" />
              </div>
            </div>
            <div className="col-xl-6 col-12 d-flex justify-content-center position-relative mt-xl-0 mt-5">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
                }}
                modules={[Autoplay, EffectCreative, Pagination, Navigation]}
                grabCursor={true}
                effect={"creative"}
                speed={500}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-120%", 0, -500],
                  },
                  next: {
                    shadow: true,
                    translate: ["120%", 0, -500],
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper_card position-relative   d-flex flex-column justify-content-center">
                    <p className=" ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      1st phase
                      <span className=" d-block">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <p className=" ff-poppins fw-normal text-16 lh-25 text-white text-center">
                      This phase is characterized by denial and{" "}
                      <span className=" d-block">
                        ignoring the final separation.
                      </span>
                    </p>
                    <div className="  position-absolute mindset_ellipes ">
                    <img src={ellipes} alt="ellipes" /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_card position-relative   d-flex flex-column justify-content-center">
                    <p className=" ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      1st phase
                      <span className=" d-block">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <p className=" ff-poppins fw-normal text-16 lh-25 text-white text-center">
                      This phase is characterized by denial and{" "}
                      <span className=" d-block">
                        ignoring the final separation.
                      </span>
                    </p>
                    <div className="  position-absolute mindset_ellipes ">
                    <img src={ellipes} alt="ellipes" /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_card position-relative   d-flex flex-column justify-content-center">
                    <p className=" ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      1st phase
                      <span className=" d-block">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <p className=" ff-poppins fw-normal text-16 lh-25 text-white text-center">
                      This phase is characterized by denial and{" "}
                      <span className=" d-block">
                        ignoring the final separation.
                      </span>
                    </p>
                    <div className="  position-absolute mindset_ellipes ">
                    <img src={ellipes} alt="ellipes" /></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper_card position-relative   d-flex flex-column justify-content-center">
                    <p className=" ff-poppins fw-medium text-20 lh-32 text-center text-white">
                      1st phase
                      <span className=" d-block">
                        "The not-wanting-to-be-true"
                      </span>
                    </p>
                    <p className=" ff-poppins fw-normal text-16 lh-25 text-white text-center">
                      This phase is characterized by denial and{" "}
                      <span className=" d-block">
                        ignoring the final separation.
                      </span>
                    </p>
                    <div className="  position-absolute mindset_ellipes ">
                    <img src={ellipes} alt="ellipes" /></div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
              <div className="  swiper_arrow_pos d-xl-flex d-none gap-40 align-items-center">
                <div className="swiper-btn-prev ">
                  <svg
                    className=""
                    width="21"
                    height="36"
                    viewBox="0 0 21 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1.25098L2 18.251L20 35.251"
                      stroke="#9800B0"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div className="swiper-btn-next">
                  <svg
                    width="21"
                    height="36"
                    viewBox="0 0 21 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.25098L19 18.251L1 35.251"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mindset;
