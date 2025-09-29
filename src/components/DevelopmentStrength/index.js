import React from "react";
import Image from "next/image";
import StrengthCard from "./StrengthCard";
import FeatureCard from "./FeatureCard";
import { HeadingH2, HeadingH5 } from "../ui";
import { cn } from "../../lib/utils";

const DevelopmentStrength = ({ data, className }) => {
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HeadingH2 className="font-bold mb-6">{title}</HeadingH2>
          <HeadingH5 className="!text-secondary font-normal mb-12">
            {description}
          </HeadingH5>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col h-full">
              <HeadingH5 className="mb-6 lg:mb-8">
                Our Development Center Strength
              </HeadingH5>
              <div className="grid grid-cols-2 gap-4 lg:gap-6 flex-grow">
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
                  className="rounded-lg w-full h-full object-cover"
                  style={{ maxHeight: "585px" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20">
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
