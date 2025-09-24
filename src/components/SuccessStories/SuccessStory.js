import React from "react";
import Image from "next/image";
import { HeadingH3, HeadingH4, ParagraphElement } from "../ui/typography";

const SuccessStory = ({
  category,
  title,
  description,
  clientRequirement,
  result,
  image,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="flex flex-col lg:flex-col gap-8">
        {/* Image */}
        <div>
          <div className="relative h-[400px] w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Category Badge */}
          <span className="inline-block px-4 py-1 bg-orange-500 text-white rounded-full text-sm mb-4">
            {category}
          </span>

          {/* Title */}
          <HeadingH3 className="!mb-0">{title}</HeadingH3>

          {/* Description */}
          <ParagraphElement className="mb-8 !text-secondary text-sm leading-relaxed">
            {description}
          </ParagraphElement>

          {/* Client Requirement Section */}
          <div className="mb-8">
            <HeadingH4 className="!mb-0">Client Requirement</HeadingH4>
            <ParagraphElement className="!text-secondary text-sm leading-relaxed">
              {clientRequirement}
            </ParagraphElement>
          </div>

          {/* Result Section */}
          <div>
            <HeadingH4 className="!mb-0">Result</HeadingH4>
            <ParagraphElement className="!text-secondary text-sm leading-relaxed">
              {result}
            </ParagraphElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
