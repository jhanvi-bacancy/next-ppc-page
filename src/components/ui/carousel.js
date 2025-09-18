import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH6,
  HeadingH5,
  ParagraphElement,
} from "./typography";
import { cn } from "../../lib/utils";
import { Button } from "./button";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

export function ExpertCarousel({ title, subtitle, experts, className }) {
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
        .slick-slider {
          margin-bottom: 80px;
        }
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
      <div className="container mx-auto px-20">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <HeadingH2 className="mb-4">{title}</HeadingH2>
          <HeadingH4 className="">{subtitle}</HeadingH4>
        </div>

        {/* Experts Carousel */}
        <Slider {...sliderSettings}>
          {experts.map((expert, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-light rounded-lg p-6 shadow-sm border border-gray-100">
                {/* Expert Header */}
                <div className="flex items-center gap-4 mb-9">
                  <div className="w-97 h-97 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <HeadingH6 className="truncate !mb-2">
                      {expert.name}
                    </HeadingH6>
                    <p className="text-gray-600 text-sm truncate">
                      {expert.role}
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-9">
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm !mb-0.5">
                      {expert.experience}
                    </p>
                    <p className="text-sm text-gray-600 mb-0.5">Experience</p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm !mb-0.5">
                      {expert.availability}
                    </p>
                    <p className="text-sm text-gray-600 mb-0.5">Availability</p>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm !mb-0.5">
                      {expert.projects}
                    </p>
                    <p className="text-sm text-gray-600 mb-0.5">Completed</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm !mb-9 leading-relaxed line-clamp-3">
                  {expert.description}
                </p>

                {/* Expert Skills */}
                <div className="mb-9">
                  <span className="inline-flex items-center px-2 py-1 bg-dark text-white relative pr-3 text-sm">
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
                <div className="mb-9">
                  <span className="font-medium text-sm text-gray-900">
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
                <div className="mb-9">
                  <span className="font-medium text-sm text-gray-900">
                    Worked With
                  </span>
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
                <Button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary transition-colors font-normal text-sm">
                  HIRE {expert.name.toUpperCase()}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
