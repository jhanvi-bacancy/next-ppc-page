import React from "react";
import Image from "next/image";
import { ParagraphElement } from "../ui";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <ParagraphElement className="!text-secondary text-center">
        {title}
      </ParagraphElement>
    </div>
  );
};

export default FeatureCard;
