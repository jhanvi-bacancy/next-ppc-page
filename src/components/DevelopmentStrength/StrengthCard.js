import React from "react";
import { HeadingH2, ParagraphElement } from "../ui";

const StrengthCard = ({ number, title }) => {
  return (
    <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg h-full flex flex-col justify-center gap-3">
      <HeadingH2 className="!text-primary text-3xl">{number}</HeadingH2>
      <ParagraphElement className="!text-secondary text-base">
        {title}
      </ParagraphElement>
    </div>
  );
};

export default StrengthCard;
