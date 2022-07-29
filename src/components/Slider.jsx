import React from "react";
import { images } from "../data.js";

const Slider = () => {
  return (
    <section className="slider-section">
      <div className=" relative flex items-center justify-center ">
        {images.map((item, index) => (
          <img
            className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={item.src}
            alt={item.title}
          />
        ))}
      </div>
      <div className=" relative flex items-center justify-center">
        {images.map((item, index) => (
          <img
            className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={item.src}
            alt={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
