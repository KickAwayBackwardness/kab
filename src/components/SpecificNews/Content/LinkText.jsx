import React from "react";

const LinkText = ({ text, link }) => {
  return (
    <a
      className=" m-[var(--spec-news-link-text-margin)] 
  font-[var(--spec-news-link-font-weight)]
  underline inline-block
  "
      href={link}
    >
      {text}
    </a>
  );
};

export default LinkText;
