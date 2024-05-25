import React from "react";

const MyButton = (props) => {
  return (
    <button
      className={`cursor-pointer rounded-md border font-semibold duration-500 transition-transform hover:scale-105 flex justify-center items-center bg-accent text-background border-accent hover:bg-background hover:text-accent  space-x-1
       ${props.className}`}
    >
      <span className={`${props.buttonNameClassName}`}>{props.text}</span>
      {props.icon}
      {/* <RiExternalLinkLine /> */}
    </button>
  );
};

export default MyButton;
