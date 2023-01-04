import React from "react";
import Opening from "../components/Opening";
import Button from "../components/Button";
import { Episodes } from "./Data";
import Card from "../components/Card";

const Main = () => {
  return (
    <div>
      <Opening />
      <div className="mt-4 px-[4rem]">
        <div className="flex justify-between mb-10">
          <h1 className="text-[2rem] text-white">Latest Episodes</h1>
          <Button text={"View all Episodes"} />
        </div>
        <div>
          {Episodes.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.img}
                episode={index + 1}
                title={item.title}
                text={item.text}
                gear={item.gear}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
