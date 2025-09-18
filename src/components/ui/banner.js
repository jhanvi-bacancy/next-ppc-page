import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { HeadingH1, ParagraphElement } from "./typography";
import { cn } from "../../lib/utils";

// Banner with list component
export function BannerWithList({ data, className }) {
  const { backgroundImage, badge, title, description, ctaButton, statsList } =
    data;

  // Fallback URL for images
  const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

  return (
    <section
      className={cn(
        "bg-dark mt-97 py-lg flex items-center relative min-h-banner-height",
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
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-5 relative z-10 container white items-center lg:max-w-fit !mx-md">
        {/* Left Content */}
        <div className="lg:col-span-3">
          {badge && (
            <div className="mb-5 w-fit">
              <ParagraphElement
                color="primary"
                className="border-b-2 border-primary pb-2 font-semibold"
              >
                {badge}
              </ParagraphElement>
            </div>
          )}

          <HeadingH1 color="white" className="mb-5">
            {title.text} <span className="text-primary">{title.highlight}</span>{" "}
            {title.suffix}
          </HeadingH1>

          <ParagraphElement color="white" className="text-base mb-5">
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
                {ctaButton.icon && (
                  <Image
                    src={`${cdnImage}${ctaButton.icon}`}
                    alt="icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                )}
                {ctaButton.text}
              </Button>
            </div>
          )}
        </div>

        {/* Right Content - Image */}
        <div className="lg:col-span-2 lg:block hidden">
          {/* Stats Grid */}
          <div className="">
            {statsList.map((stat, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm mb-4 w-3/4"
              >
                <div className="mr-2">
                  <Image
                    src={`${cdnImage}${stat.icon}`}
                    alt={stat.text}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <p className="text-base w-3/4">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
