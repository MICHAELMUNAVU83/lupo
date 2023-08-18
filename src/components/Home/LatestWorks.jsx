import React from "react";
import CountUp from "react-countup";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";
import { IoAlbumsOutline } from "react-icons/io5";
import latest1 from "../images/latest1.jpg";
import latest2 from "../images/latest2.jpg";
import latest3 from "../images/latest3.jpg";
import latest4 from "../images/latest4.jpg";
import latest5 from "../images/latest5.jpg";
import latest6 from "../images/latest6.jpg";
import latest7 from "../images/latest7.jpg";
import latest8 from "../images/latest8.jpg";
import latest9 from "../images/latest9.jpg";

import { FaInstagram } from "react-icons/fa";
const LatestWorks = () => {
  return (
    <div id="works">
      <div className="bg-black text-start  flex flex-col  p-4  md:items-end  md:p-12">
        <h1 className="md:text-7xl  text-5xl  text-white  font-bold  flex gap-2 ">
          <p className="text-white ">Latest</p> Works
        </h1>
        <p className="bg-white   transition ease-in-out duration-500   h-1 w-20"></p>
      </div>
      <div className="flex">
        <div className="w-1/3 flex flex-col  ">
          <div className="relative group ">
            <img
              src={latest5}
              className="h-[40vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>

          <div className="relative group ">
            <img
              src={latest1}
              className="h-[60vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={latest6}
              className="h-[40vh] object-cover object-center  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
        </div>
        <div className="w-1/3  ">
          <div className="relative group ">
            <img
              src={latest7}
              className="h-[60vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={latest9}
              className="h-[40vh] object-cover object-center  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={latest4}
              className="h-[40vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
        </div>
        <div className="w-1/3  ">
          <div className="relative group ">
            <img
              src={latest8}
              className="h-[40vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={latest2}
              className="h-[40vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={latest3}
              className="h-[60vh] object-cover object-top   w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-[#333333] ">
        <div className=" flex justify-center items-center  md:flex-row flex-col p-8  uppercase   gap-4 text-white">
          <div className="flex  gap-2 p-8  md:border-r-2 border-b-2 md:border-b-0 border-white">
            <HiUserGroup className="text-7xl" />
            <div className="flex  flex-col">
              <p className="font-bold text-3xl md:text-5xl">
                <CountUp end={128} duration={10} /> +
              </p>
              <div className="flex text-[#BCBCBC] gap-2">
                <p>Happy</p>
                <p>Clients</p>
              </div>
            </div>
          </div>
          <div className="flex md:border-r-2 border-b-2 md:border-b-0  border-white  gap-2 p-8">
            <AiOutlinePicture className="text-7xl" />
            <div className="flex flex-col">
              <p className="font-bold text-3xl md:text-5xl">
                <CountUp end={8792} duration={10} /> +
              </p>
              <div className="flex text-[#BCBCBC] gap-2">
                <p>Sunsets</p>
                <p>Captured</p>
              </div>
            </div>
          </div>
          <div className="flex  gap-2 p-8">
            <IoAlbumsOutline className="text-7xl" />
            <div className="flex flex-col">
              <p className="font-bold text-3xl md:text-5xl">
                <CountUp end={986} duration={10} /> +
              </p>
              <div className="flex gap-2">
                <p>Albums</p>
                <p>Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;
