import React from "react";
import james from "../images/james.png";
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
import twoarrow from "../images/clients_blue.svg";

const Clients = () => {
  return (
    <>
      <section className=" ">
        <div className="container2 pb-226 pt-202 position-relative">
          <div className="  section6_pos d-xxl-block d-none">
            <div className=" d-flex mt-65  position-relative">
              <p className=" ff-poppins fw-light text-20 lh-34 lts-45 text-black text_translate mjhtext4_pos">
                MJH
              </p>

              <div className=" d-flex  align-items-end ">
                <div className=" d-flex  align-items-end  mb-11">
                  <p className=" mb-0 ff-helve text-end fw-normal text-40 lh-51  text4_translate w_content">
                    06
                  </p>
                </div>
                <div className="mjh_line6 "></div>
              </div>
            </div>
          </div>
          <div className=" duel_coma_pos d-xl-block d-none">
            <img src={twoarrow} alt="twoarrow" />
          </div>
          <h2 className=" ff-helve fw-normal text-52 lh-66 text-uppercase text-center">
            What our <span className=" color-brown">clients</span> say
          </h2>
          <div className=" overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              direction="vertical"
              loop={true}
              pagination={{
                clickable: true,
              }}
              className=" swiper-height"
            >
              <SwiperSlide>
                <div className=" d-flex flex-column align-items-center mt-84">
                  <div className="James_card position-relative">
                    <div className=" james_img_pos">
                      <img src={james} alt="james" />
                    </div>
                    <div className="  pb-3 d-flex justify-content-center">
                      <p className=" opacity-75 mb-0 text-center james_pera">
                        Nec pellentesque aliquet diam eget sed mi ornare
                        vulputate duis. Posuere id habitasse quis ac ac.
                        Pellentesque eget sed ut tincidunt cras. Ipsum nec
                        placerat vitae orci. Accumsan amet commodo montes,
                        aenean velit gravida tristique montes. Porttitor velit
                        cras venenatis, amet curabitur ultricies ac dictum.{" "}
                      </p>
                    </div>
                    <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                      Marrie James-CEO
                    </p>
                    <p className=" opacity-75 ff-poppins  fw-normal mb-0 text-16 lh-25 text-center text-black">
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className=" d-flex flex-column flex-lg-row gap-20 mt-20">
                    <div className="Edwards_card">
                      <p className=" ff-poppins opacity-75 text-16 fw-normal  lh-25 text-center">
                        Elementum risus cursus vehicula consectetur sapien ut
                        tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                        Ralph Edwards-CEO
                      </p>
                      <p className=" ff-poppins opacity-75  fw-normal mb-0 text-16 lh-25 text-center text-black">
                        Limana Enterprises, CA
                      </p>
                    </div>
                    <div className="Edwards_card">
                      <p className=" ff-poppins opacity-75 text-16 fw-normal  lh-25 text-center">
                        Elementum risus cursus vehicula consectetur sapien ut
                        tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                        Darrell Steward-Head
                      </p>
                      <p className=" ff-poppins  opacity-75 fw-normal mb-0 text-16 lh-25 text-center text-black">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide> 
              <SwiperSlide>
                <div className=" d-flex flex-column align-items-center mt-84">
                  <div className="James_card position-relative">
                    <div className=" james_img_pos">
                      <img src={james} alt="james" />
                    </div>
                    <div className="  pb-3 d-flex justify-content-center">
                      <p className=" opacity-75 mb-0 text-center james_pera">
                        Nec pellentesque aliquet diam eget sed mi ornare
                        vulputate duis. Posuere id habitasse quis ac ac.
                        Pellentesque eget sed ut tincidunt cras. Ipsum nec
                        placerat vitae orci. Accumsan amet commodo montes,
                        aenean velit gravida tristique montes. Porttitor velit
                        cras venenatis, amet curabitur ultricies ac dictum.{" "}
                      </p>
                    </div>
                    <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                      Marrie James-CEO
                    </p>
                    <p className=" opacity-75 ff-poppins  fw-normal mb-0 text-16 lh-25 text-center text-black">
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className=" d-flex flex-column flex-lg-row gap-20 mt-20">
                    <div className="Edwards_card">
                      <p className=" ff-poppins opacity-75 text-16 fw-normal  lh-25 text-center">
                        Elementum risus cursus vehicula consectetur sapien ut
                        tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                        Ralph Edwards-CEO
                      </p>
                      <p className=" ff-poppins opacity-75  fw-normal mb-0 text-16 lh-25 text-center text-black">
                        Limana Enterprises, CA
                      </p>
                    </div>
                    <div className="Edwards_card">
                      <p className=" ff-poppins opacity-75 text-16 fw-normal  lh-25 text-center">
                        Elementum risus cursus vehicula consectetur sapien ut
                        tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                        Darrell Steward-Head
                      </p>
                      <p className=" ff-poppins  opacity-75 fw-normal mb-0 text-16 lh-25 text-center text-black">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" d-flex flex-column align-items-center mt-84">
                  <div className="James_card position-relative">
                    <div className=" james_img_pos">
                      <img src={james} alt="james" />
                    </div>
                    <div className="  pb-3 d-flex justify-content-center">
                      <p className=" opacity-75 mb-0 text-center james_pera">
                        Nec pellentesque aliquet diam eget sed mi ornare
                        vulputate duis. Posuere id habitasse quis ac ac.
                        Pellentesque eget sed ut tincidunt cras. Ipsum nec
                        placerat vitae orci. Accumsan amet commodo montes,
                        aenean velit gravida tristique montes. Porttitor velit
                        cras venenatis, amet curabitur ultricies ac dictum.{" "}
                      </p>
                    </div>
                    <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                      Marrie James-CEO
                    </p>
                    <p className=" opacity-75 ff-poppins  fw-normal mb-0 text-16 lh-25 text-center text-black">
                      Limana Enterprises, CA
                    </p>
                  </div>
                  <div className=" d-flex flex-column flex-lg-row gap-20 mt-20">
                    <div className="Edwards_card">
                      <p className=" ff-poppins opacity-75 text-16 fw-normal  lh-25 text-center">
                        Elementum risus cursus vehicula consectetur sapien ut
                        tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                        Ralph Edwards-CEO
                      </p>
                      <p className=" ff-poppins opacity-75  fw-normal mb-0 text-16 lh-25 text-center text-black">
                        Limana Enterprises, CA
                      </p>
                    </div>
                    <div className="Edwards_card">
                      <p className=" ff-poppins opacity-75 text-16 fw-normal  lh-25 text-center">
                        Elementum risus cursus vehicula consectetur sapien ut
                        tempor, venenatis turpis. Sed mauris enim.
                      </p>
                      <p className=" ff-poppins fw-medium mb-0 text-16 lh-25 text-center text-black">
                        Darrell Steward-Head
                      </p>
                      <p className=" ff-poppins  opacity-75 fw-normal mb-0 text-16 lh-25 text-center text-black">
                        Limana Enterprises, CA
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>

          <div className="  d-xxl-block d-none  section_7pos">
            <div className=" d-flex  position-relative">
              <p className=" ff-poppins fw-light text-20 lh-34 lts-45 text-black text_translate mjhtext_pos">
                MJH
              </p>
              <div className="mjh_line"></div>
              <div className=" d-flex  align-items-end mb-11">
                <p className=" mb-0 ff-helve text-end fw-normal text-40 lh-51  text_translate w_content">
                  07
                </p>
                <p className=" text-uppercase mb-0 ff-helve fw-normal text-24 lh-30 text-black">
                  take step
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
