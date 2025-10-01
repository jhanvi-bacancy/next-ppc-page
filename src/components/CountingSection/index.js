import React from "react";
import Image from "next/image";
import StrengthCard from "./StrengthCard";
import FeatureCard from "./FeatureCard";
import { HeadingH2, HeadingH3, ParagraphElement } from "../ui";
import { cn } from "../../lib/utils";

const cdnImage = process.env.NEXT_PUBLIC_IMG_URL;

const DevelopmentStrength = ({ variable, className }) => {
  // Static Data
  const developmentStrengthData = {
    title: `${variable.yearsOfExperience} Years and Counting...`,
    backgroundImage: `${cdnImage}landing/images/aus-img/dot-bg.png`,
    sideImage: `${cdnImage}landing/images/common-img/side-img-5.jpg`,
    description: `By establishing an ${variable.technology} development center, we offer our tailored engagement models that cater to the unique needs by providing B2B and B2C Dedicated development support.`,
    strengths: [
      {
        number: "1050+",
        title: "Agile Developers",
      },
      {
        number: variable.techDevelopers,
        title: `${variable.technology} Developers`,
      },
      {
        number: "05",
        title: "Agile Coaches",
      },
      {
        number: "14",
        title: "Certified Scrum Masters",
      },
    ],
    features: [
      {
        icon: `${cdnImage}landing/images/common-img/counting-ico-1.png`,
        title: "Work at Your Time Zone",
      },
      {
        icon: `${cdnImage}landing/images/common-img/counting-ico-3.png`,
        title: "Easy Communication",
      },
      {
        icon: `${cdnImage}landing/images/common-img/counting-ico-4.png`,
        title: "Hire in 48 Hours",
      },
      {
        icon: `${cdnImage}landing/images/common-img/counting-ico-2.png`,
        title: "In Business Since 2011",
      },
      {
        icon: `${cdnImage}landing/images/common-img/counting-ico-5.png`,
        title: "5/5 Pro User Rating",
      },
    ],
  };

  const {
    title,
    backgroundImage,
    sideImage,
    description,
    strengths,
    features,
  } = developmentStrengthData;

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
