import React from "react";
import focalistic1 from "../images/focalistic1.jpg";
import fenty2 from "../images/fenty2.jpg";
import kaneda1 from "../images/kaneda1.jpg";
import fireboy2 from "../images/fireboy2.jpg";
import sports1 from "../images/sports1.jpg";
import sports2 from "../images/sports2.jpg";
import sports3 from "../images/sports3.jpg";
import sports4 from "../images/sports4.jpg";
const Sports = () => {
  const images = [sports1, sports2, sports3, sports4];
  return (
    <div className="flex-wrap flex justify-center items-center">
      {images.map((image) => (
        <div className=" md:w-[25%] w-[50%] h-[400px] flex  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img src={image}  className="w-[100%] h-[100%] object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Sports;
