import React from "react";
import Title from "./Title";
import Description from "./Description";

const NewsHeading = ({ newsHeading, genreral }) => {
  return (
    <section>
      <div className="mt-content_top max-w-content h-fit ml-content_left mb-[10px]">
        <div className="w-[100%]">
          {/* title */}
          <Title title={newsHeading.title} type={genreral.type} />
          {/* decscription */}
          <Description decscription={newsHeading.decscription} />
        </div>
      </div>
    </section>
  );
};

export default NewsHeading;
