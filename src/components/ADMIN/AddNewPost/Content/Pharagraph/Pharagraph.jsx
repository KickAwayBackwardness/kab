import React from "react";
import DeleteField from "../DeleteField";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Text from "./Text";

const Pharagraph = ({ index }) => {
  return (
    <div className="mb-[50px]">
      <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
        <span>Pharagraph</span>
        <DeleteField index={index} />
      </h4>
      <div className="flex gap-[30px]">
        <Title />
        <SubTitle />
      </div>
      <Text />
    </div>
  );
};

export default Pharagraph;
