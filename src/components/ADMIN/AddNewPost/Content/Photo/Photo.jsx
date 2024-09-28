import React from "react";
import DeleteField from "../DeleteField";
import PhotoField from "./PhotoField";
import PhotoName from "./PhotoName";
import IsParallax from "./IsParallax";

const Photo = ({ index }) => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
          <span>Photo</span>
          <DeleteField index={index} />
        </h4>
        <div>
          <PhotoField index={index} />
          <PhotoName />
          <IsParallax />
        </div>
      </div>
    </div>
  );
};

export default Photo;
