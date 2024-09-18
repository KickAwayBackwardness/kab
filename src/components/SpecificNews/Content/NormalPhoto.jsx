import React from "react";
import Dot from "../../vendors/Dot/Dot";
import SmallText from "../../vendors/Text/SmallText";

const NormalPhoto = ({ url, name }) => {
  return (
    <div
      className="w-[var(--spec-news-photo-width)] 
    m-[var(--spec-news-margin-center)]
    my-[var(--spec-news-photo-margin-y)]
    "
    >
      <div className=" relative">
        <img className="w-full h-auto" src={url} alt={name} />
        <div className=" absolute right-0 bottom-0">
          <img src="/img/corner-photo.svg" alt="corner" />
        </div>
      </div>
      <div className=" flex items-center mt-[var(--spec-news-desc-photo-margin-top)]">
        <Dot color="black" />
        <SmallText text={name} />
      </div>
    </div>
  );
};

export default NormalPhoto;
