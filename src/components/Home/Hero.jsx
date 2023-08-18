import React from "react";
import herobg from "../images/herobg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="md:h-[100vh] h-[80vh]  bg-no-repeat bg-fixed  bg-cover  bg-left   "
      id="home"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className=" items-start  flex md:h-[100vh] h-[80vh] bg-black/50 flex-col justify-center md:p-10 text-white  ">
        <div className="flex p-4 md:p-0 flex-col items-start">
          <div className="md:text-7xl text-2xl flex gap-2 font-bold">
            <span className="text-[#CCCCCC] ">I'm</span>
            Shengspear Lupo
          </div>
          <div className="md:text-3xl text-xl text-center font-bold">
            I create art with photography
          </div>
          <Link
            to="/portfolio"
            className=" bg-white  hover:scale-105   px-4 py-2  text-xl mt-4  text-black cursor-pointer  transition ease-in-out duration-500   "
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
