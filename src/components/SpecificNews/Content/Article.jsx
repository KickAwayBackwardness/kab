import React from "react";
import NormalPhoto from "./NormalPhoto";
import Pharagraph from "./Pharagraph";
import ParallaxPhoto from "./ParallaxPhoto";
import BulletList from "./BulletList";
import Devider from "./Devider";
import NumberList from "./NumberList";
import Signature from "./Signature";

const Article = ({ article }) => {
  const render = () => {
    return article.map((item, index) => {
      if (item.type === "PHARAGRAPH") {
        return (
          <Pharagraph
            key={index}
            text={item.content.text}
            sectionHeading={item.content.sectionHeading}
            subHeading={item.content.subHeading}
          />
        );
      }
      if (item.type === "PHOTO") {
        if (!item.content.isParallax) {
          return (
            <NormalPhoto
              key={index}
              img={item.content.url}
              alt={item.content.name}
            />
          );
        }
        return (
          <ParallaxPhoto
            key={index}
            img={item.content.url}
            alt={item.content.name}
          />
        );
      }

      if (item.type === "DEVIDER") {
        return <Devider key={index} />;
      }
      if (item.type === "SIGNATURE") {
        return <Signature key={index} text={item.content.text} />;
      }
      if (item.type === "BULLETLIST") {
        return <BulletList key={index} bulletList={item.content} />;
      }

      if (item.type === "NUMBERLIST") {
        return <NumberList key={index} numberList={item.content} />;
      }
    });
  };

  return (
    <div className="max-w-content h-fit ml-content_left py-[var(--spec-news-content-padding-y)]">
      <article className="spec_news">{article && render()}</article>
    </div>
  );
};

export default Article;
