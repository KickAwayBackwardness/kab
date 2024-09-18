import React from "react";
import LinkText from "./LinkText";

const Pharagraph = () => {
  return (
    <div
      className=" m-[var(--spec-news-margin-center)]
    w-[var(--spec-news-pharagraph-width)]
  "
    >
      <p
        className=" leading-[var(--spec-news-pharagraph-line-height)]
     tracking-[var(--spec-news-pharagraph-letter-spacing)]
   text-spec_pharagraph text-whyteInktrap"
      >
        In our <LinkText text="first developer diaryfor" link="google.com" />{" "}
        Ramen Wars, we showcased art for locations in Prisma City and the
        characters living in it. This month, we are exploring the ‘gamified’
        section of the event and previewing how the components of Ramen Wars
        convey a story that brings our world to life. <br /> <br />
        Before we take a deeper look, it’s exciting to see the art assets
        progressing. KPR has always focused on producing art that is both
        skillful and imaginative, so we’re going to make sure we continue with
        the many locations that will be an integral part of the Ramen Wars
        experience.
        <br />
        <br /> You know we take our world-building seriously when even the
        meatmongers are given this kind of attention…
      </p>
    </div>
  );
};

export default Pharagraph;
