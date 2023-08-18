import React from "react";

import sports1 from "../images/sports1.jpg";
import sports2 from "../images/sports2.jpg";
import sports3 from "../images/sports3.jpg";
import sports4 from "../images/sports4.jpg";
import celeb1 from "../images/celeb1.jpg";
import celeb2 from "../images/celeb2.jpg";
import celeb3 from "../images/celeb3.jpg";
import celeb4 from "../images/celeb4.jpg";
import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpg";
import nature4 from "../images/nature4.jpg";
import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";
const All = () => {
  const clients = [
    { name: "sports1", img: sports1 },
    { name: "event3", img: event3 },
    { name: "sports2", img: sports2 },

    { name: "celeb4", img: celeb4 },
    { name: "nature1", img: nature1 },
    { name: "sports4", img: sports4 },
    { name: "celeb1", img: celeb1 },
    { name: "celeb2", img: celeb2 },
    { name: "celeb3", img: celeb3 },

    { name: "celeb4", img: celeb4 },

    { name: "nature3", img: nature3 },
    { name: "nature4", img: nature4 },
    { name: "event1", img: event1 },
    { name: "event2", img: event2 },
    { name: "nature1", img: nature1 },
    { name: "sports3", img: sports3 },
    { name: "nature2", img: nature2 },

    { name: "event4", img: event4 },
  ];

  return (
    <div className="flex-wrap flex justify-center items-center">
      {clients.map((client) => (
        <div className="w-[50%] md:w-[25%] h-[400px] flex  justify-center items-center hover:bg-white hover:text-[#333333] transition duration-500 ease-in-out cursor-pointer">
          <img
            src={client.img}
            alt={client.name}
            className="w-full object-cover h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default All;
