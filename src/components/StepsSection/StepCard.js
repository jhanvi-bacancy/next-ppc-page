import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeadingH3, ParagraphElement } from "@/components/ui/typography";
import { Button } from "../ui";

export const StepCard = ({
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
        <span className="text-primary font-semibold text-base uppercase">
          STEP {stepNumber}
        </span>
      </div>

      {/* Main Card Container */}
      <div className="bg-white rounded-xl shadow-md w-full min-h-[450px] flex flex-col items-center pb-8">
        {/* Title */}
        <HeadingH3 className="uppercase text-dark px-8 pt-8 text-center">
          {title}
        </HeadingH3>

        {/* Content Image */}
        <div className="px-6 flex-1 flex flex-col">
          <div
            className={cn(
              "bg-gray-50 rounded-lg overflow-hidden p-4 flex items-center justify-center mb-6",
              bgColor
            )}
          >
            <Image
              src={contentImage}
              alt={`${title} content`}
              className="w-full h-auto min-h-[250px] max-h-[250px] object-contain"
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
      <ParagraphElement className="text-sm !text-secondary mt-6">
        {description}
      </ParagraphElement>
    </div>
  );
};
