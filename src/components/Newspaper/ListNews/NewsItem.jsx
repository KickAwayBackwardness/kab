import React from "react";
import SmallText from "../../vendors/Text/SmallText";
import Dot from "../../vendors/Dot/Dot";
import NewsItemTitle from "../../vendors/Text/NewsItemTitle";
import NewsItemPhoto from "./NewsItemPhoto";

const NewsItem = ({ link }) => {
  return (
    <div className="news-item group relative">
      <a
        href={link}
        className="p-[--news-item-padding] z-[-2] group-hover:z-[1] group-hover:border-transparent relative block border-frame_color border-b-frame"
      >
        <div className=" group-hover:text-white flex justify-between">
          <div className="flex items-center">
            <Dot color="black" />
            <SmallText text="updates" />
          </div>
          <SmallText text="23.08.24" />
        </div>
        <NewsItemTitle title="Sector 3: Collect, Create, Participate!" />
        <NewsItemPhoto
          src="https://a.storyblok.com/f/165555/1920x1080/2e9d6169da/hero.png/m/598x428/smart/filters:quality(85)"
          alt="News item"
        />
      </a>
      <div className="z-[0] group-hover:opacity-100 transition-all duration-[250ms] ease-linear rounded-[var(--news-item-overlay-rounded)] absolute w-[var(--news-item-overlay-size)] h-[var(--news-item-overlay-size)] bg-black top-news_item_overlay_top left-news_item_overlay_left opacity-0"></div>
    </div>
  );
};

export default NewsItem;
