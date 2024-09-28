import React from "react";
import SmallText from "../../../vendors/Text/SmallText";

const SubText = () => {
  return (
    <div className="mt-[var(--sub-text-margin-top)] flex justify-between">
      <SmallText text="Không muốn tối cổ - Cập nhật năng nổ" />
      <SmallText text="Tin mới nhất: 13.08.24" />
    </div>
  );
};

export default SubText;
