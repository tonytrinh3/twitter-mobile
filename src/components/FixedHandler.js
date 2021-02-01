import React from "react";
import { ReactComponent as Heart } from "assets/img/heart.svg";

//chose handler to see tweet
const chosenHandler = (defaultHandles, setDefaultHandles, handle) => {
  window.scrollTo(0, 0);
  if (defaultHandles[0] === handle) {
    return;
  } else {
    const newDefaultHandles = [defaultHandles[1], defaultHandles[0]];
    setDefaultHandles(newDefaultHandles);
  }
};

const FixedHandler = ({ defaultHandles, setDefaultHandles, handleImg }) => {
  return (
    <div className="fixed-handlers">
      <div
        className="fixed-handlers__handle fixed-handlers__handle--1"
        onClick={() => {
          chosenHandler(defaultHandles, setDefaultHandles, defaultHandles[0]);
        }}
      >
        <img src={handleImg} alt={defaultHandles[0]} className="profile-img" />
        <h2>@{defaultHandles[0]}</h2>
        <Heart className="fixed-handlers__handle__heart" />
      </div>

      <div
        className="fixed-handlers__handle fixed-handlers__handle--2"
        onClick={() => {
          chosenHandler(defaultHandles, setDefaultHandles, defaultHandles[1]);
        }}
      >
        <div className="fixed-handlers__handle__profile-placeholder profile-img">
          <p>{defaultHandles[1].split("")[0].toUpperCase()}</p>
        </div>
        <h2>@{defaultHandles[1]}</h2>
        <Heart className="fixed-handlers__handle__heart" />
      </div>
    </div>
  );
};

export default FixedHandler;
