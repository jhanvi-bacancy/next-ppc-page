import React from "react";
import Image from "next/image";
import { HeadingH3, ParagraphElement } from "../ui";

const SuccessStory = ({
  category,
  title,
  description,
  clientRequirement,
  result,
  image,
}) => {
  return (
    <div className="bg-white boxed h-full">
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="mb-sm">
          <div className="relative boxed aspect-[4/3] w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Category Badge */}
          <ParagraphElement
            color="white"
            className="inline-block px-4 py-2 bg-primary rounded-full text-sm"
          >
            {category}
          </ParagraphElement>

          {/* Title */}
          <HeadingH3 className="text-h5" noMargin>
            {title}
          </HeadingH3>

          {/* Description */}
          <div className="mb-sm">
            <ParagraphElement
              className="text-sm leading-relaxed"
              color="secondary"
            >
              {description}
            </ParagraphElement>
          </div>

          {/* Client Requirement Section */}
          <div className="mb-sm">
            <ParagraphElement className="text-h6 font-bold !mb-0" noMargin>
              Client Requirement
            </ParagraphElement>
            <ParagraphElement
              className="text-sm leading-relaxed"
              color="secondary"
              noMargin
            >
              {clientRequirement}
            </ParagraphElement>
          </div>

          {/* Result Section */}
          <div>
            <ParagraphElement className="text-h6 font-bold !mb-0" noMargin>
              Result
            </ParagraphElement>
            <ParagraphElement
              className="text-sm leading-relaxed"
              color="secondary"
              noMargin
            >
              {result}
            </ParagraphElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
