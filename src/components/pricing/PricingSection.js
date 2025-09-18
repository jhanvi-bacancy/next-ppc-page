import React from "react";
import { HeadingH2, ParagraphElement } from "../ui/typography";
import { PricingCard } from "./PricingCard";
import { cn } from "../../lib/utils";

export function PricingSection({ className, data }) {
  return (
    <section className={cn("", className)}>
      <div className="container px-4 md:px-8 lg:px-20">
        <div className="text-center mx-auto mb-12">
          <HeadingH2 className="mb-6">
            Developer Hiring Made Simple:
            <span className="text-primary"> Hourly</span>,
            <span className="text-primary"> Monthly</span> or
            <span className="text-primary"> Fixed Cost</span>
            <br />
            Based on Your Needs
          </HeadingH2>
          <ParagraphElement className="text-secondary">
            {data.subtitle}
          </ParagraphElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={cn("", index === 1 ? "lg:mt-0" : "lg:mt-6")}
            >
              <PricingCard
                highlighted={plan.highlighted}
                currency={plan.currency}
                className={plan.className}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                key={index}
                ctaButton={plan.ctaButton}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
