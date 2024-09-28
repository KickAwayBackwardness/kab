import React from "react";
import Dot from "../../../vendors/Dot/Dot";
import SmallText from "../../../vendors/Text/SmallText";
import CategoryText from "../../../vendors/Text/CategoryText";

const ListNewTitleBlock = () => {
  return (
    <div className="p-[var(--list-news-title-block-padding)] flex justify-between items-start border-b-frame border-frame_color">
      <div className="flex items-center">
        <Dot color="black" />
        <SmallText text="27 STORIES" />
      </div>
      <div>
        <CategoryText text="ALL NEWS" isActive={true} />
        <CategoryText text="Updates" isActive={false} />
        <CategoryText text="Community" isActive={false} />
        <CategoryText text="Finders Lab" isActive={false} />
      </div>
    </div>
  );
};

export default ListNewTitleBlock;
