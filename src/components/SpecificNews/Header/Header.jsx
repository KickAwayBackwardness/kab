import React from "react";
import hackyText from "../../../utils/hacky-text";

const Header = () => {
  const handleHover = (event, text) => {
    hackyText(event.target, text);
  };
  return (
    <nav className="fixed z-[11] max-w-content w-full h-[var(--sub-menu-height)] top-header_top left-header_left bg-transparent  rounded-tr-frame text-[black] ">
      <ul className="flex items-center justify-center h-full gap-8 relative">
        <li
          className="uppercase cursor-pointer text-ibm text-header_text hacky-text relative
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-[black] before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-[white] hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "chapter 1")}
        >
          chapter 1
        </li>
        <li
          className="uppercase cursor-pointer text-ibm text-header_text hacky-text relative
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-[black] before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-[white] hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "index 2")}
        >
          index 2
        </li>
        <li
          className="uppercase cursor-pointer text-ibm text-header_text hacky-text relative
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-[black] before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-[white] hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "index 3")}
        >
          index 3
        </li>
        <li
          className="uppercase cursor-pointer text-ibm text-header_text hacky-text relative
           before:content-[''] before:absolute before:w-0 before:h-[100%] before:bg-[black] before:top-0 before:right-0 before:-z-[1] before:transition-all before:duration-500 before:ease-in-out hover:text-[white] hover:before:w-[100%] hover:before:right-unset hover:before:left-0
          "
          onMouseEnter={(event) => handleHover(event, "Conclusion")}
        >
          Conclusion
        </li>
      </ul>
    </nav>
  );
};

export default Header;
