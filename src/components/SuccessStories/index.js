import React from "react";
import Carousel from "../Carousel";
import SuccessStory from "./SuccessStory";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import { Button } from "../ui";
import { cn } from "../../lib/utils";
import { ArrowIcon } from "@/icons";

const successStories = [
  {
    category: "E-COMMERCE",
    title: "ACR",
    description:
      "ACR is a leading eCommerce website building a wide range of Electronics for emergency beacons, designed through combined technology expertise in the marine, aviation, and military markets with one purpose: to save lives.",
    clientRequirement:
      "A website in a way that makes the customer's buying journey become easy and seamless and enables category-wise product classification.",
    result:
      "A website was built with a proper classification of a wide range of Electronics beacons including Marine beacons, Outdoor Beacons and Aviation Beacons.",
    image:
      "https://assets.bacancytechnology.com/landing/images/case-study/cs-4.jpg",
  },
  {
    category: "E-COMMERCE",
    title: "National Geographic",
    description:
      "National Geographic is an American magazine legend with a rich history of 125 years. It is one of the most widely read magazines of all time.",
    clientRequirement:
      "Redesigning the B2C website with the aim of flawless availability of the channel's information for the user as previously the user was not able to buy monthly subscriptions and the application received insufficient subscribers even after ranking on top.",
    result:
      "A unified subscription solution was built that helped their end-users to buy the subscription easily.",
    image:
      "https://assets.bacancytechnology.com/landing/images/case-study/cs-1.jpg",
  },
  {
    category: "BIKE AND CYCLING PORTAL",
    title: "JAGZ MTB",
    description:
      "Jagz MTB app is built to enhance the mountain experience. It connects travelers with lodging hosts and professional guides and helps them search for accommodations, tours, and local discounts whenever they travel.",
    clientRequirement:
      "A portal that connects the users to mountain biking locals whenever they are out to travel.",
    result:
      "The portal is built with services that enable the user to connect with the biking local. Moreover, the biking local can search for any region and create and customize his/her profile.",
    image:
      "https://assets.bacancytechnology.com/landing/images/case-study/cs-2.jpg",
  },
  {
    category: "BIKE AND CYCLING PORTAL",
    title: "Academy Sports & Outdoor",
    description:
      "Academy Sports + Outdoors is one of the largest sporting goods and outdoor stores in the USA, with 259+ stores selling a wide range of sport equipments.",
    clientRequirement:
      "Difficulty in changing the app labels & configurations at any time. In addition, there was trouble in recommending the products to users based on their interests.",
    result:
      "ContenStack and Kibo were used and therefore app labels and configuration was possible at any time. Now, the users get recommendations as per their interests and previous searches.",
    image:
      "https://assets.bacancytechnology.com/landing/images/case-study/cs-3.jpg",
  },
];

export const SuccessStoriesSection = ({ className }) => {
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
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
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
  };

  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HeadingH2 className="mb-4">
            Our Amazing Customer Success Stories
          </HeadingH2>
          <ParagraphElement>
            Over the past 13+ years, we have built awesome applications for our
            valuable clients to solve real-life problems and help them overcome
            start-up challenges.
          </ParagraphElement>
        </div>

        <div className="relative mb-12 z-0 sm:mx-0">
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
