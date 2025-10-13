import React from "react";
import { Carousel, Button, HeadingH2, ParagraphElement } from "../ui";
import SuccessStory from "./SuccessStory";
import { cn } from "../../lib/utils";
import { ArrowIcon } from "../../icons";

const SuccessStoriesSection = ({ data, className, formData }) => {
  const { title, description, successStories } = data;

  const CustomArrow = ({ className, style, onClick, direction }) => {
    const isDisabled = className?.includes("slick-disabled");
    const baseClasses =
      "!absolute !p-0 !rounded-full shadow-md z-30 flex items-center justify-center";
    const layoutClasses =
      "-top-[32px] right-0 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2";
    const positionClass =
      direction === "next"
        ? "right-0 md:right-auto md:!-right-5"
        : "right-12 md:right-auto md:!-left-5";
    const stateClass = isDisabled ? "!opacity-50 !cursor-not-allowed" : "";

    return (
      <Button
        onClick={onClick}
        style={style}
        variant="light"
        className={cn(baseClasses, layoutClasses, positionClass, stateClass)}
        disabled={isDisabled}
      >
        <ArrowIcon
          direction={direction === "prev" ? "left" : "right"}
          className={"bg-primary text-white rounded-full"}
          size="lg"
        />
      </Button>
    );
  };

  const carouselSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <section className={cn("", className)} id="case-study">
      <div className="container">
        <div className="text-center mb-sm">
          <HeadingH2>{title}</HeadingH2>
          <ParagraphElement color="secondary" noMargin>
            {description}
          </ParagraphElement>
        </div>

        <div className="relative mb-sm mt-lg md:mt-0 z-0">
          <style jsx global>{`
            .slick-track {
              display: flex !important;
            }
            .slick-slide {
              height: inherit !important;
              > div {
                height: 100%;
              }
            }
          `}</style>
          <Carousel carouselSettings={carouselSettings}>
            {successStories.map((story, index) => (
              <SuccessStory key={index} {...story} />
            ))}
          </Carousel>
        </div>

        <div className="relative z-20 text-center">
          <Button
            className="font-normal"
            href={`${formData.leadingPageEndpoint}#form`}
            target="_self"
            uppercase
          >
            Share Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
