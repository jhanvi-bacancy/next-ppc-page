import React from "react";
import Image from "next/image";
import { ParagraphElement } from "../ui";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-sm">
      <div className="h-svg-icon w-svg-icon">
        <Image src={icon} alt={title} width={48} height={48} className="object-contain" />
      </div>
      <ParagraphElement color="secondary" noMargin>
        {title}
      </ParagraphElement>
    </div>
  );
};

export default FeatureCard;
