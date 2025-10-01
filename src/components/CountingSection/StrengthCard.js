import React from "react";
import { HeadingH2, ParagraphElement } from "../ui";

const StrengthCard = ({ number, title }) => {
  return (
    <div className="bg-white boxed shadow-lg h-full flex flex-col justify-center">
      <HeadingH2 color="primary" className="text-h1">{number}</HeadingH2>
      <ParagraphElement color="secondary" noMargin>
        {title}
      </ParagraphElement>
    </div>
  );
};

export default StrengthCard;
