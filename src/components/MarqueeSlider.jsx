import React from "react";
import Marquee from "react-fast-marquee";
import Slider from "./Slider";

const MarqueeSlider = () => {
  return (
    <section className="mt-36">
      <div className="w-full h-[200px] overflow-hidden ">
        <Marquee
          speed={40}
          gradient={true}
          gradientWidth={200}
          gradientColor={[248, 251, 253]}
          className="h-full overflow-hidden"
        >
          <Slider />
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeSlider;
