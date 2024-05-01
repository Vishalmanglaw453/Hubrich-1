import React from "react";
import { useState } from "react";
import logo from "../images/Logo.svg";

const Navbaar = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <>
      <header>
    
          <div className=" container2 w-100  pt-4">
            <nav className=" d-flex align-items-center justify-content-between pt-24 pb-23    ">
              <div className=" cursel_pointer position-relative z-1">
                <img src={logo} alt="logo"    />
              </div>
              <ul
                className={`${
                  nav ? "start-0" : "start_100"
                } mb-0 ps-0 d-flex align-items-center gap-40 mobile_view  list_style_none`}
              >
                <li className=" overflow-hidden text_d">
                  <a  
                    onClick={show}
                    href=""
                    className="   ff-helve  text-16 text-white  fw-normal lh-20   nav_text "
                  >
                    Benifits
                  </a>
                </li>
                <li className=" overflow-hidden text_d">
                  <a
                    onClick={show}
                    href=""
                    className="  ff-helve  text-16 text-white  fw-normal lh-20   nav_text "
                  >
                    Testimonials
                  </a>
                </li>
                <li className="text_d">
                  <button className="  ff-inter fw-medium text-16 lh-24  text-white border-0 nav_btn">
                    Book consultation now
                  </button>
                </li>
              </ul>
              <div
                onClick={show}
                className="menu d-block d-lg-none position-relative  z-3"
              >
                <span></span>
                <span className="my-2"></span>
                <span></span>
              </div>
            </nav>
          </div>

      </header>
    </>
  );
};

export default Navbaar;
