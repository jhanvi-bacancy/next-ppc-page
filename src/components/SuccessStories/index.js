import React from "react";
import Carousel from "../Carousel";
import SuccessStory from "./SuccessStory";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import { Button } from "../ui";
import { cn } from "../../lib/utils";
import { ArrowIcon } from "@/icons";

export const SuccessStoriesSection = ({ data, className }) => {
  const { title, description, successStories } = data;

  const CustomArrow = ({ className, style, onClick, direction }) => {
    const isDisabled = className?.includes("slick-disabled");
    const baseClasses =
      "!absolute !p-0 !rounded-full shadow-md z-30 flex items-center justify-center";
    const layoutClasses =
      "bottom-[-28px] left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2";
    const positionClass =
      direction === "next"
        ? "ml-10 md:ml-0 md:!-right-5"
        : "-ml-10 md:ml-0 md:!-left-5";
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
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HeadingH2 className="mb-4">{title}</HeadingH2>
          <ParagraphElement>{description}</ParagraphElement>
        </div>

        <div className="relative mb-12 z-0">
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
            variant="filled"
            size="md"
            className="font-normal px-8"
            uppercase
          >
            Share Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};
