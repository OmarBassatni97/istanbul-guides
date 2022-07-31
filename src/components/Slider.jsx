import React from "react";
import { images } from "../data.js";

const Slider = () => {
  return (
    <section className="mt-32 ">
      <div className="slider w-full  gap-4 grid grid-flow-col auto-cols-[15%] scrollbar-hide overflow-x-hidden overscroll-x-contain ">
        {images.map((item) => (
          <div className=" sliderimage rounded-lg w-full relative">
            <img
              className=" rounded-lg w-full overflow-hidden  cursor-pointer ease-in-out duration-300"
              src={item.src}
              alt={item.title}
            />
            <button className="sliderbutton rounded-[50px] bg-sky-900 px-4 py-2 absolute top-[45%] left-[35%]  text-white">
              {item.link}
            </button>
          </div>
        ))}
      </div>
      <div className="slider w-full mt-12 gap-4 grid grid-flow-col auto-cols-[15%] scrollbar-hide overflow-x-hidden overscroll-x-contain ">
        {images.map((item) => (
          <div className=" sliderimage rounded-lg w-full relative">
            <img
              className=" rounded-lg w-full overflow-hidden  cursor-pointer ease-in-out duration-300"
              src={item.src}
              alt={item.title}
            />
            <button className="sliderbutton rounded-[50px] bg-sky-900 px-4 py-2 absolute top-[45%] left-[35%]  text-white">
              {item.link}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
