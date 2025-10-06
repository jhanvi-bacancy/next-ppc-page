import React from "react";
import Image from "next/image";
import { HeadingH2, ParagraphElement, Button } from "../ui";
import { cn } from "../../lib/utils";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const aiTalentSectionData = {
  title: "Get Your Work Done Faster with",
  highlight: "AI-Enhanced Talent",
  description: [
    "Our developers leverage powerful AI tools to automate tasks, enhance productivity, and optimize workflows.",
    "Get 3X faster Product delivery than ordinary development process.",
    "Launch your First Module/Product in 15 Days!",
  ],
  tools: [
    {
      name: "GitHub Copilot",
      icon: `${cdnImage}landing/images/icons/copilot.svg`,
    },
    { name: "Cursor AI", icon: `${cdnImage}landing/images/icons/cursor.svg` },
  ],
  headingIcon: `${cdnImage}landing/images/icons/heading-icon.svg`,
  bacancyLogo: `${cdnImage}landing/images/icons/bacancy-icon.svg`,
  ctaButton: {
    text: "Talk to Our Expert",
    href: "#form",
    target: "_blank",
  },
};

const AITalentSection = ({ className }) => {
  const {
    title,
    highlight,
    description,
    headingIcon,
    bacancyLogo,
    tools,
    ctaButton,
  } = aiTalentSectionData;
  return (
    <section className={cn("", className)}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="grid gap-sm md:gap-0">
            <HeadingH2 noMargin>
              {title} <span className="text-primary">{highlight}</span>{" "}
              <div className="inline-block h-svg-icon-32 w-svg-icon-32">
                <Image
                  src={headingIcon}
                  alt="star-icon"
                  height={27}
                  width={27}
                  className="inline-block h-full w-full"
                />
              </div>
            </HeadingH2>

            <div className="grid">
              {description.map((item, index) =>
                index < description.length - 1 ? (
                  <ParagraphElement color="secondary" key={index}>{item}</ParagraphElement>
                ) : (
                  <ParagraphElement color="secondary" key={index} className="font-semibold">
                    {item}
                  </ParagraphElement>
                )
              )}
            </div>

            <div>
              <Button
                className="font-normal"
                href="#form"
                target={ctaButton.target || "_self"}
              >
                {ctaButton.text}
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <div className="bg-white boxed w-full">
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
                <div className="text-h2 text-dark font-normal flex-shrink-0">
                  +
                </div>

                {/* AI Tools Stack */}
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
                  {/* GitHub Copilot Card */}
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="border-4 sm:border-6 md:border-8 border-light-orange boxed p-2"
                    >
                      <div className="flex flex-col items-center gap-2 sm:gap-3">
                        <Image
                          src={tool.icon}
                          alt={tool.name}
                          width={192}
                          height={192}
                          className="w-11 h-11 md:w-14 md:h-14 object-contain"
                        />
                        <ParagraphElement className="font-semibold text-center text-wrap">
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

export default AITalentSection;
