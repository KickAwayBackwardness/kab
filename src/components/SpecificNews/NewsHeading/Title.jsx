import React from "react";
import Dot from "../../vendors/Dot/Dot";
import SmallText from "../../vendors/Text/SmallText";
const Title = () => {
  return (
    <div className=" w-full flex">
      {/* left */}
      <div
        className="w-spec_title_left_column_width flex-shrink-0 pt-[var(--title-padding-top)] pl-[var(--title-left-padding-left)]
        border-r-frame border-frame_color 
      "
      >
        <Dot color="black" />
        <SmallText text="community" />
      </div>
      {/* right */}
      <div className="pt-[var(--title-padding-top)] pb-[var(--title-padding-bottom)] pl-[var(--title-right-padding-left)]">
        <h2 className=" uppercase leading-[var(--title-line-height)] text-spec_main_title tracking-[var(--title-letter-spacing)] text-whyteInktrap font-bold whitespace-wrap ">
          Ramen Wars Development Diary 1
        </h2>
      </div>
    </div>
  );
};

export default Title;
