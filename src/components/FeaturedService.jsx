import React from "react";
import { data } from "../servicedata.js";
import { Rating } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const FeaturedService = () => {
  return (
    <section className="w-full h-[600px] ">
      <div className="text-center mb-10 items-center">
        <h1 className="text-[30px] mb-5 ">Featured Sevces</h1>
        <p className="opacity-70">
          Discover our best services those got high rating
        </p>
      </div>
      <div className="flex  gap-3 justify-center items-center ">
        {data.map((item) => (
          <div className=" relative shadow-lg rounded-lg overflow-hidden h-[350px] w-[280px]">
            <img
              className="h-[50%] object-cover overflow-hidden"
              src={item.src}
              alt={item.text}
            />
            <button className="absolute  bottom-[48%] left-[20px] px-2 h-[20px] text-[12px] rounded-[50px] bg-sky-700 text-white ">
              {item.button}
            </button>
            <h3 className="m-2">{item.header}</h3>
            <p className="m-2 text-[14px] opacity-80">{item.text}</p>
            <div className="flex mt-7 justify-between">
              <Rating defaultValue={3} readOnly={true} />
              <a
                className="font-bold mx-3 hover:border-b border-blue-500 text-blue-500"
                href="/"
              >
                More Details <ArrowRightAltIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedService;
