import React from "react";
import Image from "next/image";
import StrengthCard from "./StrengthCard";
import FeatureCard from "./FeatureCard";
import { HeadingH2, HeadingH3, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";

const DevelopmentStrength = ({ data, className }) => {
  // Static Data

  const {
    title,
    backgroundImage,
    sideImage,
    description,
    strengths,
    features,
  } = data;

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-center mb-sm">
          <HeadingH2 className="">{title}</HeadingH2>
          <ParagraphElement className="font-normal" color="secondary" noMargin>
            {description}
          </ParagraphElement>
        </div>

        <div className="relative z-10 mb-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-sm">
            {/* Left Content */}
            <div className="flex flex-col h-full">
              <HeadingH3 className="text-h4">
                Our Development Center Strength
              </HeadingH3>
              <div className="grid grid-cols-2 gap-sm flex-grow">
                {strengths.map((strength, index) => (
                  <StrengthCard
                    key={index}
                    number={strength.number}
                    title={strength.title}
                  />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center h-full">
              <div className="relative w-full h-full">
                <Image
                  src={sideImage}
                  alt="Development Center"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                  style={{ maxHeight: "585px" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-sm">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStrength;
