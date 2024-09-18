import React from "react";
import NewspapperText from "../../vendors/svg/NewspapperText";
import SubText from "./SubText";
import MasterText from "./MasterText";

const MasterHeading = () => {
  return (
    <div className="p-[36px] mt-content_top max-w-content h-fit ml-content_left">
      <MasterText />
      <SubText />
    </div>
  );
};

export default MasterHeading;
