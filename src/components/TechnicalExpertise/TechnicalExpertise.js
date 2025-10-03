import React from "react";
import { cn } from "../../lib/utils";
import { HeadingH2, ParagraphElement, Button } from "../ui";
import ExpertiseCard from "./ExpertiseCard";

const TechnicalExpertise = ({ data, className }) => {
  const { title, subtitle, categories } = data;

  return (
    <section className={cn("", className)} id="technical-stack">
      <div className="container">
        <div className="text-center mb-sm">
          <HeadingH2>{title}</HeadingH2>
          <ParagraphElement color="secondary" noMargin>
            {subtitle}
          </ParagraphElement>
        </div>

        <div className="space-y-2 sm:space-y-4 mb-sm">
          {categories.map((category, index) => (
            <ExpertiseCard
              key={index}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            key={"schedule-developer-interview"}
            href={data.ctaButton.href}
            target={data.ctaButton.target || "_self"}
            className="w-full font-normal sm:w-auto"
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
