import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import { cn } from "@/lib/utils";

export const AITalentSection = ({ data, className }) => {
  const {
    title,
    highlight,
    description,
    headingIcon,
    bacancyLogo,
    tools,
    ctaButton,
  } = data;
  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="grid gap-4">
            <HeadingH2 className="font-bold mb-2">
              {title} <span className="text-primary">{highlight}</span>{" "}
              <Image
                src={headingIcon}
                alt="star-icon"
                height={27}
                width={27}
                className="inline-block"
              />
            </HeadingH2>

            <div className="grid gap-1">
              {description.map((item, index) =>
                index < description.length - 1 ? (
                  <ParagraphElement key={index} className="mb-0">
                    {item}
                  </ParagraphElement>
                ) : (
                  <ParagraphElement key={index} className="font-semibold mb-0">
                    {item}
                  </ParagraphElement>
                )
              )}
            </div>

            <div>
              <Button
                variant="filled"
                size="md"
                className="px-12 font-normal"
                href="#form"
                target={ctaButton.target || "_self"}
              >
                {ctaButton.text}
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-3xl p-6 md:p-8 w-full">
              {/* Horizontal Layout Container */}
              <div className="flex items-center justify-evenly gap-4 sm:gap-6 md:gap-8">
                {/* Bacancy Logo */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 sm:w-28 sm:h-28 md:w-36 md:h-36">
                    <Image
                      src={bacancyLogo}
                      alt="Bacancy Logo"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Plus Sign */}
                <div className="text-3xl sm:text-4xl md:text-5xl text-dark font-normal flex-shrink-0">
                  +
                </div>

                {/* AI Tools Stack */}
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                  {/* GitHub Copilot Card */}
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="border-4 sm:border-6 md:border-8 border-light-orange rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6"
                    >
                      <div className="flex flex-col items-center gap-2 sm:gap-3">
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={48}
                          height={48}
                          className="w-11 h-11 md:w-14 md:h-14 object-contain"
                        />
                        <ParagraphElement className="font-semibold text-center text-sm sm:text-base">
                          {tool.name}
                        </ParagraphElement>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
