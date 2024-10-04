import React from "react";
import Background from "./Background";
import { useEffect, useState, useRef } from "react";
import TextBlock from "./TextBlock";

const NOTD = () => {
  const refNOTD = useRef(null);

  const [backgroundTop, getBackgroundTop] = useState(0);
  const [backgroundHeight, getBackgroundHeight] = useState(0);

  useEffect(() => {
    if (refNOTD.current) {
      getBackgroundTop(refNOTD.current.offsetTop);
      getBackgroundHeight(refNOTD.current.getBoundingClientRect().height);
    }
  });

  return (
    <div>
      <div className="w-fit h-fit" ref={refNOTD}>
        <Background />
      </div>
      <TextBlock
        backgroundTop={backgroundTop}
        backgroundHeight={backgroundHeight}
      />
    </div>
  );
};

export default NOTD;
