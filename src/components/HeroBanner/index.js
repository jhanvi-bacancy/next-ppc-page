import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { HeadingH1, ParagraphElement } from "../ui/typography";
import { cn } from "../../lib/utils";

// Banner with list component
const BannerWithList = ({ data, className }) => {
  const { backgroundImage, badge, title, description, ctaButton, statsList } =
    data;

  // Fallback URL for images
  const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <section
      className={cn(
        "bg-dark py-lg flex items-center relative min-h-banner-height",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={`${cdnImage}${backgroundImage}`}
        alt="Banner background"
        width={1900}
        height={900}
        className="absolute inset-0 object-cover z-1 h-full w-full"
        priority
      />

      {/* Content */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-5 relative z-10 container white items-center">
        {/* Left Content */}
        <div className="lg:col-span-3">
          {badge && (
            <div className="w-fit">
              <ParagraphElement
                className="border-b-2 border-primary font-semibold"
                color="primary"
              >
                {badge}
              </ParagraphElement>
            </div>
          )}

          <HeadingH1 color="white">
            {title.text}
            <span className="text-primary">{title.highlight}</span>
            {title.suffix}
          </HeadingH1>

          <ParagraphElement color="white" className="text-base">
            {description}
          </ParagraphElement>

          {ctaButton && (
            <div className="flex gap-6 flex-wrap">
              <Button
                href={ctaButton.href}
                target={ctaButton.target || "_self"}
                variant="filled"
                size="md"
                uppercase
                fullWidth
                className="sm:w-auto font-normal"
              >
                {ctaButton.text}
              </Button>
            </div>
          )}
        </div>

        {/* Right Content - Image */}
        <div className="lg:col-span-2 w-full">
          {/* Stats Grid */}
          <div className="flex flex-col gap-sm">
            {statsList.map((stat, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm col-span-3"
              >
                <div className="svg-icon">
                  <Image
                    src={`${cdnImage}${stat.icon}`}
                    alt={stat.text}
                    width={40}
                    height={40}
                    className="h-full w-full"
                    priority
                  />
                </div>
                <ParagraphElement
                  className="text-base flex-1"
                  color="white"
                  noMargin
                >
                  {stat.text}
                </ParagraphElement>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWithList;
