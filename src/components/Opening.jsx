import React from "react";
import MainImage from "../assets/first.png";
import Icon1 from "../assets/audio.png";
import Icon2 from "../assets/spotify.png";
import Icon3 from "../assets/podcasts.png";
import Icon4 from "../assets/signal.png";
const Opening = () => {
  return (
    <div className="px-10 md:flex block">
      <div className="md:w-1/2 p-6">
        <img src={MainImage} className="rounded-md" alt="main" />
      </div>
      <div className="md:w-1/2 sm:block">
        <div className="">
          <h1
            className="text-[3.8rem] mb-[10rem] font-dm pt-[30%] pr-6 text-white"
            style={{ fontWeight: 100 }}
          >
            Take your podcast to the <span>next</span> level
          </h1>

          <div className="icons">
            <h3 className="text-lg text-white">Listen on</h3>
            <div className="flex gap-5 pt-5">
              <img src={Icon1} style={{ width: 30 }} alt="imggggga" />
              <img src={Icon2} style={{ width: 30 }} alt="imggggga" />
              <img src={Icon3} style={{ width: 30 }} alt="imggggga" />
              <img src={Icon4} style={{ width: 30 }} alt="imggggga" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
