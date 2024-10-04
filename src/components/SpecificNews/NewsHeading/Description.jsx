import React from "react";
import SmallText from "../../vendors/Text/SmallText";

const Description = ({ decscription }) => {
  return (
    <div className=" w-full flex border-b-frame border-frame_color">
      {/* left */}
      <div
        className="w-spec_title_left_column_width flex-shrink-0 pl-[var(--title-left-padding-left)]
    border-r-frame border-frame_color 
  "
      >
        <div>
          <SmallText text="Published" />
        </div>
        <div>
          <SmallText text="14.02.24" />
        </div>
      </div>
      {/* right */}
      <div className="pb-[var(--title-desc-padding-bottom)]  pl-[var(--title-right-padding-left)]">
        <p
          className=" w-[var(--title-desc-width)]
        text-spec_desc_title leading-[var(--title-desc-line-height)] tracking-[var(--title-desc-letter-spacing)]"
        >
          {decscription}
        </p>
      </div>
    </div>
  );
};

export default Description;
