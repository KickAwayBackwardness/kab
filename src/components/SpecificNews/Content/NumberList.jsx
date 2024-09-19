import React from "react";
import Dot from "../../vendors/Dot/Dot";

const NumberList = ({ numberList }) => {
  const renderList = () => {
    return numberList.map((item, index) => {
      return (
        <li
          key={index}
          className="pl-[var(--spec-news-list-number-padding-left)] mb-[var(--spec-news-list-margin-bottom)] relative"
        >
          <div className=" absolute top-[0] left-0">
            <span
              className=" leading-[var(--spec-news-pharagraph-line-height)]
     tracking-[var(--spec-news-pharagraph-letter-spacing)]
   text-spec_pharagraph text-whyteInktrap"
            >
              {index + 1}.
            </span>
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

export default NumberList;
