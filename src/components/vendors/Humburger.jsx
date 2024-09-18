import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHumburger } from "../../redux/humburgerSlice";
import HumburgerIcon from "./svg/HumburgerIcon";

const Humburger = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.humburgerSlice);
  return (
    <div
      className={`
      fixed
      z-[5] h-humburger w-humburger 
      bg-transparent
      top-[var(--padding-outer)] left-[var(--padding-outer)]
      border-frame border-frame_color
      rounded-tl-side_menu cursor-pointer flex items-center 
      justify-center  hover:border-black 
      `}
      onClick={() => dispatch(toggleHumburger())}
    >
      <HumburgerIcon />
    </div>
  );
};

export default Humburger;
