import React from "react";
import { cn } from "../../lib/utils";
import { HeadingH2, ParagraphElement, Button } from "../ui";
import ExpertiseCard from "./ExpertiseCard";

const TechnicalExpertise = ({ data, className }) => {
  const { title, subtitle, categories } = data;

  return (
    <section className={cn("", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <HeadingH2 className="mb-4">{title}</HeadingH2>
          <ParagraphElement className="mx-auto text-sm sm:text-base">
            {subtitle}
          </ParagraphElement>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {categories.map((category, index) => (
            <ExpertiseCard
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            key={"schedule-developer-interview"}
            href={data.ctaButton.href}
            target={data.ctaButton.target || "_self"}
            variant="filled"
            size="md"
            className="px-4 sm:px-8 w-full font-normal sm:w-auto"
            uppercase
          >
            {data.ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
