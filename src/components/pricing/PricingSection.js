import React from "react";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import { PricingCard } from "./PricingCard";
import { RequirementSelector } from "./RequirementSelector";
import { cn } from "../../lib/utils";
import { Button } from "../ui";

export function PricingSection({ className, data }) {
  const handleRequirementSubmit = (selectedOption) => {
    // Handle the submission based on the selected option
    console.log("Selected option:", selectedOption);
  };

  return (
    <section className={cn("py-8 md:py-12", className)}>
      <div className="container px-4 md:px-8 lg:px-20">
        <div className="text-center mx-auto mb-8 md:mb-12">
          <HeadingH2 className="mb-4 md:mb-6">
            Developer Hiring Made Simple:
            <span className="text-primary"> Hourly</span>,
            <span className="text-primary"> Monthly</span> or
            <span className="text-primary"> Fixed Cost</span>
            <br className="hidden md:block" />
            Based on Your Needs
          </HeadingH2>
          <ParagraphElement className="text-secondary">
            {data.subtitle}
          </ParagraphElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-0 mb-8 md:mb-12">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "px-0",
                index === 1
                  ? "lg:mt-0 shadow-[0px_0.625vw_1.25vw_#00000029] rounded-xl"
                  : "lg:mt-6"
              )}
            >
              <PricingCard
                highlighted={plan.highlighted}
                currency={plan.currency}
                className={plan.className}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                ctaButton={plan.ctaButton}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mb-8 md:mb-12">
          <Button
            href={data.ctaButton.href}
            variant="filled"
            size="md"
            className="font-normal px-8 w-full sm:w-auto"
            uppercase
          >
            {data.ctaButton.text}
          </Button>
        </div>

        <RequirementSelector
          onSubmit={handleRequirementSubmit}
          options={data.options}
        />
      </div>
    </section>
  );
}
