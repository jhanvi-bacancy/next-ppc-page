import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { HeadingH2, ParagraphElement, Button, HeadingH3 } from "../ui";
import { cn } from "../../lib/utils";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const ExpertCarousel = ({ title, subtitle, experts, className }) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    appendDots: (dots) => (
      <div className="w-full">
        <ul className="flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className="w-6 h-1 p-0 m-0 border-0 rounded-none transition-all duration-300 ease-in-out cursor-pointer bg-[#D1D5DB] hover:bg-gray-400 [&.slick-active]:!bg-[#f58220]"
        aria-label={`Go to page ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots", // Override Slick's absolute positioning
  };

  return (
    <section className={cn("", className)}>
      <style jsx global>{`
        .slick-dots {
          position: static;
          margin-top: 16px;
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
        .slick-dots {
          @apply mt-16;
        }
        .slick-dots li {
          @apply mx-1;
          opacity: 1 !important;
        }
        .slick-dots li button {
          @apply opacity-100;
          background-color: #d1d5db !important;
        }
        .slick-dots li button:before {
          @apply hidden;
          content: none;
        }
        .slick-dots li.slick-active button {
          background-color: #f58220 !important;
        }
        /* Equal height cards in slider */
        .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .slick-slide > div {
          height: 100%;
          width: 100%;
          display: flex;
        }
        .slick-slide > div > div {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        /* Ensure buttons are at bottom */
        .slick-slide .bg-gray-light.boxed {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .slick-slide .bg-gray-light.boxed > div:last-child {
          margin-top: auto;
        }
      `}</style>
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-sm">
          <HeadingH2>{title}</HeadingH2>
          <ParagraphElement color="secondary">{subtitle}</ParagraphElement>
        </div>

        {/* Experts Carousel */}
        <Slider {...sliderSettings}>
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-gray-light boxed flex flex-col h-full p-6 min-h-[600px]"
            >
              {/* Expert Header */}
              <div className="flex items-center gap-6 mb-6 h-[80px]">
                <div className="size-60 rounded-full relative flex-shrink-0">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <HeadingH3 className="truncate text-h4" noMargin>
                    {expert.name}
                  </HeadingH3>
                  <ParagraphElement
                    color="secondary"
                    className="truncate text-sm"
                    noMargin
                  >
                    {expert.role}
                  </ParagraphElement>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-6 h-[60px]">
                <div className="text-left flex flex-col justify-center">
                  <ParagraphElement
                    className="font-bold text-sm !mb-1"
                    noMargin
                  >
                    {expert.experience}
                  </ParagraphElement>
                  <ParagraphElement
                    className="text-sm"
                    color="secondary"
                    noMargin
                  >
                    Experience
                  </ParagraphElement>
                </div>
                <div className="text-left flex flex-col justify-center">
                  <ParagraphElement
                    className="font-bold text-sm !mb-1"
                    noMargin
                  >
                    {expert.availability}
                  </ParagraphElement>
                  <ParagraphElement
                    className="text-sm"
                    color="secondary"
                    noMargin
                  >
                    Availability
                  </ParagraphElement>
                </div>
                <div className="text-left flex flex-col justify-center">
                  <ParagraphElement
                    className="font-bold text-sm !mb-1"
                    noMargin
                  >
                    {expert.projects}
                  </ParagraphElement>
                  <ParagraphElement
                    className="text-sm"
                    color="secondary"
                    noMargin
                  >
                    Completed
                  </ParagraphElement>
                </div>
              </div>

              {/* Content Area - Flexible */}
              <div className="flex-1 flex flex-col min-h-[400px]">
                <div className="flex-1 space-y-6">
                  {/* Description */}
                  <div className="h-[72px]">
                    <ParagraphElement
                      className="text-sm leading-relaxed line-clamp-3"
                      color="secondary"
                    >
                      {expert.description}
                    </ParagraphElement>
                  </div>

                  {/* Expert Skills */}
                  <div className="space-y-2 h-[100px]">
                    <span className="inline-flex items-center px-3 py-2 bg-gray-900 text-white relative pr-6 text-sm font-medium">
                      <Image
                        src={`${cdnImage}main-boot-5/images/laravel-ppc/ic_star.png`}
                        alt="star"
                        title="star"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0"
                      />
                      Expert in
                      <Image
                        src={`${cdnImage}main-boot-5/images/laravel-ppc/holder.png`}
                        alt="holder"
                        width={8}
                        height={24}
                        className="absolute -right-2 top-0 bottom-0 h-full"
                      />
                    </span>
                    <ParagraphElement className="text-sm">
                      {expert.expertIn.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 bg-light-orange border border-primary py-1 mr-2 mt-2 inline-block"
                        >
                          {skill}
                        </span>
                      ))}
                    </ParagraphElement>
                  </div>

                  {/* Additional Skills */}
                  <div className="space-y-2 h-[100px]">
                    <span className="font-medium text-sm dark block">
                      Also Skilled in
                    </span>
                    <ParagraphElement className="text-sm">
                      {expert.alsoSkilledIn.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 border py-1 mr-2 mt-2 inline-block"
                        >
                          {skill}
                        </span>
                      ))}
                    </ParagraphElement>
                  </div>

                  {/* Worked With */}
                  <div className="space-y-2 h-[80px]">
                    <span className="font-medium text-sm dark block">
                      Worked With
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {expert.workedWith.map((company, idx) => (
                        <span
                          key={idx}
                          className="relative h-9 w-9 flex-shrink-0 inline-block"
                        >
                          <Image
                            src={company.logo}
                            alt={company.name}
                            fill
                            className="object-contain"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hire Button */}
              <div className="mt-6">
                <Button
                  className="transition-colors font-normal"
                  uppercase
                  fullWidth
                >
                  HIRE {expert.name}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExpertCarousel;
