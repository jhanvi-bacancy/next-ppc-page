import React from "react";
import { cn } from "@/lib/utils";
import { HeadingH2, ParagraphElement } from "@/components/ui/typography";
import { StepCard } from "./StepCard";
import { Button } from "@/components/ui";
import Slider from "react-slick";
import { ArrowIcon } from "@/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StepsSection = ({ data, className }) => {
  const { title, subtitle, steps, backgroundImage } = data;

  const CustomArrow = ({ className, onClick, direction }) => {
    const isDisabled = className?.includes("slick-disabled");
    return (
      <Button
        onClick={onClick}
        variant="light"
        className={cn(
          "!absolute !p-0 top-1/2 -translate-y-1/2 !w-8 !h-8 !rounded-full shadow-md z-10 md:hidden",
          direction === "next" ? "-right-5" : "-left-5",
          isDisabled && "!opacity-50 !cursor-not-allowed"
        )}
        disabled={isDisabled}
      >
        <ArrowIcon
          direction={direction === "prev" ? "left" : "right"}
          className="text-primary"
          size="sm"
        />
      </Button>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <section
      className={cn("py-10 sm:py-20 relative overflow-hidden", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <HeadingH2 className="mb-4">
            {title.text}
            <span className="text-primary"> {title.highlight}</span>
            {title.suffix && ` ${title.suffix}`}
          </HeadingH2>
          <ParagraphElement>{subtitle}</ParagraphElement>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Mobile View */}
          <div className="md:hidden px-4">
            <style jsx global>{`
              .slick-dots {
                position: static;
                margin-top: 24px;
              }
              .slick-dots li {
                margin: 0;
                width: auto;
                height: auto;
              }
              .slick-dots li button {
                width: 24px;
                height: 4px;
                padding: 0;
              }
              .slick-dots li {
                margin: 0 4px;
                opacity: 1 !important;
              }
              .slick-dots li button {
                opacity: 1;
                background-color: #d1d5db !important;
              }
              .slick-dots li button:before {
                display: none;
                content: none;
              }
              .slick-dots li.slick-active button {
                background-color: #f58220 !important;
              }
            `}</style>

            <Slider {...sliderSettings}>
              {steps.map((step, index) => (
                <div key={index} className="px-2">
                  <StepCard
                    stepNumber={step.stepNumber}
                    title={step.title}
                    description={step.description}
                    contentImage={step.contentImage}
                    stepIcon={step.stepIcon}
                    dateButton={step.dateButton}
                    isButton={step.isButton}
                    bgColor={step.bgColor}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                contentImage={step.contentImage}
                stepIcon={step.stepIcon}
                dateButton={step.dateButton}
                isButton={step.isButton}
                bgColor={step.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
