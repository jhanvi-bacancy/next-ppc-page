import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeadingH3, ParagraphElement, Button } from "../ui";

const StepCard = ({
  stepNumber,
  title,
  description,
  contentImage,
  stepIcon,
  dateButton,
  isButton,
  bgColor,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {/* Step Icon and Number Box */}
      <div className="flex items-center gap-2 bg-white rounded-lg px-6 py-3 -mb-4 z-10 relative shadow-md">
        <Image
          src={stepIcon}
          alt={`Step ${stepNumber} icon`}
          className="!w-14 !h-14 object-contain"
          width={32}
          height={32}
        />
        <ParagraphElement
          color="primary"
          className="font-semibold uppercase"
          noMargin
        >
          STEP {stepNumber}
        </ParagraphElement>
      </div>

      {/* Main Card Container */}
      <div className="bg-white boxed w-full flex flex-col items-center pb-sm mb-sm">
        {/* Title */}
        <HeadingH3 className="uppercase pt-6 text-center text-h4">
          {title}
        </HeadingH3>

        {/* Content Image */}
        <div className="px-6 flex-1 flex flex-col">
          <div
            className={cn(
              "bg-gray-50 boxed overflow-hidden p-4 flex items-center justify-center mb-6",
              bgColor
            )}
          >
            <Image
              src={contentImage}
              alt={`${title} content`}
              className="w-full h-auto min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:h-[250px] object-cover"
              width={400}
              height={250}
              priority
            />
          </div>

          {/* Date Text/Button */}
          {isButton ? (
            <Button
              variant="filled"
              size="md"
              className="w-full font-normal"
              href={dateButton.href}
              target={dateButton.target || "_self"}
              uppercase
            >
              {dateButton.text}
            </Button>
          ) : (
            <Button
              variant="text"
              size="md"
              className="w-full font-normal text-secondary cursor-default hover:none focus:outline-0"
              uppercase
            >
              {dateButton.text}
            </Button>
          )}
        </div>
      </div>

      {/* Description */}
      <ParagraphElement className="text-sm !text-secondary" noMargin>
        {description}
      </ParagraphElement>
    </div>
  );
};

export default StepCard;
