import React from "react";
import Title from "./Title";
import Description from "./Description";

const NewsHeading = () => {
  return (
    <section>
      <div className="mt-content_top max-w-content h-fit ml-content_left mb-[10px]">
        <div className="w-[100%]">
          {/* title */}
          <Title />
          {/* decscription */}
          <Description />
        </div>
      </div>
    </section>
  );
};

export default NewsHeading;
