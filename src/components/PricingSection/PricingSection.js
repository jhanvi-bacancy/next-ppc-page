import React from "react";
import { HeadingH2, ParagraphElement, Button } from "../ui";
import PricingCard from "./PricingCard";
import { cn } from "../../lib/utils";

const PricingSection = ({ className, data }) => {
  const handleRequirementSubmit = (selectedOption) => {
    // Handle the submission based on the selected option
    console.log("Selected option:", selectedOption);
  };

  return (
    <section className={cn("", className)} id="pricing">
      <div className="container">
        <div className="text-center mx-auto mb-sm">
          <HeadingH2>
            Developer Hiring Made Simple:
            <span className="primary"> Hourly</span>,
            <span className="primary"> Monthly</span> or
            <span className="primary"> Fixed Cost </span>
            <br className="hidden md:block" />
            Based on Your Needs
          </HeadingH2>
          <ParagraphElement color="secondary">{data.subtitle}</ParagraphElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-0 mb-sm md:px-sm">
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

        <div className="flex items-center justify-center mb-sm">
          <Button
            href={data.ctaButton.href}
            className="font-normal w-full sm:w-auto"
            fullWidth
            uppercase
          >
            {data.ctaButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
