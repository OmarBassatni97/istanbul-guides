import React from "react";
import { images } from "../data.js";

const Slider = () => {
  return (
    <div className="slider w-full mt-16  gap-4 flex ">
      {images.map((item) => (
        <div className=" sliderimage rounded-lg w-[20%] relative">
          <img
            className=" rounded-lg w-full overflow-hidden  cursor-pointer ease-in-out duration-300"
            src={item.src}
            alt={item.title}
          />
          <button className="sliderbutton rounded-[50px] bg-sky-900 px-4 py-2 absolute top-[45%] left-[50%]  text-white">
            {item.link}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Slider;
