import React from "react";
import focalistic1 from "../images/focalistic1.jpg";
import fenty2 from "../images/fenty2.jpg";
import kaneda1 from "../images/kaneda1.jpg";
import fireboy2 from "../images/fireboy2.jpg";
import celeb1 from "../images/celeb1.jpg";
import celeb2 from "../images/celeb2.jpg";
import celeb3 from "../images/celeb3.jpg";
import celeb4 from "../images/celeb4.jpg";
const Artists = () => {
  const images = [celeb1, celeb2, celeb3, celeb4];
  return (
    <div className="flex-wrap flex justify-center items-center">
      {images.map((image) => (
        <div className=" md:w-[25%] w-[50%] h-[400px] flex  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img src={image} className="w-[100%] h-[100%] object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Artists;
