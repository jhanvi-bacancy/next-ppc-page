import React from "react";
import Image from "next/image";
import { HeadingH3, HeadingH4, ParagraphElement } from "../ui/typography";
import { renderHighlightedText } from "@/lib/helper";

const ReviewCard = ({ review, highlight, name, designation, companyLogo }) => {
  return (
    <div className="bg-dark p-8 rounded-3xl max-w-[650px] mx-auto flex flex-col">
      {/* Review Text */}
      <div className="h-[250px] grow">
        <HeadingH3 className="!text-white text-[2.5rem]">
          {review.startsWith('"') ? "" : '"'}
          {renderHighlightedText(review, highlight, "span")}
          {review.endsWith('"') ? "" : '"'}
        </HeadingH3>
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between grow">
        <div className="flex flex-col">
          <HeadingH4 className="!text-white !mb-1 !font-semibold">
            {name}
          </HeadingH4>
          <ParagraphElement className="!text-white !text-sm">
            {designation}
          </ParagraphElement>
        </div>

        {companyLogo && (
          <Image
            src={companyLogo}
            alt={`${name}'s company`}
            className="object-contain !h-20 !w-40"
            width={128}
            height={32}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
