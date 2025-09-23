import React from "react";
import { cn } from "@/lib/utils";
import { HeadingH2, ParagraphElement } from "@/components/ui/typography";
import { StepCard } from "./StepCard";

export const StepsSection = ({ data, className }) => {
  const { title, subtitle, steps, backgroundImage } = data;

  return (
    <section
      className={cn("py-20 relative", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <HeadingH2 className="mb-4">
            {title.text}
            <span className="text-primary"> {title.highlight}</span>
            {title.suffix && ` ${title.suffix}`}
          </HeadingH2>
          <ParagraphElement className="">{subtitle}</ParagraphElement>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              contentImage={step.contentImage}
              stepIcon={step.stepIcon}
              dateButton={step.dateButton}
              isButton={step.isButton}
              bgColor={step.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
