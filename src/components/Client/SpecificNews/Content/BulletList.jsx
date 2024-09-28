import React from "react";
import Dot from "../../../vendors/Dot/Dot";

const BulletList = ({ bulletList }) => {
  const renderList = () => {
    return bulletList.map((item, index) => {
      return (
        <li
          key={index}
          className="pl-[var(--spec-news-list-padding-left)] mb-[var(--spec-news-list-margin-bottom)] relative"
        >
          <div className=" absolute top-[.5rem] left-0">
            <Dot color="black" />
          </div>
          <span
            className=" leading-[var(--spec-news-pharagraph-line-height)]
     tracking-[var(--spec-news-pharagraph-letter-spacing)]
   text-spec_pharagraph text-whyteInktrap"
            dangerouslySetInnerHTML={{ __html: item }}
          ></span>
        </li>
      );
    });
  };
  return (
    <ul
      className="m-[var(--spec-news-list-ol-ul-margin)]
  w-[var(--spec-news-pharagraph-width)]"
    >
      {renderList()}
    </ul>
  );
};

export default BulletList;
