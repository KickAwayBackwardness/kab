import React from "react";
import NormalPhoto from "./NormalPhoto";
import Pharagraph from "./Pharagraph";

const Article = () => {
  return (
    <div className="max-w-content h-fit ml-content_left pt-[var(--spec-news-content-padding-top)]">
      <article>
        <Pharagraph />
        <NormalPhoto
          url="https://a.storyblok.com/f/165555/1920x1080/490e17d59b/rw_devdiary_aug_boonstorefront.jpg/m/715x0/smart/filters:quality(85)"
          name="Boon storefront"
        />
      </article>
    </div>
  );
};

export default Article;
