import React from "react";
import { data } from "../exploredata.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ExploreCards = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <section className="mt-[120px] block h-[600px] relative">
      <div className=" text-center mb-6">
        <h1 className="text-[32px] pb-2">Find whatever you need</h1>
        <p className="opacity-80 text-gray-400">Discover our Services</p>
      </div>
      <div
        id="slider"
        className=" w-[full] flex justify-center gap-4 items-center"
      >
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 duration-600"
          onClick={slideLeft}
          size={40}
        />

        {data.map((item) => (
          <div className="shadow-lg rounded-lg overflow-hidden h-[280px]  w-[220px] cursor-pointer hover:scale-105 ease-in-out duration-300 p-2 text-center">
            <img
              className="pb-2 h-[50%] w-full overflow-hidden"
              src={item.src}
              alt={item.title}
            />
            <h4 className="pb-2">{item.header}</h4>
            <p className="pb-4 text-[14px] text-gray-400">{item.text}</p>
            <button className="border p-1 rounded-[50px] w-[100px] bg-sky-700 text-white ">
              Explore
            </button>
          </div>
        ))}
        <MdChevronRight
          className=" opacity-50 cursor-pointer hover:opacity-100 duration-600"
          onClick={slideRight}
          size={40}
        />
      </div>
    </section>
  );
};

export default ExploreCards;
