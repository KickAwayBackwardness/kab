import React, { useRef } from "react";
import Dot from "../../vendors/Dot/Dot";
import SmallText from "../../vendors/Text/SmallText";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxPhoto = ({ img, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["15%", "-10%"]
  );

  return (
    <div
      className="w-[var(--spec-news-photo-width)] 
        m-[var(--spec-news-margin-center)]
        my-[var(--spec-news-photo-margin-y)]
        "
    >
      <div
        className="image-container-spec-news-details-page relative"
        ref={ref}
      >
        <motion.img
          src={img}
          alt={alt}
          className="w-full h-auto"
          style={{ translateY: translateY }}
        />
        <div className=" absolute right-0 bottom-0">
          <img src="/img/corner-photo.svg" alt="corner" />
        </div>
      </div>
      <div className=" flex items-center mt-[var(--spec-news-desc-photo-margin-top)]">
        <Dot color="black" />
        <SmallText text={alt} />
      </div>
    </div>
  );
};

export default ParallaxPhoto;
