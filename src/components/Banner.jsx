import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center mt-[80px]">
        <div className="text-3xl font-bold ">Learn Wiht US</div>
        <h2 className="text-white font-bold text-[45px]">Grow with US</h2>
        <h3 className="text-white font-bold text-[50px]">Learn 
          <ReactTyped  className="pl-3" strings={["Web Development" , "Web Design" , "Web App"]} typeSpeed={100} backSpeed={100}
          loop ={true} />
        <br /></h3>
      </div>
    </div>
  );
};

export default Banner;
