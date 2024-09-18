import React from "react";
import { useSelector } from "react-redux";

const LogoIcon = () => {
  const { isOpen } = useSelector((state) => state.humburgerSlice);
  return (
    <div className="logo relative z-[2]  flex items-center justify-center w-[65px] text-center">
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 54 102"
          className="w-[40px] "
        >
          <path
            fill={isOpen ? "white" : "black"}
            fillRule="evenodd"
            d="M17.958 70.176c0 .873.708 1.581 1.581 1.581h2.799c.873 0 1.58.708 1.58 1.58V100.1c0 .873.709 1.58 1.582 1.58h2.799a1.58 1.58 0 0 0 1.58-1.58V73.338c0-.873.708-1.58 1.581-1.58h2.799a1.58 1.58 0 0 0 1.58-1.582V55.401c0-.873.709-1.581 1.582-1.581h14.83a1.58 1.58 0 0 0 1.58-1.58v-2.8a1.58 1.58 0 0 0-1.58-1.58h-14.83a1.58 1.58 0 0 1-1.581-1.581V31.503a1.58 1.58 0 0 0-1.581-1.58H31.46a1.58 1.58 0 0 1-1.58-1.581V1.58A1.58 1.58 0 0 0 28.298 0h-2.8a1.58 1.58 0 0 0-1.58 1.58v26.761a1.58 1.58 0 0 1-1.581 1.581h-2.799a1.58 1.58 0 0 0-1.58 1.581V46.28a1.58 1.58 0 0 1-1.582 1.58H1.581A1.58 1.58 0 0 0 0 49.44v2.8c0 .872.708 1.58 1.58 1.58h14.797c.873 0 1.581.708 1.581 1.58v14.776Zm7.537-40.286a1.58 1.58 0 0 0-1.58 1.58v14.804a1.58 1.58 0 0 1-1.581 1.581h-2.8a1.58 1.58 0 0 0-1.58 1.581v2.814c0 .873.708 1.58 1.58 1.58h2.8c.873 0 1.58.709 1.58 1.581v14.79c0 .873.708 1.58 1.581 1.58h2.8a1.58 1.58 0 0 0 1.58-1.58V55.397c0-.873.708-1.581 1.581-1.581h2.799a1.58 1.58 0 0 0 1.58-1.581v-2.788a1.58 1.58 0 0 0-1.58-1.58h-2.799a1.58 1.58 0 0 1-1.58-1.581V31.47a1.58 1.58 0 0 0-1.582-1.58h-2.799Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default LogoIcon;
