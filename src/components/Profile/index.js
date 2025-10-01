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
            <div key={index} className="bg-gray-light boxed">
              {/* Expert Header */}
              <div className="flex items-center gap-6 mb-sm">
                <div className="size-60 rounded-full relative">
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
              <div className="grid grid-cols-3 gap-2 mb-sm">
                <div className="text-left">
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
                <div className="text-left">
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
                <div className="text-left">
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

              {/* Description */}
              <ParagraphElement
                className="text-sm leading-relaxed line-clamp-3"
                color="secondary"
              >
                {expert.description}
              </ParagraphElement>

              {/* Expert Skills */}
              <div className="mb-sm">
                <span className="inline-flex items-center px-2 py-1 bg-dark white relative pr-3 text-sm">
                  <Image
                    src={`${cdnImage}main-boot-5/images/laravel-ppc/ic_star.png`}
                    alt="star"
                    title="star"
                    width={16}
                    height={16}
                    className="mr-2 w-auto"
                  />
                  <Image
                    src={`${cdnImage}main-boot-5/images/laravel-ppc/holder.png`}
                    alt="holder"
                    width={8}
                    height={24}
                    className="absolute bottom-0 -right-2 top-0 w-auto"
                  />
                  Expert in
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
              <div className="mb-sm">
                <span className="font-medium text-sm dark">
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
              <div className="mb-sm">
                <span className="font-medium text-sm dark">Worked With</span>
                <ParagraphElement className="text-sm">
                  {expert.workedWith.map((company, idx) => (
                    <span
                      key={idx}
                      className="relative h-9 w-9 flex-shrink-0 mr-2 mt-2 inline-block"
                    >
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                      />
                    </span>
                  ))}
                </ParagraphElement>
              </div>

              {/* Hire Button */}
              <Button
                className="transition-colors font-normal"
                uppercase
                fullWidth
              >
                HIRE {expert.name}
              </Button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExpertCarousel;
