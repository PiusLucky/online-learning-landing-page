import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  imageType: "instructions" | "students";
  title: string;
  buttonText: string;
}

function WhatIsSkillineCard({ imageType, title, buttonText }: IProps) {
  return (
    <div
      className={`flex relative flex-grow justify-center min-h-[400px] flex-col gap-4 items-center rounded-[20px] ${
        imageType === "instructions" ? "bg-instruction" : "bg-students"
      }`}
    >
      <div className="absolute bg-[#171b4180] top-0 left-0 right-0 bottom-0 rounded-[20px]"></div>
      <p className="uppercase font-bold text-white text-[32px] z-10">{title}</p>
      <MainButton
        text={buttonText}
        classes={`w-[283px] z-10 ${
          imageType === "students"
            ? "bg-[#23BDEE] text-white font-bold"
            : "bg-transparent border border-white text-white font-bold  hover:border-none"
        }`}
      />
    </div>
  );
}

export default WhatIsSkillineCard;
