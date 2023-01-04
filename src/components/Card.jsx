import React from "react";
import Gear from "../components/Gears";
import Button from "./Button";
const Card = ({ img, title, text, episode, gear }) => {
  return (
    <div className="p-6 md:flex block bg-black rounded-xl mb-10">
      <div style={{ flex: 1 }} className="p-6">
        <img src={img} style={{ width: "100%" }} alt={`${episode}`} />
      </div>
      <div style={{ flex: 2 }}>
        {/* <div className="mb-10">
          {gear.map((item, index) => {
            return <Gear key={index} text={item.text} />;
          })}
        </div> */}
        <span className="md:my-12 my-4 text-lg text-[#118DA8]">
          Episode {episode}
        </span>
        <h1 className="md:my-12 my-4 title text-white text-[3rem]">{title}</h1>
        <h3 className="md:my-12 my-4 text-md text-white mb-6">{text}</h3>
        <Button text={"View episode deteils"} />
      </div>
    </div>
  );
};

export default Card;
