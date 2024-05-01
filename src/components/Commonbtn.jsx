import React from "react";
import massage from "../images/massage-svg.svg";

const Commonbtn = (props) => {
  return (
    <>
      <button className="common_btn white2 btntext_grident ff-inter ">
        <span><img src={massage} alt="massage" /></span>
        {props.text}
      </button>
    </>
  );
};

export default Commonbtn;
