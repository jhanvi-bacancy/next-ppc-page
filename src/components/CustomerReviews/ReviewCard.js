import React from "react";
import Image from "next/image";
import { HeadingH3, HeadingH4, ParagraphElement } from "../ui/typography";
import { renderHighlightedText } from "@/lib/helper";

const ReviewCard = ({ review, highlight, name, designation, companyLogo }) => {
  return (
    <div className="bg-dark p-8 rounded-3xl max-w-[300px] sm:max-w-[400px] md:max-w-[650px] mx-auto flex flex-col">
      {/* Review Text */}
      <div className="h-[200px] xs:h-[250px] grow">
        <HeadingH3 className="!text-white text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] leading-relaxed">
          {review.startsWith('"') ? "" : '"'}
          {renderHighlightedText(review, highlight, "span")}
          {review.endsWith('"') ? "" : '"'}
        </HeadingH3>
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between grow">
        <div className="flex flex-col">
          <HeadingH4 className="!text-white !mb-1 !font-semibold text-[1rem] xs:text-[1.25rem]">
            {name}
          </HeadingH4>
          <ParagraphElement className="!text-white !text-sm text-[0.875rem] xs:text-[1rem]">
            {designation}
          </ParagraphElement>
        </div>

        {companyLogo && (
          <Image
            src={companyLogo}
            alt={`${name}'s company`}
            className="object-contain !h-20 !w-40 xs:h-24 xs:w-48"
            width={128}
            height={32}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
