import React from "react";

const PortfolioPictures = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div className="bg-[#333333] text-xs md:text-4xl uppercase flex justify-between  text-white  ">
      <div
        style={{
          borderRight: "1px solid white",
        }}
        onClick={() => setPortfolioSelected("all")}
        className={
          portolioSelected === "all"
            ? "w-[20%] md:p-8 p-4 flex bg-white  text-[#333333]  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
            : "w-[20%] md:p-8 p-4 flex   justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
        }
      >
        All
      </div>
      <div
        onClick={() => setPortfolioSelected("sports")}
        style={{
          borderRight: "1px solid white",
        }}
        className={
          portolioSelected === "sports"
            ? "w-[20%] md:p-8 p-4 flex bg-white  text-[#333333]  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
            : "w-[20%] md:p-8 p-4 flex   justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
        }
      >
        sports
      </div>
      <div
        onClick={() => setPortfolioSelected("artists")}
        style={{
          borderRight: "1px solid white",
        }}
        className={
          portolioSelected === "artists"
            ? "w-[20%] md:p-8 p-4 flex bg-white  text-[#333333]  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
            : "w-[20%] md:p-8 p-4 flex   justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
        }
      >
        Artists
      </div>
      <div
        onClick={() => setPortfolioSelected("nature")}
        style={{
          borderRight: "1px solid white",
        }}
        className={
          portolioSelected === "nature"
            ? "w-[20%] md:p-8 p-4 flex bg-white  text-[#333333]  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
            : "w-[20%] md:p-8 p-4 flex   justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
        }
      >
        Nature
      </div>
      <div
        onClick={() => setPortfolioSelected("events")}
        className={
          portolioSelected === "events"
            ? "w-[20%] md:p-8 p-4 flex bg-white  text-[#333333]  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
            : "w-[20%] md:p-8 p-4 flex   justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer"
        }
      >
        events
      </div>
    </div>
  );
};

export default PortfolioPictures;
