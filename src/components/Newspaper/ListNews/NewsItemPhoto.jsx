import React from "react";
import NewsItemPhotoParallax from "../../vendors/Parallax/NewsItemPhotoParallax";

const NewsItemPhoto = ({ src, alt }) => {
  return (
    <div className=" mt-[var(--news-item-photo-margin-top)] relative">
      <NewsItemPhotoParallax src={src} alt={alt} />
    </div>
  );
};

export default NewsItemPhoto;
