import React from "react";
import jameson1 from "../images/jameson1.jpg";
import joan3 from "../images/joan3.jpg";
import nsg1 from "../images/nsg1.jpg";
import guiness1 from "../images/guiness1.jpg";
import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";

const Nature = () => {
  const images = [nature1, nature2, nature3, nature4];
  return (
    <div className="flex-wrap flex justify-center items-center">
      {images.map((image) => (
        <div className=" md:w-[25%] w-[50%] flex h-[400px]  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img src={image} className="w-[100%] h-[100%] object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Nature;
