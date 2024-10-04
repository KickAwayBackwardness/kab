import React, { useEffect } from "react";
import ListNewTitleBlock from "./ListNewTitleBlock";
import NewsItem from "./NewsItem";

const ListNews = () => {
  return (
    <section>
      <div className="max-w-content h-fit ml-content_left pt-[var(--list-news-padding-top)] border-b-frame border-frame_color">
        <div className="w-[100%] flex">
          {/* left */}
          <div className="news-item-left flex-1 border-r-frame border-frame_color">
            <ListNewTitleBlock />
            <NewsItem link="#" />
            <NewsItem link="#" />
          </div>
          {/* right */}
          <div className="news-item-right flex-1">
            <NewsItem link="#" />
            <NewsItem link="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListNews;

// ont-size: clamp(6.4px, .625vw, 12px);
