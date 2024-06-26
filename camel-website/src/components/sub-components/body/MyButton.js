import React from "react";
import "../../sub-components/style/Theme.css";
// import "../../components/Theme.css";

const MyButton = (props) => {
  return (
    <button
      className={`cursor-pointer rounded-md border font-semibold font-ubuntu duration-500 transition-transform hover:scale-105 flex justify-center items-center bg-accent border-accent  space-x-1 ${props.className}`}
    >
      <span>{props.text}</span>
      {props.icon}
    </button>
  );
};

export default MyButton;
