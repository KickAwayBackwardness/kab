import React from "react";
import hackyText from "../../../utils/hacky-text";
import ScrollIndicator from "../../vendors/ScrollIndicator";

const Header = () => {
  const handleHover = (event, text) => {
    hackyText(event.target, text);
  };
  return (
    <nav className="w-full h-[50px] bg-transparent relative rounded-tr-[10px] text-white">
      <ul className="flex items-center justify-center h-full gap-8">
        <li
          className="uppercase cursor-pointer text-ibm text-[11px] hacky-text relative z-10
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-white before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-black hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "Trang chủ")}
        >
          trang chủ
        </li>
        <li
          className="uppercase cursor-pointer text-ibm text-[11px] hacky-text relative z-10
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-white before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-black hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "the keep")}
        >
          <a href="/details">the keep</a>
        </li>
        <li
          className="uppercase cursor-pointer text-ibm text-[11px] hacky-text relative z-10
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-white before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-black hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "factions")}
        >
          factions
        </li>
        <li
          className="uppercase cursor-pointer text-ibm text-[11px] hacky-text relative z-10
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-white before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-black hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "the world")}
        >
          the world
        </li>
      </ul>
      <ScrollIndicator />
    </nav>
  );
};

export default Header;
