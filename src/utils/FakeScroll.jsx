import React from "react";

const FakeScroll = () => {
  window.onscroll = function () {
    let scrollPosition = window.scrollY; // Get the current scroll position
    let fakeScrollNTOD = document.querySelector(".NOTD-fake-scroll"); // Select the element
    let fakeScrollContinue = document.querySelector(".countinue-fake-scroll"); // Select the element

    // Apply the scroll position as needed (e.g., to move it vertically with the scroll)
    fakeScrollNTOD.style.top = scrollPosition * -1 + "px"; // Adjusting top position based on scroll

    // Apply the scroll position as needed (e.g., to move it vertically with the scroll)
    fakeScrollContinue.style.top = scrollPosition * -1 + "px"; // Adjusting top position based on scroll
  };

  return <></>;
};

export default FakeScroll;
