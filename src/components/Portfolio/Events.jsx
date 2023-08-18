import React from "react";
import kaneda3 from "../images/kaneda3.jpg";
import agbaby3 from "../images/agbaby3.jpg";
import fireboy3 from "../images/fireboy3.jpg";
import fenty3 from "../images/fenty3.jpg";
import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";

const Events = () => {
  const images = [event1, event2, event3, event4];
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

export default Events;
