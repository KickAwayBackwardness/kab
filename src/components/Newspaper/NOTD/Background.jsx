import React from "react";
import ParallaxImage from "../../vendors/Parallax/ParallaxImage";

const Background = () => {
  return (
    <div className="relative">
      <ParallaxImage
        img="https://a.storyblok.com/f/165555/3200x1626/ae1606d2b3/the-origin-story.png/m/1440x810"
        alt="background newspaper"
      />
      {/* <img
        src="https://a.storyblok.com/f/165555/3200x1626/ae1606d2b3/the-origin-story.png/m/1440x810"
        alt=""
        className="parallax"
      /> */}
      <div className=" absolute z-[3] top-0 left-0 w-full h-[var(--img-top-interverted-cut-height)] flex items-center justify-between">
        <div className="w-[var(--img-top-interverted-cut-width)] h-full bg-transparent"></div>
        <img src="/img/top.svg" className="h-full w-auto " alt="" />
        <div className="flex-grow h-full bg-white"></div>
      </div>

      <div className=" absolute  z-[3]  bottom-0 left-0 w-full h-[var(--img-bottom-interverted-cut-height)] flex  items-center justify-between">
        <div className="h-full w-master_img_bottom_intervert_cut_width bg-white"></div>

        <div className="flex-grow h-full bg-transparent relative ">
          <img
            src="/img/bottom.svg"
            className="h-full w-[var(--svg-cut-for-img-bottom-interverted-cut-width)] object-cover absolute top-0 left-0 bg-transparent "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
