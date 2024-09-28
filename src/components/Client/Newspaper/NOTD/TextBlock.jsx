import { useEffect, useState, useRef } from "react";
import Dot from "../../../vendors/Dot/Dot";
import SmallText from "../../../vendors/Text/SmallText";
import ContinueMasterText from "../../../vendors/Text/ContinueMasterText";
import RightArrow from "../../../vendors/svg/RightArrow";

const TextBlock = ({ backgroundHeight, backgroundTop }) => {
  const refContent = useRef(null);
  const [contentTop, setContentTop] = useState(0);
  useEffect(() => {
    if (refContent.current) {
      setContentTop(refContent.current.offsetTop);
    }
  }, []);

  const continue_text_block_top = backgroundTop - contentTop;

  return (
    <>
      <div
        className=" max-w-content left-content_left w-full h-content fixed top-content_top overflow-scroll z-[3] pointer-events-none"
        ref={refContent}
      >
        <div
          className={`NOTD-fake-scroll w-full relative  `}
          style={{ height: backgroundHeight + "px" }}
        >
          <div
            className={` absolute w-full h-full left-0 flex flex-col justify-between`}
            style={{ top: continue_text_block_top + "px" }}
          >
            {/* top */}
            <div className=" w-full ">
              <div className="p-[var(--NOTD-text-block-padding)] text-white">
                <SmallText text="featured" />
                <span className="ml-[var(--NOTD-icon--margin)]">
                  <Dot color="white" />
                </span>
                <SmallText text="27.10.91" />
              </div>
            </div>
            {/* bottom */}
            <div className="h-[var(--NOTD-text-block-bottom-height)] w-full  border-t-frame border-frame_color  ">
              <div className="p-[var(--NOTD-text-block-padding)] text-white flex items-start  ">
                <div className="">
                  <div className="mb-[var(--NOTD-master-text-margin-bottom)]">
                    <ContinueMasterText text="the gioi cua kab" />
                  </div>
                  <div className=" flex items-center">
                    <SmallText text="read story" />
                    <div className="w-[var(--small-icon-font-size)] h-[var(--small-icon-font-size)] ml-[var(--NOTD-icon--margin)]">
                      <RightArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBlock;
