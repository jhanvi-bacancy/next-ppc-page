import React from "react";
import { HeadingH3, ParagraphElement } from "../ui";

const StrengthCard = ({ number, title }) => {
  return (
    <div className="bg-white boxed shadow-lg h-full flex flex-col justify-center">
      <HeadingH3 color="primary" className="text-h1" noMargin>
        {number}
      </HeadingH3>
      <ParagraphElement color="secondary" noMargin>
        {title}
      </ParagraphElement>
    </div>
  );
};

export default StrengthCard;
